import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Table, 
  Calendar as CalendarIcon, 
  CheckSquare, 
  HardDrive, 
  LogOut, 
  Plus, 
  ExternalLink,
  ChevronRight,
  Search,
  Sparkles,
  Shield,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout, getAccessToken } from '../lib/workspace';

interface WorkspaceItem {
  id: string;
  name: string;
  type: 'doc' | 'sheet' | 'file' | 'event' | 'task';
  updatedAt: string;
  link?: string;
}

export function WorkspaceHub() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [driveFiles, setDriveFiles] = useState<WorkspaceItem[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<WorkspaceItem[]>([]);
  const [tasks, setTasks] = useState<WorkspaceItem[]>([]);

  useEffect(() => {
    const unsubscribe = initAuth(
      (u, t) => {
        setUser(u);
        setToken(t);
        setLoading(false);
        fetchData(t);
      },
      () => {
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const fetchData = async (accessToken: string) => {
    try {
      // Fetch Drive Files (Docs & Sheets)
      const driveRes = await fetch('https://www.googleapis.com/drive/v3/files?pageSize=5&fields=files(id,name,mimeType,modifiedTime,webViewLink)', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      const driveData = await driveRes.json();
      if (driveData.files) {
        setDriveFiles(driveData.files.map((f: any) => ({
          id: f.id,
          name: f.name,
          type: f.mimeType.includes('spreadsheet') ? 'sheet' : f.mimeType.includes('document') ? 'doc' : 'file',
          updatedAt: new Date(f.modifiedTime).toLocaleDateString(),
          link: f.webViewLink
        })));
      }

      // Fetch Calendar Events
      const calRes = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events?maxResults=5&orderBy=startTime&singleEvents=true&timeMin=' + new Date().toISOString(), {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      const calData = await calRes.json();
      if (calData.items) {
        setCalendarEvents(calData.items.map((e: any) => ({
          id: e.id,
          name: e.summary,
          type: 'event',
          updatedAt: new Date(e.start.dateTime || e.start.date).toLocaleDateString(),
          link: e.htmlLink
        })));
      }

      // Fetch Tasks
      const tasksRes = await fetch('https://www.googleapis.com/tasks/v1/lists/@default/tasks?maxResults=5', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      const tasksData = await tasksRes.json();
      if (tasksData.items) {
        setTasks(tasksData.items.map((t: any) => ({
          id: t.id,
          name: t.title,
          type: 'task',
          updatedAt: t.updated ? new Date(t.updated).toLocaleDateString() : 'No date',
        })));
      }
    } catch (err) {
      console.error('Error fetching workspace data:', err);
    }
  };

  const handleSignIn = async () => {
    setIsLoggingIn(true);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        fetchData(res.accessToken);
      }
    } catch (err) {
      console.error('Sign in failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Syncing Workspace...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl text-center">
        <div className="max-w-md mx-auto space-y-8">
          <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-indigo-900/40">
            <Shield className="text-white w-10 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none mb-4">Workspace Authorization</h3>
            <p className="text-white/40 text-sm leading-relaxed font-bold">
              Rainbow Rays requires permission to access your Google Drive, Calendar, and Tasks to centralize your Twin Cities operations.
            </p>
          </div>
          <button 
            onClick={handleSignIn}
            disabled={isLoggingIn}
            className="w-full flex items-center justify-center gap-4 bg-white text-black py-5 rounded-[1.5rem] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl disabled:opacity-50"
          >
            {isLoggingIn ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign in with Google
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-1">
            <Sparkles size={12} />
            Unified Workspace
          </div>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none">Global Connectivity</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
            <img src={user.photoURL || ''} alt="" className="w-6 h-6 rounded-full border border-white/20" />
            <span className="text-[10px] font-black uppercase tracking-widest">{user.displayName}</span>
          </div>
          <button 
            onClick={() => logout()}
            className="p-2 bg-white/5 hover:bg-red-500/10 text-white/40 hover:text-red-400 rounded-xl border border-white/10 transition-all"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Drive & Docs */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <HardDrive className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase leading-none">Google Drive</h3>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Managed Asset Cloud</p>
                </div>
              </div>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all">
                <Plus size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {driveFiles.map(file => (
                <a 
                  key={file.id} 
                  href={file.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-[1.5rem] border border-white/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${file.type === 'sheet' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                      {file.type === 'sheet' ? <Table size={20} /> : <FileText size={20} />}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight leading-none mb-1 group-hover:text-white transition-colors">{file.name}</h4>
                      <p className="text-[9px] font-bold text-white/20 uppercase">Modified {file.updatedAt}</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-white/10 group-hover:text-white/40 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                  <CalendarIcon className="text-purple-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase leading-none">Google Calendar</h3>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">HQ Scheduling Node</p>
                </div>
              </div>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all">
                <Plus size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {calendarEvents.map(event => (
                <a 
                  key={event.id}
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 bg-white/5 hover:bg-white/10 rounded-[1.5rem] border border-white/5 transition-all group"
                >
                  <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-3">{event.updatedAt}</div>
                  <h4 className="text-sm font-black uppercase tracking-tight leading-tight group-hover:text-white transition-colors">{event.name}</h4>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tasks & Intelligence */}
        <div className="space-y-8">
          <div className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/10 backdrop-blur-xl h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                  <CheckSquare className="text-yellow-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase leading-none">Google Tasks</h3>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Staff Directives</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {tasks.map(task => (
                <div 
                  key={task.id}
                  className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-4"
                >
                  <div className="w-5 h-5 rounded border-2 border-white/10 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold leading-relaxed">{task.name}</h4>
                    <p className="text-[8px] font-black text-white/20 uppercase mt-2 tracking-widest">Added {task.updatedAt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="p-6 bg-indigo-600/10 rounded-[2rem] border border-indigo-500/20">
                <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Sparkles size={12} />
                  Rae's Automation
                </div>
                <p className="text-xs font-bold leading-relaxed text-white/60 italic mb-4">
                  "I've synchronized your Google Calendar with the Twin Cities dispatch thread. 3 overlaps detected in tomorrow's schedule."
                </p>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 mb-4">
                  <p className="text-[9px] font-bold text-white/40 uppercase">Local Alert</p>
                  <p className="text-[10px] font-black text-indigo-400">"Moving Company #4 in Edina requires a parking permit doc from Drive. Auto-drafting now."</p>
                </div>
                <button className="w-full py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                  Resolve All Nodes
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
