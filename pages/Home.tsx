import React from 'react';
import { ArrowRight, Music, Disc, CloudLightning, Youtube, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Home: React.FC = () => {
  // Enhanced floating background elements
  const floatingTexts = [
    { text: "MAKE WRLD", top: "10%", left: "5%", font: "font-mono", size: "text-lg", delay: "0s", opacity: "0.1" },
    { text: "MAKE WRLD", top: "25%", left: "85%", font: "font-serif", size: "text-sm", delay: "1s", opacity: "0.05" },
    { text: "MAKE WRLD", top: "70%", left: "15%", font: "font-sans", size: "text-2xl", delay: "2s", opacity: "0.08" },
    { text: "MAKE WRLD", top: "85%", left: "75%", font: "font-black", size: "text-base", delay: "3s", opacity: "0.1" },
    { text: "MAKE WRLD", top: "50%", left: "90%", font: "font-mono", size: "text-xs", delay: "4s", opacity: "0.05" },
    { text: "MAKE WRLD", top: "15%", left: "45%", font: "font-serif", size: "text-sm", delay: "1.5s", opacity: "0.06" },
    { text: "MAKE WRLD", top: "60%", left: "5%", font: "font-sans", size: "text-lg", delay: "2.5s", opacity: "0.09" },
    { text: "MAKE WRLD", top: "40%", left: "20%", font: "font-bold", size: "text-xs", delay: "0.5s", opacity: "0.05" },
    // Denser population
    { text: "MAKE WRLD", top: "5%", left: "60%", font: "font-light", size: "text-xs", delay: "3.5s", opacity: "0.04" },
    { text: "MAKE WRLD", top: "35%", left: "40%", font: "font-mono", size: "text-sm", delay: "2.2s", opacity: "0.07" },
    { text: "MAKE WRLD", top: "80%", left: "35%", font: "font-serif", size: "text-base", delay: "1.8s", opacity: "0.06" },
    { text: "MAKE WRLD", top: "95%", left: "10%", font: "font-black", size: "text-lg", delay: "4.5s", opacity: "0.1" },
    { text: "MAKE WRLD", top: "20%", left: "10%", font: "font-sans", size: "text-xs", delay: "0.8s", opacity: "0.04" },
    { text: "MAKE WRLD", top: "55%", left: "70%", font: "font-mono", size: "text-xl", delay: "3.2s", opacity: "0.08" },
    { text: "MAKE WRLD", top: "90%", left: "50%", font: "font-bold", size: "text-sm", delay: "1.2s", opacity: "0.05" },
    { text: "MAKE WRLD", top: "12%", left: "95%", font: "font-serif", size: "text-xs", delay: "2.8s", opacity: "0.06" },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      
      {/* FLOATING TEXT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {floatingTexts.map((item, index) => (
          <span
            key={index}
            className={`absolute text-white whitespace-nowrap animate-float ${item.font} ${item.size}`}
            style={{
              top: item.top,
              left: item.left,
              opacity: item.opacity,
              animationDelay: item.delay,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 z-10">
        
        <div className="max-w-5xl mx-auto px-4 w-full flex flex-col items-center text-center gap-8">
          
          {/* Centralized Artist Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4 animate-fade-in">
             <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
             <img 
               src="/assets/img/artist_bio.jpg" 
               onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1517500588498-c641cc99933e?q=80&w=1000&auto=format&fit=crop"; 
               }}
               alt="MAKE WRLD" 
               className="w-full h-full object-cover rounded-full border-2 border-white/20 relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-slide-up max-w-4xl">
            <h1 className="text-6xl sm:text-7xl md:text-[8rem] font-black tracking-tighter text-white leading-none">
              MAKE WRLD
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 font-light italic tracking-wide font-serif">
              "No caos do mundo, encontramos o nosso próprio significado."
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/discography" 
                className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
              >
                Ouvir Agora
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/videos" 
                className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors min-w-[200px]"
              >
                Ver Vídeos
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* FOLLOW & LISTEN SECTION */}
      <div className="bg-black border-t border-white/10 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-12 uppercase">Seguir & Ouvir</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                 <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900/50 border border-white/5 hover:border-[#1DB954] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Disc size={32} className="text-gray-400 group-hover:text-[#1DB954]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">Spotify</span>
                 </a>
                 
                 <a href={SOCIAL_LINKS.apple} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900/50 border border-white/5 hover:border-[#FA243C] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Music size={32} className="text-gray-400 group-hover:text-[#FA243C]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">Apple Music</span>
                 </a>

                 <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900/50 border border-white/5 hover:border-[#FF0000] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Youtube size={32} className="text-gray-400 group-hover:text-[#FF0000]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">YouTube</span>
                 </a>

                 <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900/50 border border-white/5 hover:border-[#E1306C] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <Instagram size={32} className="text-gray-400 group-hover:text-[#E1306C]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">Instagram</span>
                 </a>

                 <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900/50 border border-white/5 hover:border-[#FF5500] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
                    <CloudLightning size={32} className="text-gray-400 group-hover:text-[#FF5500]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-white">SoundCloud</span>
                 </a>

                 <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="group p-6 bg-zinc-900/50 border border-white/5 hover:border-[#1877F2] transition-all flex flex-col items-center gap-3 rounded-sm hover:-translate-y-1">
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