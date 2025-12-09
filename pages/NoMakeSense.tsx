import React from 'react';
import { RELEASES } from '../constants';
import { Play, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoMakeSense: React.FC = () => {
  const ep = RELEASES.find(r => r.id === 'no-make-sense-ep');

  if (!ep) return <div>EP not found</div>;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden">
        {/* Abstract Background Element for this specific EP style */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto animate-fade-in relative z-10">
        <Link to="/discography" className="text-gray-500 hover:text-white text-sm uppercase tracking-widest mb-8 block">← Back to Discography</Link>
        
        <div className="flex flex-col md:flex-row-reverse gap-12">
          {/* Cover Art Section */}
          <div className="w-full md:w-1/3">
             <div className="aspect-square overflow-hidden shadow-2xl relative border border-white/10">
                <img 
                  src={ep.coverUrl} 
                  alt={ep.title} 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
             </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase glitch-effect" style={{ textShadow: '2px 2px 0px rgba(255,0,0,0.5)' }}>
              {ep.title}
            </h1>
            <p className="text-xl text-red-500 mb-12 font-bold tracking-widest">{ep.year} // {ep.type}</p>

            <div className="space-y-2">
              {ep.tracks?.map((track, index) => (
                <div key={index} className="flex items-center justify-between py-3 px-4 bg-zinc-900 hover:bg-zinc-800 border-l-2 border-transparent hover:border-red-600 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-red-900 font-bold font-mono">0{index + 1}</span>
                    <span className="text-gray-200 font-bold uppercase tracking-wide">{track.title}</span>
                  </div>
                  <span className="text-gray-600 text-sm font-mono">{track.duration}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-colors uppercase font-bold tracking-wider text-sm">
                    Stream EP
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMakeSense;