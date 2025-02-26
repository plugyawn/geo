
import React from 'react';
import { Card } from '@/components/ui/card';
import { Layers, Crop, BarChart2 } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Crop className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Area</p>
              <h3 className="text-2xl font-semibold">2,450 ha</h3>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-secondary/20 rounded-full">
              <Layers className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Field Count</p>
              <h3 className="text-2xl font-semibold">24</h3>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-accent/10 rounded-full">
              <BarChart2 className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. NDVI</p>
              <h3 className="text-2xl font-semibold">0.76</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
