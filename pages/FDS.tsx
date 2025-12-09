import React from 'react';
import { RELEASES } from '../constants';
import { Play, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FDS: React.FC = () => {
  const album = RELEASES.find(r => r.id === 'fds-album');

  if (!album) return <div>Album not found</div>;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <Link to="/discography" className="text-gray-500 hover:text-white text-sm uppercase tracking-widest mb-8 block">← Back to Discography</Link>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Cover Art Section */}
          <div className="w-full md:w-1/3">
             <div className="aspect-square overflow-hidden shadow-2xl relative group">
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="mt-8 flex flex-col gap-3">
               <button className="w-full bg-white text-black py-3 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                 <Play size={18} fill="currentColor" /> Play on Spotify
               </button>
               <div className="flex gap-2">
                 <button className="flex-1 border border-white/20 py-2 text-sm uppercase tracking-wider hover:bg-white/5 transition-colors">Apple Music</button>
                 <button className="flex-1 border border-white/20 py-2 text-sm uppercase tracking-wider hover:bg-white/5 transition-colors">YouTube</button>
               </div>
             </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3">
            <h1 className="text-6xl font-black text-white mb-2 tracking-tighter">{album.title}</h1>
            <p className="text-xl text-gray-400 mb-8 font-light">{album.year} • {album.type}</p>

            <div className="border-t border-white/10">
              {album.tracks?.map((track, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-white/10 group hover:bg-white/5 px-2 transition-colors cursor-default">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 w-6 font-mono text-sm">{index + 1}</span>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{track.title}</span>
                  </div>
                  <div className="flex items-center gap-6">
                     <span className="text-gray-600 text-sm font-mono flex items-center gap-1">
                        <Clock size={12} /> {track.duration}
                     </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-zinc-900/50 rounded-sm">
              <h3 className="text-white font-bold uppercase tracking-widest mb-2">Editor's Note</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                "FDS" represents the culmination of a journey through urban isolation. The tracks navigate through aggressive synth textures and melancholic piano riffs, embodying the artist's struggle with finding meaning in a saturated world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDS;