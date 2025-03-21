
import React from 'react';
import DataCard from '@/components/UI/DataCard';
import Map from '@/components/UI/Map';
import Timeline, { TimelineItem } from '@/components/UI/Timeline';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Home, ShoppingBag, Coffee, Car, Calendar, Smile, Frown, Meh, Heart, Activity } from "lucide-react";
import { cn } from '@/lib/utils';
import { toast } from "sonner";

export interface LocationData {
  id: string;
  name: string;
  type: 'home' | 'work' | 'shopping' | 'food' | 'transit' | 'park' | 'other';
  address?: string;
  time: string;
  duration?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  sentimentScore?: number;
  emotion?: {
    primary: 'joy' | 'sadness' | 'anger' | 'surprise' | 'fear' | 'neutral';
    intensity: number; // 0-1
    note?: string;
  };
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
    color: getLocationColor(location),
    size: getLocationSize(location)
  }));
  
  // Convert locations to timeline format
  const timelineItems: TimelineItem[] = locations.map(location => ({
    id: location.id,
    time: location.time,
    title: location.name,
    description: getLocationDescription(location),
    icon: getLocationIcon(location),
    color: getLocationColor(location)
  }));
  
  function getLocationIcon(location: LocationData) {
    // First prioritize emotion if available
    if (location.emotion) {
      switch (location.emotion.primary) {
        case 'joy': return <Smile className="h-3.5 w-3.5" />;
        case 'sadness': return <Frown className="h-3.5 w-3.5" />;
        case 'anger': return <Frown className="h-3.5 w-3.5" />;
        case 'surprise': return <Meh className="h-3.5 w-3.5" />;
        case 'fear': return <Meh className="h-3.5 w-3.5" />;
        case 'neutral': return <Meh className="h-3.5 w-3.5" />;
      }
    }
    
    // Fallback to location type
    return getLocationTypeIcon(location.type);
  }
  
  function getLocationTypeIcon(type: LocationData['type']) {
    switch (type) {
      case 'home': return <Home className="h-3.5 w-3.5" />;
      case 'work': return <Building className="h-3.5 w-3.5" />;
      case 'shopping': return <ShoppingBag className="h-3.5 w-3.5" />;
      case 'food': return <Coffee className="h-3.5 w-3.5" />;
      case 'transit': return <Car className="h-3.5 w-3.5" />;
      case 'park': return <Activity className="h-3.5 w-3.5" />;
      default: return <MapPin className="h-3.5 w-3.5" />;
    }
  }
  
  function getLocationColor(location: LocationData) {
    // If the location has emotion data, use that for coloring
    if (location.emotion) {
      switch (location.emotion.primary) {
        case 'joy': return 'hsl(var(--sentiment-positive))';
        case 'sadness': return 'hsl(200, 70%, 60%)';
        case 'anger': return 'hsl(var(--sentiment-negative))';
        case 'surprise': return 'hsl(275, 80%, 60%)';
        case 'fear': return 'hsl(310, 70%, 50%)';
        case 'neutral': return 'hsl(var(--sentiment-neutral))';
      }
    }
    
    // Fallback to location type coloring
    switch (location.type) {
      case 'home': return 'hsl(120, 60%, 50%)';
      case 'work': return 'hsl(var(--primary))';
      case 'shopping': return 'hsl(var(--sentiment-neutral))';
      case 'food': return 'hsl(330, 80%, 60%)';
      case 'park': return 'hsl(145, 80%, 50%)';
      case 'transit': return 'hsl(210, 70%, 60%)';
      default: return 'hsl(var(--muted-foreground))';
    }
  }
  
  function getLocationSize(location: LocationData) {
    // Make locations with stronger emotions larger
    if (location.emotion) {
      return 12 + (location.emotion.intensity * 8);
    }
    return 12;
  }
  
  function getLocationDescription(location: LocationData) {
    let description = '';
    
    if (location.address) {
      description += location.address;
    }
    
    if (location.duration) {
      description += description ? ` · ${location.duration}` : location.duration;
    }
    
    if (location.emotion) {
      const emotions = {
        joy: 'Happy 😊',
        sadness: 'Sad 😢',
        anger: 'Angry 😠',
        surprise: 'Surprised 😮',
        fear: 'Anxious 😨',
        neutral: 'Neutral 😐'
      };
      
      const emotionText = emotions[location.emotion.primary];
      const intensity = location.emotion.intensity >= 0.7 ? 'Very ' : 
                        location.emotion.intensity >= 0.4 ? 'Moderately ' : 'Slightly ';
      
      description += description ? ` · ${intensity}${emotionText}` : `${intensity}${emotionText}`;
      
      if (location.emotion.note) {
        description += ` - "${location.emotion.note}"`;
      }
    }
    
    return description;
  }
  
  const handleRecordEmotion = () => {
    toast.success("Emotion recorded for your current location", {
      description: "Your emotional state has been saved."
    });
  };
  
  return (
    <DataCard 
      title="Location & Emotion Timeline" 
      description="Places you've been and how you felt"
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
              <span>Emotional Map</span>
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>Timeline</span>
            </TabsTrigger>
          </TabsList>
          
          <Button variant="outline" size="sm" onClick={handleRecordEmotion}>Record emotion</Button>
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
