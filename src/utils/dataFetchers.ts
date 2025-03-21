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
  
  // Generate multiple location entries for a day
  const generateTimelineEntries = (baseLocations: LocationData[]): LocationData[] => {
    // We'll keep the original entries and add more randomized ones
    const result: LocationData[] = [...baseLocations];
    
    // Common places that might appear in a person's day
    const commonPlaces = [
      { 
        name: 'Coffee Shop', 
        type: 'food' as const,
        emotion: { primary: 'happy' as const, intensity: 0.7, note: 'Great coffee today!' }
      },
      { 
        name: 'Grocery Store', 
        type: 'shopping' as const,
        emotion: { primary: 'neutral' as const, intensity: 0.5, note: 'Weekly shopping trip' }
      },
      { 
        name: 'Gas Station', 
        type: 'other' as const,
        emotion: { primary: 'neutral' as const, intensity: 0.4, note: 'Filled up the tank' }
      },
      { 
        name: 'Gym', 
        type: 'other' as const,
        emotion: { primary: 'happy' as const, intensity: 0.8, note: 'Great workout!' }
      },
      { 
        name: 'Restaurant', 
        type: 'food' as const,
        emotion: { primary: 'happy' as const, intensity: 0.9, note: 'Delicious dinner' }
      },
      { 
        name: 'Park', 
        type: 'park' as const,
        emotion: { primary: 'happy' as const, intensity: 0.7, note: 'Nice evening walk' }
      },
      { 
        name: 'Library', 
        type: 'other' as const,
        emotion: { primary: 'neutral' as const, intensity: 0.6, note: 'Studying for exams' }
      },
      { 
        name: 'Mall', 
        type: 'shopping' as const,
        emotion: { primary: 'happy' as const, intensity: 0.6, note: 'Found that item I was looking for!' }
      },
      { 
        name: 'Pharmacy', 
        type: 'other' as const,
        emotion: { primary: 'neutral' as const, intensity: 0.5, note: 'Picking up prescription' }
      },
      { 
        name: 'Post Office', 
        type: 'other' as const,
        emotion: { primary: 'neutral' as const, intensity: 0.4, note: 'Mailing a package' }
      }
    ];
    
    // Friend-specific locations
    const friendSpecificPlaces: Record<string, any[]> = {
      lena: [
        { 
          name: 'Brooklyn Public Library', 
          type: 'other' as const,
          emotion: { primary: 'happy' as const, intensity: 0.7, note: 'Found a great book on medicine' }
        },
        { 
          name: 'Patient Consultation', 
          type: 'hospital' as const,
          emotion: { primary: 'neutral' as const, intensity: 0.6, note: 'Meeting with patients' }
        },
        { 
          name: 'Lunch with Colleagues', 
          type: 'food' as const,
          emotion: { primary: 'happy' as const, intensity: 0.8, note: 'Great conversation with the nursing staff' }
        },
        { 
          name: 'Medical Conference Call', 
          type: 'work' as const,
          emotion: { primary: 'neutral' as const, intensity: 0.5, note: 'Discussing treatment protocols' }
        }
      ],
      sheetal: [
        { 
          name: 'Stock Market Analysis', 
          type: 'work' as const,
          emotion: { primary: 'happy' as const, intensity: 0.7, note: 'Markets are looking good today' }
        },
        { 
          name: 'Yoga Studio', 
          type: 'other' as const,
          emotion: { primary: 'happy' as const, intensity: 0.9, note: 'Perfect morning yoga session' }
        },
        { 
          name: 'Investor Meeting', 
          type: 'work' as const,
          emotion: { primary: 'neutral' as const, intensity: 0.6, note: 'Discussing portfolio strategy' }
        }
      ],
      arnav: [
        { 
          name: 'Software Development Meeting', 
          type: 'work' as const,
          emotion: { primary: 'happy' as const, intensity: 0.8, note: 'Project is ahead of schedule' }
        },
        { 
          name: 'Tech Meetup', 
          type: 'other' as const,
          emotion: { primary: 'happy' as const, intensity: 0.9, note: 'Gave a talk on machine learning' }
        },
        { 
          name: 'Code Review', 
          type: 'work' as const,
          emotion: { primary: 'neutral' as const, intensity: 0.5, note: 'Reviewing pull requests' }
        }
      ],
      shahraan: [
        { 
          name: 'Design Studio', 
          type: 'work' as const,
          emotion: { primary: 'happy' as const, intensity: 0.7, note: 'Working on a new design concept' }
        },
        { 
          name: 'Client Meeting', 
          type: 'work' as const,
          emotion: { primary: 'neutral' as const, intensity: 0.6, note: 'Presenting design concepts' }
        },
        { 
          name: 'Art Gallery', 
          type: 'other' as const,
          emotion: { primary: 'happy' as const, intensity: 0.8, note: 'Found inspiration for my next project' }
        }
      ]
    };
    
    // Get specific places for this friend or use general ones
    const specificPlaces = friendSpecificPlaces[friendId] || [];
    
    // All places to choose from
    const allPlaces = [...commonPlaces, ...specificPlaces];
    
    // Generate 30 total timeline entries
    const targetCount = 30;
    const moreNeeded = targetCount - result.length;
    
    // Generate times throughout the day
    const generateTime = (hour: number, minute: number = 0): string => {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
    };
    
    // Generate addresses based on location
    const generateAddress = (friendId: string): string => {
      const locations: Record<string, string[]> = {
        lena: ['Brooklyn', 'Williamsburg', 'Park Slope', 'Flatbush', 'Crown Heights'],
        sheetal: ['Queens', 'Astoria', 'Flushing', 'Jamaica', 'Forest Hills'],
        arnav: ['Staten Island', 'St. George', 'Tottenville', 'Great Kills'],
        shahraan: ['Manhattan', 'Chelsea', 'SoHo', 'Tribeca', 'Midtown']
      };
      
      const area = locations[friendId] || ['New York'];
      const selectedArea = area[Math.floor(Math.random() * area.length)];
      return `${Math.floor(Math.random() * 1000) + 1} ${selectedArea} ${Math.random() > 0.5 ? 'Ave' : 'St'}`;
    };
    
    // Create a mapping of hours to existing entries
    const existingHours = new Set(result.map(loc => {
      const parts = loc.time.split(':');
      const hour = parseInt(parts[0]);
      return hour + (loc.time.includes('PM') && hour !== 12 ? 12 : 0);
    }));
    
    for (let i = 0; i < moreNeeded; i++) {
      // Find an available hour
      let hour;
      do {
        hour = Math.floor(Math.random() * 16) + 7; // 7 AM to 10 PM
      } while (existingHours.has(hour));
      
      existingHours.add(hour);
      
      // Choose a random place
      const place = allPlaces[Math.floor(Math.random() * allPlaces.length)];
      
      // Duration between 15 and 90 minutes
      const durationMinutes = Math.floor(Math.random() * 76) + 15;
      
      result.push({
        id: `loc${result.length + 1}`,
        name: place.name,
        type: place.type,
        address: generateAddress(friendId),
        time: generateTime(hour, Math.floor(Math.random() * 4) * 15), // Round to quarters of an hour
        duration: `${durationMinutes} min`,
        coordinates: { 
          lat: 40.7 + (Math.random() * 0.1 - 0.05), 
          lng: -74 + (Math.random() * 0.1 - 0.05) 
        },
        emotion: place.emotion
      });
    }
    
    // Sort by time of day
    return result.sort((a, b) => {
      // Parse the time strings
      const timeA = a.time;
      const timeB = b.time;
      
      // Extract hours
      const hourA = parseInt(timeA.split(':')[0]);
      const hourB = parseInt(timeB.split(':')[0]);
      
      // Adjust for AM/PM
      const adjustedHourA = hourA + (timeA.includes('PM') && hourA !== 12 ? 12 : 0) - (timeA.includes('AM') && hourA === 12 ? 12 : 0);
      const adjustedHourB = hourB + (timeB.includes('PM') && hourB !== 12 ? 12 : 0) - (timeB.includes('AM') && hourB === 12 ? 12 : 0);
      
      if (adjustedHourA !== adjustedHourB) {
        return adjustedHourA - adjustedHourB;
      }
      
      // If hours are the same, compare minutes
      const minuteA = parseInt(timeA.split(':')[1].split(' ')[0]);
      const minuteB = parseInt(timeB.split(':')[1].split(' ')[0]);
      return minuteA - minuteB;
    });
  };
  
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
  
  const baseLocations = locations[friendId] || defaultLocations;
  return generateTimelineEntries(baseLocations);
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
