
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SpectralOption = ({ name, active, onClick }: { name: string; active: boolean; onClick: () => void }) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start",
      active && "bg-primary/10 text-primary"
    )}
    onClick={onClick}
  >
    {name}
  </Button>
);

const SpectralControls = () => {
  const [activeOption, setActiveOption] = React.useState('Natural Color');

  const options = [
    'Natural Color',
    'False Color',
    'NDVI',
    'NDRE',
    'Moisture Index'
  ];

  return (
    <Card className="p-4 bg-white/80 backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-4">Spectral Bands</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <SpectralOption
            key={option}
            name={option}
            active={activeOption === option}
            onClick={() => setActiveOption(option)}
          />
        ))}
      </div>
    </Card>
  );
};

export default SpectralControls;
