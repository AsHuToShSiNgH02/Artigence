import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import image from './../assets/wsi.png';

interface HubViewProps {
  hubRef: React.RefObject<HTMLDivElement>;
  pointerPosition: { x: number; y: number };
  zoomLevel: number;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function HubView({ hubRef, pointerPosition, zoomLevel, onMouseMove }: HubViewProps) {
  const previewSize = useMemo(() => 100 / zoomLevel, [zoomLevel]);

  const hubPreviewStyle: React.CSSProperties = useMemo(() => ({
    left: `${pointerPosition.x - previewSize / 2}%`,
    top: `${pointerPosition.y - previewSize / 2}%`,
    width: `${previewSize}%`,
    height: `${previewSize}%`,
    border: '2px solid white',
    pointerEvents: 'none',
  }), [pointerPosition, previewSize]);

  return (
    <Card className="w-64">
      <CardHeader className="p-2">
        <CardTitle className="text-sm">WSI Zoomed out View (Hub)</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <div 
          ref={hubRef}
          className="h-32 relative cursor-crosshair overflow-hidden" 
          onMouseMove={onMouseMove}
        >
          <img
            src={image}
            alt="Blood cells microscopic view"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div 
            className="absolute"
            style={hubPreviewStyle} // Apply styles correctly
          />
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <span>Patient ID: 12345</span>
          <span>Blood Type: A+</span>
        </div>
      </CardContent>
    </Card>
  );
}
