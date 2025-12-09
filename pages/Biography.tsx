import React from 'react';
import { BIOGRAPHY_SECTIONS } from '../constants';

const Biography: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight text-white">BIOGRAPHY</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-sm relative group">
            <img 
              src="https://picsum.photos/seed/bioimage/600/800" 
              alt="MAKE WRLD Portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="w-full md:w-2/3 space-y-8 text-gray-300 leading-relaxed text-lg font-light text-justify">
            {BIOGRAPHY_SECTIONS.map((section, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2 opacity-80">{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
            
            <div className="pt-8 border-t border-white/10 mt-8">
              <div className="flex justify-between items-center text-sm text-gray-400 font-mono">
                <span>EST. 2020</span>
                <span>VISEU, PT</span>
                <span>GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;