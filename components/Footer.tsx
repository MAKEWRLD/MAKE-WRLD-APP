import React from 'react';
import { Instagram, Youtube, Music, Facebook, CloudLightning, Disc } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white hover:text-gray-300 transition-colors block mb-2">
              MAKE WRLD
            </Link>
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              Viseu, Portugal
            </p>
        </div>

        {/* Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors p-2 hover:bg-white/5 rounded-full" title="Instagram">
            <Instagram size={20} />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors p-2 hover:bg-white/5 rounded-full" title="Facebook">
            <Facebook size={20} />
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors p-2 hover:bg-white/5 rounded-full" title="YouTube">
            <Youtube size={20} />
          </a>
          <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors p-2 hover:bg-white/5 rounded-full" title="Spotify">
            <Disc size={20} />
          </a>
          <a href={SOCIAL_LINKS.apple} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FA243C] transition-colors p-2 hover:bg-white/5 rounded-full" title="Apple Music">
            <Music size={20} />
          </a>
          <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF5500] transition-colors p-2 hover:bg-white/5 rounded-full" title="SoundCloud">
            <CloudLightning size={20} />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-xs text-gray-700 font-mono">
          © {new Date().getFullYear()} MAKE WRLD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;