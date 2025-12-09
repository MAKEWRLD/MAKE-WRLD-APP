import React from 'react';
import { VIDEOS } from '../constants';

const Videos: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white">OFFICIAL VIDEOS</h2>
        
        <div className="grid grid-cols-1 gap-16">
          {VIDEOS.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              <div className="w-full aspect-video bg-zinc-900 rounded-sm overflow-hidden border border-white/5 shadow-2xl relative group">
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
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold text-white tracking-wide">{video.title}</h3>
                  <span className="text-red-500 text-sm font-mono uppercase">Official Video</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;