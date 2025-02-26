
import React from 'react';
import Map from '@/components/Map';
import Analytics from '@/components/Analytics';
import SpectralControls from '@/components/SpectralControls';

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      <div className="container py-6">
        <h1 className="text-4xl font-semibold mb-8 animate-fade-in">Crop Boundary Analytics</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <Map className="animate-scale-in" />
              <Analytics />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <SpectralControls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
