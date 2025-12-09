import React from 'react';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-6">
        <div className="flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Music size={24} />
          </a>
        </div>
        <p className="text-xs text-gray-600 tracking-widest uppercase">
          © {new Date().getFullYear()} MAKE WRLD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;