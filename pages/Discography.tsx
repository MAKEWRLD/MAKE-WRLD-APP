import React from 'react';
import { RELEASES } from '../constants';
import { ReleaseType } from '../types';
import ReleaseCard from '../components/ReleaseCard';

const Discography: React.FC = () => {
  const eps = RELEASES.filter(r => r.type === ReleaseType.EP);
  const singles = RELEASES.filter(r => r.type === ReleaseType.SINGLE);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="animate-fade-in space-y-20">
        <div className="text-center mb-16">
             <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">DISCOGRAFIA</h2>
             <p className="text-gray-400 uppercase tracking-widest text-sm">Catálogo Oficial</p>
        </div>
        
        {/* EPs Section */}
        {eps.length > 0 && (
          <div className="space-y-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-l-4 border-white pl-4">EPs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eps.map((release) => (
                <ReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </div>
        )}

        {/* Singles Section */}
        {singles.length > 0 && (
          <div className="space-y-8 max-w-5xl mx-auto">
             <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-l-4 border-white pl-4">Singles</h3>
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
