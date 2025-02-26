
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Plus } from 'lucide-react';

interface SearchBarProps {
  onNewCrop: () => void;
}

const SearchBar = ({ onNewCrop }: SearchBarProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search crops by name or location..."
          className="pl-10"
        />
      </div>
      <Button onClick={onNewCrop} className="gap-2">
        <Plus className="h-4 w-4" />
        New Crop
      </Button>
    </div>
  );
};

export default SearchBar;
