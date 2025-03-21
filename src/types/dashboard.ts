// Define the ActivityData interface
export interface ActivityData {
  id: string;
  type: string;
  duration: string;
  caloriesBurned: number;
  timestamp: string;
  date: string;
  steps: number;
  calories: number;
  sleep: number;
  activeMinutes: number;
}

// Define the ReportData interface
export interface ReportData {
  id?: string;
  title: string;
  period: string;
  timestamp: string;
  summary: string;
  highlights: {
    type: string;
    title: string;
    description: string;
  }[];
  stats: {
    socialInteractions: number;
    events: number;
    locations: number;
    sentiment: number;
  };
}

// Define the SocialPost interface
export interface SocialPost {
  id: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  platform: "twitter" | "instagram" | "email" | "facebook" | "linkedin";
}

// Define LocationData interface
export interface LocationData {
  id: string;
  name: string;
  type: 'home' | 'work' | 'shopping' | 'food' | 'transit' | 'park' | 'other' | 'school' | 'hospital';
  address?: string;
  time: string;
  duration?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  sentimentScore?: number;
  emotion?: {
    primary: 'happy' | 'sad' | 'angry' | 'surprised' | 'scared' | 'neutral';
    intensity: number; // 0-1
    note?: string;
  };
}
