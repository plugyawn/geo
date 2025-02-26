
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '2024-01', ndvi: 0.65 },
  { date: '2024-02', ndvi: 0.72 },
  { date: '2024-03', ndvi: 0.78 },
  { date: '2024-04', ndvi: 0.82 },
];

const Analysis = () => {
  return (
    <div className="container py-6">
      <h1 className="text-4xl font-semibold mb-8 animate-fade-in">Crop Analysis</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">NDVI Time Series</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ndvi" stroke="#4A5D4F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analysis;
