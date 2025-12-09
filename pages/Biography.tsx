import React from 'react';
import { BIOGRAPHY_TEXT } from '../constants';

const Biography: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">BIOGRAPHY</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-sm relative group">
            <img 
              src="https://picsum.photos/seed/bioimage/600/800" 
              alt="MAKE WRLD Portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="w-full md:w-2/3 space-y-6 text-gray-300 leading-relaxed text-lg font-light text-justify">
            {BIOGRAPHY_TEXT.split('\n').map((paragraph, idx) => (
              paragraph.trim() && <p key={idx}>{paragraph.trim()}</p>
            ))}
            
            <div className="pt-8 border-t border-white/10 mt-8">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Origins</h3>
              <p className="text-sm text-gray-400">
                Established: 2020<br/>
                Genre: Alternative / Dark Wave<br/>
                Location: Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;