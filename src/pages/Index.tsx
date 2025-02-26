
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart2 } from 'lucide-react';
import Map from '@/components/Map';
import Analytics from '@/components/Analytics';
import SpectralControls from '@/components/SpectralControls';
import SearchBar from '@/components/SearchBar';

const Index = () => {
  const handleNewCrop = () => {
    // Placeholder for new crop functionality
    console.log('New crop clicked');
  };

  return (
    <div className="min-h-screen bg-muted">
      <div className="container py-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-semibold animate-fade-in">Crop Boundary Analytics</h1>
          <Button variant="outline" asChild>
            <Link to="/analysis" className="gap-2">
              <BarChart2 className="h-4 w-4" />
              Analysis
            </Link>
          </Button>
        </div>

        <SearchBar onNewCrop={handleNewCrop} />
        
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
