
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CropDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  cropData?: {
    id: string;
    name: string;
    area: number;
    ndviData: Array<{ date: string; value: number }>;
  };
}

const mockTimeData = [
  { date: '2024-01', value: 0.65 },
  { date: '2024-02', value: 0.72 },
  { date: '2024-03', value: 0.78 },
  { date: '2024-04', value: 0.82 },
];

const CropDashboard = ({ isOpen, onClose, cropData = {
  id: '1',
  name: 'Sample Crop',
  area: 245,
  ndviData: mockTimeData,
} }: CropDashboardProps) => {
  if (!isOpen) return null;

  return (
    <Sheet open={isOpen} onOpenChange={() => onClose()}>
      <SheetContent side="right" className="w-full sm:w-[540px] p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle>Crop Analysis</SheetTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>
        
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{cropData.area} ha</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Current NDVI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{cropData.ndviData[cropData.ndviData.length - 1].value}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>NDVI Time Series</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cropData.ndviData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#4A5D4F" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crop Health Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Health Index</span>
                  <span className="font-medium">Good</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Growth Stage</span>
                  <span className="font-medium">Vegetative</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium">2024-04-01</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CropDashboard;
