import React from 'react';
import { BIOGRAPHY_SECTIONS } from '../constants';

const Biography: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-5xl mx-auto">
      <div className="animate-fade-in flex flex-col md:flex-row gap-16 items-start">
        
        {/* Bio Image */}
        <div className="w-full md:w-1/3 aspect-[3/4] relative group">
            <div className="absolute inset-0 border-2 border-white/10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img 
              src="https://picsum.photos/seed/bioimage/600/800" 
              alt="MAKE WRLD Portrait" 
              className="w-full h-full object-cover grayscale relative z-10"
            />
        </div>
        
        {/* Bio Content */}
        <div className="w-full md:w-2/3 space-y-10">
           <div>
               <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">ABOUT <br/> MAKE WRLD</h2>
               <div className="h-1 w-20 bg-white/20 mb-8"></div>
           </div>

           <div className="text-gray-300 leading-relaxed text-lg font-light space-y-6">
              {BIOGRAPHY_SECTIONS.map((section, idx) => (
                <div key={idx} className="space-y-4 whitespace-pre-line">
                  <p>{section.content}</p>
                </div>
              ))}
           </div>
           
           <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Origin</h3>
                  <p className="text-white font-medium">Viseu, Portugal</p>
              </div>
              <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Genre</h3>
                  <p className="text-white font-medium">Trap / Afro / Experimental</p>
              </div>
              <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Active Since</h3>
                  <p className="text-white font-medium">2016 (Reboot 2022)</p>
              </div>
              <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Labels</h3>
                  <p className="text-white font-medium">Independent</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Biography;