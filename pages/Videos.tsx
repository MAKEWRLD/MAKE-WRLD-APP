import React from 'react';
import { VIDEOS } from '../constants';
import { Play } from 'lucide-react';

const Videos: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <div className="animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4">VIDEOGRAPHY</h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Official Music Videos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {VIDEOS.map((video) => (
            <div key={video.id} className="group flex flex-col gap-4">
              <div className="w-full aspect-video bg-zinc-900 rounded-sm overflow-hidden border border-white/5 shadow-2xl relative">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                 ></iframe>
              </div>
              <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-gray-300 transition-colors">{video.title}</h3>
                    <p className="text-red-600 text-xs font-bold uppercase tracking-widest mt-1">Official Video</p>
                  </div>
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                  >
                    Watch on YouTube <Play size={12} />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;