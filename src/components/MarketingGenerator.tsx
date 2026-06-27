import React, { useState, useEffect } from 'react';
import { Video, Music, FileText, Loader2, Play, Download, Sparkles, Send, Share2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MarketingGenerator() {
  const [activeTab, setActiveTab] = useState<'script' | 'music' | 'video'>('script');
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [loading, setLoading] = useState(false);
  const [broadcasting, setBroadcasting] = useState(false);
  const [broadcastComplete, setBroadcastComplete] = useState(false);
  const [result, setResult] = useState<{ type: string; content?: string; url?: string; audioBase64?: string } | null>(null);
  const [operationName, setOperationName] = useState<string | null>(null);
  const [polling, setPolling] = useState(false);

  const broadcastToAll = async () => {
    if (!result) return;
    setBroadcasting(true);
    setBroadcastComplete(false);
    try {
      const res = await fetch('/api/broadcast-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: result.content || result.url, type: result.type }),
      });
      const data = await res.json();
      if (data.success) {
        setBroadcastComplete(true);
        setTimeout(() => setBroadcastComplete(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setBroadcasting(false);
    }
  };

  const generateScript = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate-marketing-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, platform }),
      });
      const data = await res.json();
      setResult({ type: 'script', content: data.content });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const generateMusic = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate-music', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.audioBase64) {
        const binary = atob(data.audioBase64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: data.mimeType || 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setResult({ type: 'music', url });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const generateVideo = async () => {
    setLoading(true);
    setOperationName(null);
    try {
      const res = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.operationName) {
        setOperationName(data.operationName);
        setPolling(true);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval: any;
    if (polling && operationName) {
      interval = setInterval(async () => {
        try {
          const res = await fetch('/api/video-status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ operationName }),
          });
          const data = await res.json();
          if (data.done) {
            setPolling(false);
            clearInterval(interval);
            // Download the video
            const downloadRes = await fetch('/api/video-download', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ operationName }),
            });
            const blob = await downloadRes.blob();
            const url = URL.createObjectURL(blob);
            setResult({ type: 'video', url });
            setLoading(false);
          }
        } catch (err) {
          console.error(err);
          setPolling(false);
          setLoading(false);
          clearInterval(interval);
        }
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [polling, operationName]);

  return (
    <div className="p-6 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-yellow-400" />
        <h2 className="text-xl font-bold uppercase tracking-tight">Marketing Post Generator</h2>
      </div>

      <div className="flex gap-2 mb-6 bg-black/40 p-1 rounded-xl w-fit">
        {[
          { id: 'script', icon: FileText, label: 'Script' },
          { id: 'music', icon: Music, label: 'Audio' },
          { id: 'video', icon: Video, label: 'Video' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id as any); setResult(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab.id ? 'bg-pink-600 text-white shadow-lg' : 'text-white/40 hover:text-white/70'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {activeTab === 'script' && (
          <div className="flex gap-2 mb-4">
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map(p => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                  platform === p ? 'bg-white text-black border-white' : 'border-white/10 text-white/40'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={
            activeTab === 'script' ? "What's the campaign about?" :
            activeTab === 'music' ? "Describe the vibe (e.g. Upbeat lo-fi, corporate tech)" :
            "What should happen in the video?"
          }
          className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-pink-500 transition-colors h-24 resize-none"
        />

        <button
          onClick={() => {
            if (activeTab === 'script') generateScript();
            else if (activeTab === 'music') generateMusic();
            else generateVideo();
          }}
          disabled={loading || !prompt}
          className="w-full py-3 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={16} />}
          {loading ? (polling ? 'Generating Video (May take minutes)...' : 'Working...') : `Generate ${activeTab}`}
        </button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10"
        >
          {result.type === 'script' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-[10px] uppercase font-black text-pink-400">Generated Copy</div>
                <p className="text-sm italic text-white/80 whitespace-pre-wrap">{result.content}</p>
              </div>
              
              <div className="pt-4 border-t border-white/5 space-y-3">
                <button
                  onClick={broadcastToAll}
                  disabled={broadcasting}
                  className={`w-full py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 transition-all ${
                    broadcastComplete ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-slate-200'
                  }`}
                >
                  {broadcasting ? <Loader2 size={14} className="animate-spin" /> : (broadcastComplete ? <CheckCircle2 size={14} /> : <Share2 size={14} />)}
                  {broadcasting ? 'Broadcasting Omni-Channel...' : (broadcastComplete ? 'Broadcast Successful' : 'Broadcast to All Platforms')}
                </button>
                
                <AnimatePresence>
                  {broadcasting && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 gap-2"
                    >
                      {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map((p, i) => (
                        <div key={p} className="flex items-center gap-2 text-[8px] font-black uppercase text-white/40">
                          <Loader2 size={10} className="animate-spin text-pink-500" />
                          Pushing to {p}...
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
          {result.type === 'music' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase font-black text-blue-400">Audio Preview</div>
                <a href={result.url} download="rainbow-rays-music.wav" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Download size={14} />
                </a>
              </div>
              <audio controls src={result.url} className="w-full h-8 opacity-70" />
              
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={broadcastToAll}
                  disabled={broadcasting}
                  className={`w-full py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 transition-all ${
                    broadcastComplete ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-500'
                  }`}
                >
                  {broadcasting ? <Loader2 size={14} className="animate-spin" /> : (broadcastComplete ? <CheckCircle2 size={14} /> : <Share2 size={14} />)}
                  {broadcasting ? 'Broadcasting Audio...' : (broadcastComplete ? 'Broadcast Successful' : 'Broadcast to All Platforms')}
                </button>
              </div>
            </div>
          )}
          {result.type === 'video' && (
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase font-black text-purple-400">Video Preview</div>
                <a href={result.url} download="marketing-video.mp4" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Download size={14} />
                </a>
              </div>
              <video controls src={result.url} className="w-full rounded-xl border border-white/10 shadow-2xl" />
              
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={broadcastToAll}
                  disabled={broadcasting}
                  className={`w-full py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 transition-all ${
                    broadcastComplete ? 'bg-green-500 text-white' : 'bg-purple-600 text-white hover:bg-purple-500'
                  }`}
                >
                  {broadcasting ? <Loader2 size={14} className="animate-spin" /> : (broadcastComplete ? <CheckCircle2 size={14} /> : <Share2 size={14} />)}
                  {broadcasting ? 'Broadcasting Video...' : (broadcastComplete ? 'Broadcast Successful' : 'Broadcast to All Platforms')}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
      
      <p className="mt-4 text-[9px] text-white/20 text-center uppercase tracking-widest">
        Powered by Gemini • Some features may require a paid API key
      </p>

      {/* Rae's Creative Intelligence */}
      <div className="mt-8 p-6 bg-white/5 rounded-[2.5rem] border border-pink-500/10">
        <div className="flex items-center gap-2 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-6">
          <Sparkles size={12} />
          Rae's Creative Insights
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-black/20 rounded-2xl border border-white/5">
            <div className="text-[10px] font-black text-white/40 uppercase mb-2">Trend Sync</div>
            <p className="text-xs font-bold leading-relaxed text-white/60 italic">
              "Current market sentiment in the Twin Cities favors 'Self-Reliance' themes. I recommend adjusting script tone to 'Empowering'."
            </p>
          </div>
          <div className="p-4 bg-black/20 rounded-2xl border border-white/5">
            <div className="text-[10px] font-black text-white/40 uppercase mb-2">Visual Optimization</div>
            <p className="text-xs font-bold leading-relaxed text-white/60 italic">
              "Indigo/Pink gradients show 12% higher engagement on mobile plug-ins. Synchronizing video nodes to this palette."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
