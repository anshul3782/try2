import { SocialPost, LocationData, ActivityData } from '@/types/dashboard';
import { Friend } from '@/context/DashboardContext';

export const fetchSocialData = async (): Promise<SocialPost[]> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data
  return [
    {
      id: '1',
      content: 'Just finished my morning run! 🏃‍♂️',
      timestamp: new Date().toISOString(),
      likes: 12,
      comments: 3,
      author: {
        name: 'John Smith',
        handle: '@johnsmith',
        avatar: '/placeholder.svg'
      },
      platform: 'twitter'
    },
    {
      id: '2',
      content: 'Working on a new project. So excited to share it soon! 💻',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      likes: 24,
      comments: 8,
      author: {
        name: 'Jane Doe',
        handle: '@janedoe',
        avatar: '/placeholder.svg'
      },
      platform: 'twitter'
    },
    {
      id: '3',
      content: 'Beautiful sunset today! #nofilter',
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      likes: 56,
      comments: 4,
      author: {
        name: 'Mike Johnson',
        handle: '@mikej',
        avatar: '/placeholder.svg'
      },
      platform: 'instagram'
    }
  ];
};

export const fetchLocationData = async (friendId: string): Promise<LocationData[]> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Define basic locations for different friends
  const locations: Record<string, LocationData[]> = {
    lena: [
      {
        id: 'loc1',
        name: 'Home',
        type: 'home',
        address: '123 Brooklyn Ave, Brooklyn',
        time: '07:00 AM',
        duration: '30 min',
        coordinates: { lat: 40.6782, lng: -73.9442 },
        emotion: {
          primary: 'happy',
          intensity: 0.7,
          note: 'Had a good breakfast and ready for the day'
        }
      },
      {
        id: 'loc2',
        name: 'NYC Health + Hospitals/Kings County',
        type: 'hospital',
        address: '451 Clarkson Ave, Brooklyn',
        time: '08:15 AM',
        duration: '8 hours',
        coordinates: { lat: 40.6559, lng: -73.9455 },
        emotion: {
          primary: 'neutral',
          intensity: 0.5,
          note: 'Starting my shift at the hospital'
        }
      },
      {
        id: 'loc3',
        name: 'Prospect Park',
        type: 'park',
        address: 'Prospect Park, Brooklyn',
        time: '05:30 PM',
        duration: '45 min',
        coordinates: { lat: 40.6602, lng: -73.9690 },
        emotion: {
          primary: 'happy',
          intensity: 0.8,
          note: 'Lovely evening walk after work'
        }
      }
    ],
    sheetal: [
      {
        id: 'loc1',
        name: 'Morning Run',
        type: 'park',
        address: 'Flushing Meadows Park',
        time: '06:30 AM',
        duration: '45 min',
        coordinates: { lat: 40.7282, lng: -73.8397 },
        emotion: {
          primary: 'happy',
          intensity: 0.9,
          note: 'Great morning run, feeling energized!'
        }
      },
      {
        id: 'loc2',
        name: 'Home Office',
        type: 'work',
        address: '78 Queens Blvd, Queens',
        time: '09:00 AM',
        duration: '3 hours',
        coordinates: { lat: 40.7331, lng: -73.8697 },
        emotion: {
          primary: 'neutral',
          intensity: 0.6,
          note: 'Analyzing stock market trends'
        }
      },
      {
        id: 'loc3',
        name: 'Lunch Break',
        type: 'food',
        address: 'Health Foods Cafe',
        time: '12:00 PM',
        duration: '45 min',
        coordinates: { lat: 40.7362, lng: -73.8755 },
        emotion: {
          primary: 'happy',
          intensity: 0.7,
          note: 'Breaking my fast with a healthy meal'
        }
      },
      {
        id: 'loc4',
        name: 'Home Trading Desk',
        type: 'work',
        address: '78 Queens Blvd, Queens',
        time: '08:00 PM',
        duration: '4 hours',
        coordinates: { lat: 40.7331, lng: -73.8697 },
        emotion: {
          primary: 'neutral',
          intensity: 0.4,
          note: 'Evening stock trading session'
        }
      }
    ]
  };
  
  // Default locations for any friend not specifically defined
  const defaultLocations: LocationData[] = [
    {
      id: 'loc1',
      name: 'Home',
      type: 'home',
      address: '123 Main St',
      time: '07:00 AM',
      duration: '1 hour',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      emotion: {
        primary: 'neutral',
        intensity: 0.5
      }
    },
    {
      id: 'loc2',
      name: 'Work',
      type: 'work',
      address: '456 Business Ave',
      time: '09:00 AM',
      duration: '8 hours',
      coordinates: { lat: 40.7580, lng: -73.9855 },
      emotion: {
        primary: 'happy',
        intensity: 0.6,
        note: 'Productive day at work'
      }
    },
    {
      id: 'loc3',
      name: 'Gym',
      type: 'other',
      address: '789 Fitness Blvd',
      time: '06:00 PM',
      duration: '1 hour',
      coordinates: { lat: 40.7390, lng: -73.9900 },
      emotion: {
        primary: 'happy',
        intensity: 0.8,
        note: 'Great workout!'
      }
    }
  ];
  
  return locations[friendId] || defaultLocations;
};

