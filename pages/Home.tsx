import React from 'react';
import { ArrowRight, Music, Disc, CloudLightning } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/makewrldhero/1920/1080" 
          alt="MAKE WRLD Background" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-slide-up">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/20 mb-8 shadow-2xl">
           <img 
            src="https://picsum.photos/seed/artistprofile/400/400" 
            alt="MAKE WRLD" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg">
          MAKE WRLD
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light italic tracking-wide leading-relaxed">
          "No caos do mundo, encontramos o nosso próprio sentido."
        </p>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/discography" 
            className="group px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
          >
            Listen Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/fds" 
            className="px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors min-w-[200px]"
          >
            Latest Album
          </Link>
        </div>

        {/* Streaming Platforms */}
        <div className="pt-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Stream on</p>
            <div className="flex gap-6 justify-center">
                 <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900/50 rounded-full text-white hover:text-[#1DB954] hover:bg-zinc-800 transition-all transform hover:scale-110 border border-white/10">
                    <Disc size={20} />
                 </a>
                 <a href={SOCIAL_LINKS.apple} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900/50 rounded-full text-white hover:text-[#FA243C] hover:bg-zinc-800 transition-all transform hover:scale-110 border border-white/10">
                    <Music size={20} />
                 </a>
                 <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900/50 rounded-full text-white hover:text-[#FF5500] hover:bg-zinc-800 transition-all transform hover:scale-110 border border-white/10">
                    <CloudLightning size={20} />
                 </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;