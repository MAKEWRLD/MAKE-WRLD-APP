import React from 'react';
import { RELEASES } from '../constants';
import ReleaseCard from '../components/ReleaseCard';

const Discography: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white">DISCOGRAPHY</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RELEASES.map((release) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discography;