export const fetchActivityData = async (): Promise<ActivityData[]> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Mock data
  return [
    {
      id: '1',
      type: 'workout',
      duration: '30 minutes',
      caloriesBurned: 300,
      timestamp: new Date().toISOString()
    },
    {
      id: '2',
      type: 'meeting',
      duration: '1 hour',
      caloriesBurned: 50,
      timestamp: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: '3',
      type: 'walk',
      duration: '45 minutes',
      caloriesBurned: 200,
      timestamp: new Date(Date.now() - 7200000).toISOString()
    }
  ];
};

export const fetchSentimentData = async (friendId: string): Promise<any[]> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 900));
  
  // Mock data
  return [
    {
      id: '1',
      date: new Date().toISOString(),
      score: 0.75,
      magnitude: 0.5
    },
    {
      id: '2',
      date: new Date(Date.now() - 86400000).toISOString(),
      score: 0.60,
      magnitude: 0.4
    },
    {
      id: '3',
      date: new Date(Date.now() - 172800000).toISOString(),
      score: 0.80,
      magnitude: 0.6
    }
  ];
};

export const fetchLifeReport = async (): Promise<any> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Mock data
  return {
    id: '1',
    date: new Date().toISOString(),
    sleepHours: 7.5,
    stressLevel: 0.4,
    mood: 'good'
  };
};

export const fetchPrivacySettings = async (): Promise<any[]> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  // Mock data
  return [
    {
      id: '1',
      setting: 'location sharing',
      enabled: true
    },
    {
      id: '2',
      setting: 'activity tracking',
      enabled: false
    }
  ];
};

export const fetchFriendsData = async (): Promise<Friend[]> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Mock data - updated to include only the requested friends without surnames
  return [
    {
      id: 'lena',
      name: 'Lena',
      location: 'Brooklyn, NY',
      currentEmotion: 'happy',
      emotionIntensity: 0.8,
      description: 'Enjoying my morning commute!',
      avatar: '/placeholder.svg'
    },
    {
      id: 'sheetal',
      name: 'Sheetal',
      location: 'Queens, NY',
      currentEmotion: 'happy',
      emotionIntensity: 0.7,
      description: 'Morning run was great!',
      avatar: '/placeholder.svg'
    },
    {
      id: 'arnav',
      name: 'Arnav',
      location: 'Staten Island, NY',
      currentEmotion: 'happy',
      emotionIntensity: 0.9,
      description: 'Just got promoted!',
      avatar: '/placeholder.svg'
    },
    {
      id: 'shahraan',
      name: 'Shahraan',
      location: 'Manhattan, NY',
      currentEmotion: 'neutral',
      emotionIntensity: 0.5,
      description: 'Working on a new project',
      avatar: '/placeholder.svg'
    }
  ];
};

export const updateFriendEmotion = async (
  friendId: string,
  emotion: 'happy' | 'sad' | 'angry' | 'surprised' | 'scared' | 'neutral',
  intensity: number,
  comment: string
): Promise<boolean> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Just return success in this mock implementation
  return true;
};
