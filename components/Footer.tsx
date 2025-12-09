import React from 'react';
import { Instagram, Youtube, Music, Facebook, CloudLightning, Disc } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-wrap justify-center gap-8">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors transform hover:scale-110" title="Instagram">
            <Instagram size={24} />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors transform hover:scale-110" title="Facebook">
            <Facebook size={24} />
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors transform hover:scale-110" title="YouTube">
            <Youtube size={24} />
          </a>
          <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors transform hover:scale-110" title="Spotify">
            <Disc size={24} />
          </a>
          <a href={SOCIAL_LINKS.apple} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FA243C] transition-colors transform hover:scale-110" title="Apple Music">
            <Music size={24} />
          </a>
          <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF5500] transition-colors transform hover:scale-110" title="SoundCloud">
            <CloudLightning size={24} />
          </a>
        </div>
        <p className="text-xs text-gray-600 tracking-widest uppercase text-center">
          © {new Date().getFullYear()} MAKE WRLD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;