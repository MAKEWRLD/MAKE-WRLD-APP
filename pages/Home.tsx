import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/discography" 
            className="group px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Listen Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/fds" 
            className="px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Latest Album
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;