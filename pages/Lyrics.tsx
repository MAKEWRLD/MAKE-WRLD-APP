import React, { useState } from 'react';
import { LYRICS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Lyrics: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(LYRICS[0]?.id || null);

  const toggleLyric = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-3xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight text-white">LYRICS</h2>
        
        <div className="space-y-4">
            {LYRICS.map((lyric) => (
                <div key={lyric.id} className="border border-white/10 bg-zinc-900/30 rounded-sm overflow-hidden">
                    <button 
                        onClick={() => toggleLyric(lyric.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800 transition-colors"
                    >
                        <span className="text-xl font-bold uppercase tracking-wider text-white">{lyric.title}</span>
                        {openId === lyric.id ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
                    </button>
                    
                    {openId === lyric.id && (
                        <div className="px-6 py-8 bg-black/20 animate-fade-in">
                            <pre className="whitespace-pre-wrap font-sans text-gray-300 leading-8 text-lg text-center font-light">
                                {lyric.content}
                            </pre>
                        </div>
                    )}
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center p-8 border border-dashed border-white/10 rounded-lg">
            <p className="text-gray-500 italic">More lyrics coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;