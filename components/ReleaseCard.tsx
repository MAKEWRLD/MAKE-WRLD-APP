import React from 'react';
import { Release } from '../types';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ReleaseCardProps {
  release: Release;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ release }) => {
  // Determine internal link based on release ID for the specific pages requested
  let internalLink = '';
  if (release.id === 'fds-album') internalLink = '/fds';
  if (release.id === 'no-make-sense-ep') internalLink = '/no-make-sense';

  return (
    <div className="group relative bg-zinc-900/30 border border-white/5 p-4 rounded-sm hover:border-white/20 transition-all duration-300">
      <div className="aspect-square overflow-hidden mb-4 relative">
        <img 
          src={release.coverUrl} 
          alt={release.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {internalLink && (
           <Link to={internalLink} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
             <span className="border border-white text-white px-4 py-2 uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-black transition-colors">
               View Tracks
             </span>
           </Link>
        )}
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{release.title}</h3>
          <p className="text-xs text-gray-500 uppercase tracking-wider">{release.year} • {release.type}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
        {release.spotifyUrl && (
          <a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors">
             Spotify
          </a>
        )}
        {release.appleMusicUrl && (
          <a href={release.appleMusicUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FA243C] transition-colors">
             Apple
          </a>
        )}
         {release.youtubeUrl && (
          <a href={release.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors">
             YouTube
          </a>
        )}
      </div>
    </div>
  );
};

export default ReleaseCard;