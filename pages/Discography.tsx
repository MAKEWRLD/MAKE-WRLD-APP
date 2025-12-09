import React from 'react';
import { RELEASES } from '../constants';
import { ReleaseType } from '../types';
import ReleaseCard from '../components/ReleaseCard';

const Discography: React.FC = () => {
  const albums = RELEASES.filter(r => r.type === ReleaseType.ALBUM);
  const eps = RELEASES.filter(r => r.type === ReleaseType.EP);
  const singles = RELEASES.filter(r => r.type === ReleaseType.SINGLE);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="animate-fade-in space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight text-white mb-8">DISCOGRAPHY</h2>
        
        {/* Albums Section */}
        {albums.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">Albums</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((release) => (
                <ReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </div>
        )}

        {/* EPs Section */}
        {eps.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">EPs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eps.map((release) => (
                <ReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </div>
        )}

        {/* Singles Section */}
        {singles.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">Singles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {singles.map((release) => (
                <ReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discography;