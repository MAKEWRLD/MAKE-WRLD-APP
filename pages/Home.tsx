import React from 'react';
import { ArrowRight, Music, Disc, CloudLightning, Youtube, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      
      {/* HERO SECTION */}
      <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-16">
         {/* Background Effect */}
        <div className="absolute inset-0 bg-brand-dark z-0">
           <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 w-full relative z-10 flex flex-col items-center text-center gap-12">
          
          {/* Artist Image - Centered */}
          <div className="animate-fade-in relative group">
             <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors duration-700"></div>
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl border border-white/10 mx-auto">
               <img 
                src="https://picsum.photos/seed/makewrldportrait/800/800" 
                alt="MAKE WRLD - Milton Gomes Lemba" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-slide-up max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              MAKE WRLD
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 font-light italic tracking-wide">
              "In the chaos of the world, we find our own meaning."
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/discography" 
                className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
              >
                Latest Music
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/videos" 
                className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors min-w-[200px]"
              >
                Watch Videos
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* FOLLOW & LISTEN SECTION */}
      <div className="bg-zinc-900/30 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-12 uppercase">Follow & Listen</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                 <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900 border border-white/5 hover:border-[#1DB954] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Disc size={32} className="text-gray-400 group-hover:text-[#1DB954]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">Spotify</span>
                 </a>
                 
                 <a href={SOCIAL_LINKS.apple} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900 border border-white/5 hover:border-[#FA243C] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Music size={32} className="text-gray-400 group-hover:text-[#FA243C]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">Apple Music</span>
                 </a>

                 <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900 border border-white/5 hover:border-[#FF0000] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Youtube size={32} className="text-gray-400 group-hover:text-[#FF0000]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">YouTube</span>
                 </a>

                 <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900 border border-white/5 hover:border-[#E1306C] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Instagram size={32} className="text-gray-400 group-hover:text-[#E1306C]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">Instagram</span>
                 </a>

                 <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900 border border-white/5 hover:border-[#FF5500] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <CloudLightning size={32} className="text-gray-400 group-hover:text-[#FF5500]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">SoundCloud</span>
                 </a>

                 <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900 border border-white/5 hover:border-[#1877F2] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Facebook size={32} className="text-gray-400 group-hover:text-[#1877F2]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">Facebook</span>
                 </a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;