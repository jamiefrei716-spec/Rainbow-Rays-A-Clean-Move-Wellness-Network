import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { google } from "googleapis";
import dotenv from "dotenv";
import { GoogleGenAI, GenerateVideosOperation, Modality } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Gemini Flash Agent helper
async function askAgent(prompt: string, agentName: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `System: You are ${agentName} from Rainbow Rays, operating exclusively within the Minneapolis-Saint Paul Twin Cities area. Context: ${prompt}`
    });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error(`Error specifically for ${agentName}:`, error);
    return `Error: ${error instanceof Error ? error.message : String(error)}`;
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // Existing Agent Endpoints
  app.post("/api/ask-sally", async (req, res) => {
    const { prompt } = req.body;
    const response = await askAgent(prompt, "AI Sally (Concierge)");
    res.json({ response });
  });

  app.post("/api/ask-cody", async (req, res) => {
    const { prompt } = req.body;
    const response = await askAgent(prompt, "AI Cody (Operations)");
    res.json({ response });
  });

  app.post("/api/ask-rex", async (req, res) => {
    const { prompt } = req.body;
    const response = await askAgent(prompt, "AI Rex (Receptionist)");
    res.json({ response });
  });

  app.post("/api/ask-maya", async (req, res) => {
    const { prompt } = req.body;
    const response = await askAgent(prompt, "AI Maya (Marketing)");
    res.json({ response });
  });

  app.post("/api/ask-raestudio", async (req, res) => {
    const { prompt } = req.body;
    const response = await askAgent(prompt, "RaeStudio (Creative)");
    res.json({ response });
  });

  // Marketing Tools Endpoints
  
  // 1. Script/Post Content Generation
  app.post("/api/generate-marketing-post", async (req, res) => {
    try {
      const { prompt, platform } = req.body;
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Generate a free marketing campaign post for ${platform}. 
        Subject: ${prompt}. 
        Focus: Rainbow Rays brand values (inclusivity, Minneapolis-Saint Paul community).
        Include a catchy headline and creative hashtags.`
      });
      res.json({ content: response.text });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  // 2. Audio/Music Generation (Lyria)
  app.post("/api/generate-music", async (req, res) => {
    try {
      const { prompt } = req.body;
      const stream = await ai.models.generateContentStream({
        model: "lyria-3-clip-preview",
        contents: `Generate a 30-second upbeat Twin Cities themed background track. Style: ${prompt}`,
      });

      let audioBase64 = "";
      let mimeType = "audio/wav";

      for await (const chunk of stream) {
        const parts = chunk.candidates?.[0]?.content?.parts;
        if (!parts) continue;
        for (const part of parts) {
          if (part.inlineData?.data) {
            if (!audioBase64 && part.inlineData.mimeType) {
              mimeType = part.inlineData.mimeType;
            }
            audioBase64 += part.inlineData.data;
          }
        }
      }
      res.json({ audioBase64, mimeType });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  // 3. Video Generation (Veo)
  app.post("/api/generate-video", async (req, res) => {
    try {
      const { prompt } = req.body;
      const operation = await ai.models.generateVideos({
        model: 'veo-3.1-lite-generate-preview',
        prompt: `Cinematic footage of ${prompt} in Minneapolis-Saint Paul. High energy marketing style.`,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });
      res.json({ operationName: operation.name });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post("/api/video-status", async (req, res) => {
    try {
      const { operationName } = req.body;
      const op = new GenerateVideosOperation();
      op.name = operationName;
      const updated = await ai.operations.getVideosOperation({ operation: op });
      res.json({ done: updated.done });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post("/api/video-download", async (req, res) => {
    try {
      const { operationName } = req.body;
      const op = new GenerateVideosOperation();
      op.name = operationName;
      const updated = await ai.operations.getVideosOperation({ operation: op });
      const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
      if (!uri) throw new Error("Video not ready or URI missing");

      const videoRes = await fetch(uri, {
        headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY! },
      });
      
      res.setHeader('Content-Type', 'video/mp4');
      videoRes.body!.pipeTo(
        new WritableStream({
          write(chunk) { res.write(chunk); },
          close() { res.end(); },
        })
      );
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  // 4. Operational Suggestions (Rae)
  app.post("/api/rae-suggestions", async (req, res) => {
    try {
      const { dispatchRate, rotation } = req.body;
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `System: You are Rae, the core intelligence of Rainbow Rays in Minneapolis-Saint Paul.
        Current System State: Dispatch Rate at ${dispatchRate}%, Rotation at ${rotation}%. 
        Task: Provide 3 short, punchy, high-impact operational suggestions for the user. 
        Focus on local Twin Cities context (weather, local events, route efficiency). 
        Format as a JSON array of strings.`
      });
      
      // Clean up the response to ensure it's valid JSON
      const text = response.text || "[]";
      const jsonMatch = text.match(/\[.*\]/s);
      const suggestions = jsonMatch ? JSON.parse(jsonMatch[0]) : ["Optimize routes for I-35W traffic", "Increase lead capture in North Loop", "Sync dispatch with current weather patterns"];
      
      res.json({ suggestions });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  // 5. Social Media Broadcast
  app.post("/api/broadcast-social", async (req, res) => {
    try {
      const { content, type } = req.body;
      
      // In a real app, this would iterate through OAuth tokens for each platform
      // For this demo, we'll simulate a slight delay and return success
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      res.json({ 
        success: true, 
        platforms: ["Instagram", "Twitter", "Facebook", "LinkedIn"],
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
