
import React from 'react';
import DataCard from '@/components/UI/DataCard';
import Map from '@/components/UI/Map';
import Timeline, { TimelineItem } from '@/components/UI/Timeline';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Home, ShoppingBag, Coffee, Car, Calendar } from "lucide-react";
import { cn } from '@/lib/utils';

export interface LocationData {
  id: string;
  name: string;
  type: 'home' | 'work' | 'shopping' | 'food' | 'transit' | 'other';
  address?: string;
  time: string;
  duration?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  sentimentScore?: number;
}

interface LocationTimelineProps {
  locations: LocationData[];
  isLoading?: boolean;
  className?: string;
}

const LocationTimeline = ({ locations = [], isLoading = false, className }: LocationTimelineProps) => {
  // Convert locations to map format
  const mapLocations = locations.map(location => ({
    id: location.id,
    lat: location.coordinates.lat,
    lng: location.coordinates.lng,
    title: location.name,
    description: location.address,
    color: getLocationTypeColor(location.type),
    size: 12
  }));
  
  // Convert locations to timeline format
  const timelineItems: TimelineItem[] = locations.map(location => ({
    id: location.id,
    time: location.time,
    title: location.name,
    description: location.address ? `${location.address}${location.duration ? ` · ${location.duration}` : ''}` : location.duration,
    icon: getLocationTypeIcon(location.type),
    color: getLocationTypeColor(location.type)
  }));
  
  function getLocationTypeIcon(type: LocationData['type']) {
    switch (type) {
      case 'home': return <Home className="h-3.5 w-3.5" />;
      case 'work': return <Building className="h-3.5 w-3.5" />;
      case 'shopping': return <ShoppingBag className="h-3.5 w-3.5" />;
      case 'food': return <Coffee className="h-3.5 w-3.5" />;
      case 'transit': return <Car className="h-3.5 w-3.5" />;
      default: return <MapPin className="h-3.5 w-3.5" />;
    }
  }
  
  function getLocationTypeColor(type: LocationData['type']) {
    switch (type) {
      case 'home': return 'hsl(var(--sentiment-positive))';
      case 'work': return 'hsl(var(--primary))';
      case 'shopping': return 'hsl(var(--sentiment-neutral))';
      case 'food': return 'hsl(330, 80%, 60%)';
      case 'transit': return 'hsl(210, 70%, 60%)';
      default: return 'hsl(var(--muted-foreground))';
    }
  }
  
  return (
    <DataCard 
      title="Location Timeline" 
      description="Where you've been today"
      className={cn("", className)}
      isLoading={isLoading}
      animation="fade"
      delay={200}
    >
      <Tabs defaultValue="map">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="map" className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>Map</span>
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>Timeline</span>
            </TabsTrigger>
          </TabsList>
          
          <Button variant="outline" size="sm">View all locations</Button>
        </div>
        
        <TabsContent value="map" className="mt-0">
          <div className="space-y-4">
            <Map 
              locations={mapLocations}
              height={300}
              isLoading={isLoading}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="timeline" className="mt-0">
          <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            <Timeline items={timelineItems} />
          </div>
        </TabsContent>
      </Tabs>
    </DataCard>
  );
};

export default LocationTimeline;
