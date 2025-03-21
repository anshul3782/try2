
import React from 'react';
import { cn } from '@/lib/utils';

interface MapLocation {
  id: string;
  lat: number;
  lng: number;
  title: string;
  description?: string;
  color?: string;
  size?: number;
}

interface MapProps {
  locations?: MapLocation[];
  className?: string;
  height?: number | string;
  isLoading?: boolean;
}

const Map = ({
  locations = [],
  className,
  height = 300,
  isLoading = false
}: MapProps) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  
  // Mock map placeholder - would use a real map library in production
  return (
    <div 
      ref={mapRef}
      className={cn(
        "relative rounded-md overflow-hidden border border-border bg-secondary/50", 
        isLoading ? "animate-pulse" : "",
        className
      )}
      style={{ height }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/5 backdrop-blur-xs"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          {isLoading 
            ? "Loading map data..." 
            : locations.length 
              ? `Map with ${locations.length} locations` 
              : "Map view (connect location data to display)"}
        </p>
      </div>
      
      {/* Location markers would be rendered here with a real map implementation */}
      {locations.map(location => (
        <div 
          key={location.id}
          className="absolute w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${30 + (location.lng + 180) / 360 * 40}%`,
            top: `${20 + (location.lat + 90) / 180 * 60}%`,
            backgroundColor: location.color || 'hsl(var(--primary))',
            width: location.size ? `${location.size}px` : undefined,
            height: location.size ? `${location.size}px` : undefined,
          }}
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-current opacity-75" 
               style={{ backgroundColor: location.color || 'hsl(var(--primary))' }}></div>
        </div>
      ))}
      
      {/* Map grid lines for visual effect */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className="border border-white/5"></div>
        ))}
      </div>
    </div>
  );
};

export default Map;
