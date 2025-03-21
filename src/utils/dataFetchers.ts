import { SocialPost } from '@/components/Dashboard/SocialFeed';
import { LocationData } from '@/components/Dashboard/LocationTimeline';
import { ActivityData, ReportData } from '@/types/dashboard';
import { Friend } from '@/context/DashboardContext';

// Mock data fetching functions
export const fetchSocialData = async (): Promise<SocialPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          author: 'John Doe',
          content: 'Enjoying a sunny day at the park! ☀️',
          likes: 25,
          comments: 5,
          timestamp: '2 hours ago'
        },
        {
          id: '2',
          author: 'Jane Smith',
          content: 'Just finished reading a great book. Highly recommend!',
          likes: 32,
          comments: 10,
          timestamp: '5 hours ago'
        },
        {
          id: '3',
          author: 'Alice Johnson',
          content: 'Trying out a new recipe tonight. Wish me luck! 🤞',
          likes: 18,
          comments: 3,
          timestamp: '8 hours ago'
        }
      ]);
    }, 500);
  });
};

export const fetchActivityData = async (): Promise<ActivityData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          date: '2024-05-09',
          steps: 5245,
          calories: 1950,
          sleep: 7.5,
          activeMinutes: 45
        },
        {
          date: '2024-05-10',
          steps: 6890,
          calories: 2300,
          sleep: 6.8,
          activeMinutes: 60
        },
        {
          date: '2024-05-11',
          steps: 4120,
          calories: 1780,
          sleep: 8.2,
          activeMinutes: 30
        }
      ]);
    }, 600);
  });
};

export const fetchSentimentData = async (friendId: string = 'arnav'): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (friendId === 'arnav') {
        resolve([
          {
            date: '2024-05-09',
            sentimentScore: 0.75,
            positiveKeywords: ['happy', 'productive', 'motivated'],
            negativeKeywords: ['stress', 'tired']
          },
          {
            date: '2024-05-10',
            sentimentScore: 0.82,
            positiveKeywords: ['excited', 'grateful', 'energetic'],
            negativeKeywords: []
          },
          {
            date: '2024-05-11',
            sentimentScore: 0.68,
            positiveKeywords: ['relaxed', 'content', 'peaceful'],
            negativeKeywords: ['bored']
          }
        ]);
      } else {
        // Mock data for other friends
        resolve([
          {
            date: '2024-05-09',
            sentimentScore: 0.65,
            positiveKeywords: ['happy', 'productive'],
            negativeKeywords: ['stress']
          },
          {
            date: '2024-05-10',
            sentimentScore: 0.72,
            positiveKeywords: ['excited', 'grateful'],
            negativeKeywords: []
          },
          {
            date: '2024-05-11',
            sentimentScore: 0.58,
            positiveKeywords: ['relaxed', 'content'],
            negativeKeywords: ['bored']
          }
        ]);
      }
    }, 700);
  });
};

export const fetchLifeReport = async (): Promise<ReportData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Monthly Life Report',
        period: 'May 2024',
        timestamp: '2024-05-11T15:30:00Z',
        summary: 'Overall, May has been a positive month with high levels of activity and social engagement.',
        highlights: [
          {
            type: 'activity',
            title: 'Increased Physical Activity',
            description: 'Step count increased by 15% compared to last month.'
          },
          {
            type: 'social',
            title: 'Active Social Life',
            description: 'Attended 3 social events and connected with 10+ new people.'
          }
        ],
        stats: {
          socialInteractions: 35,
          events: 3,
          locations: 12,
          sentiment: 0.78
        }
      });
    }, 900);
  });
};

export const fetchPrivacySettings = async (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          setting: 'Location Sharing',
          status: 'Enabled',
          description: 'Share your location with friends and family.'
        },
        {
          setting: 'Activity Tracking',
          status: 'Enabled',
          description: 'Track your daily steps, calories, and sleep patterns.'
        },
        {
          setting: 'Social Feed Access',
          status: 'Disabled',
          description: 'Control which apps can access your social feed.'
        }
      ]);
    }, 800);
  });
};

// Update sheetal's information
export const fetchFriendsData = async (): Promise<Friend[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'arnav',
          name: 'Arnav',
          location: 'ASU, Tempe',
          currentEmotion: 'happy',
          emotionIntensity: 0.8,
          description: 'Feeling great after acing my computer science exam!'
        },
        {
          id: 'sheetal',
          name: 'Sheetal',
          location: 'Financial District, Manhattan',
          currentEmotion: 'happy',
          emotionIntensity: 0.7,
          description: 'Just finished a morning run along the Hudson River!'
        },
        {
          id: 'shahraan',
          name: 'Shahraan',
          location: 'Scarsdale, New York',
          currentEmotion: 'happy',
          emotionIntensity: 0.9,
          description: 'Had a great day at school, excited for baseball practice!'
        },
        {
          id: 'lena',
          name: 'Lena',
          location: 'Kings County Hospital, Brooklyn',
          currentEmotion: 'tired',
          emotionIntensity: 0.7,
          description: 'Long shift at the hospital, need some rest'
        }
      ]);
    }, 1000);
  });
};

// Update location data with more specific details
export const fetchLocationData = (friendId: string = 'arnav'): Promise<LocationData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (friendId === 'arnav') {
        resolve([
          {
            id: '1',
            name: 'Home',
            type: 'home',
            address: '123 Main Street, Tempe, AZ',
            time: '8:00 AM',
            duration: '8 hours',
            coordinates: { lat: 33.4255, lng: -111.9400 },
            emotion: {
              primary: 'happy',
              intensity: 0.8,
              note: 'Feeling productive and focused'
            }
          },
          {
            id: '2',
            name: 'Coffee Shop',
            type: 'food',
            address: '456 University Drive, Tempe, AZ',
            time: '12:00 PM',
            duration: '1 hour',
            coordinates: { lat: 33.4230, lng: -111.9390 },
            emotion: {
              primary: 'neutral',
              intensity: 0.5,
              note: 'Quick break for coffee'
            }
          },
          {
            id: '3',
            name: 'Gym',
            type: 'other',
            address: '789 Apache Blvd, Tempe, AZ',
            time: '6:00 PM',
            duration: '1.5 hours',
            coordinates: { lat: 33.4200, lng: -111.9380 },
            emotion: {
              primary: 'happy',
              intensity: 0.7,
              note: 'Good workout session'
            }
          }
        ]);
      } else if (friendId === 'sheetal') {
        resolve([
          {
            id: '1',
            name: 'Morning Run',
            type: 'park',
            address: 'Hudson River Park, West Side Highway',
            time: '6:00 AM',
            duration: '1 hour',
            coordinates: { lat: 40.7133, lng: -74.0170 },
            emotion: {
              primary: 'happy',
              intensity: 0.9,
              note: 'Beautiful sunrise over the Hudson River!'
            }
          },
          {
            id: '2',
            name: 'Breakfast at Home',
            type: 'home',
            address: 'Financial District Apartment, Manhattan',
            time: '7:30 AM',
            duration: '30 minutes',
            coordinates: { lat: 40.7080, lng: -74.0060 },
            emotion: {
              primary: 'neutral',
              intensity: 0.5,
              note: 'Just some quick coffee and checking emails'
            }
          },
          {
            id: '3',
            name: 'Work at Investment Firm',
            type: 'work',
            address: '200 Liberty Street, Financial District',
            time: '9:00 AM',
            duration: '3 hours',
            coordinates: { lat: 40.7120, lng: -74.0150 },
            emotion: {
              primary: 'neutral',
              intensity: 0.6,
              note: 'Morning meetings about market analysis'
            }
          },
          {
            id: '4',
            name: 'First Meal (Intermittent Fasting)',
            type: 'food',
            address: 'Sweetgreen, Wall Street',
            time: '12:30 PM',
            duration: '45 minutes',
            coordinates: { lat: 40.7070, lng: -74.0090 },
            emotion: {
              primary: 'happy',
              intensity: 0.8,
              note: 'Breaking my fast with a healthy salad!'
            }
          },
          {
            id: '5',
            name: 'Stock Analysis & Trading',
            type: 'work',
            address: '200 Liberty Street, Financial District',
            time: '2:00 PM',
            duration: '5 hours',
            coordinates: { lat: 40.7120, lng: -74.0150 },
            emotion: {
              primary: 'happy',
              intensity: 0.7,
              note: 'Great trading day, hit my targets!'
            }
          },
          {
            id: '6',
            name: 'Late Night Stock Research',
            type: 'home',
            address: 'Financial District Apartment, Manhattan',
            time: '9:00 PM',
            duration: '3 hours',
            coordinates: { lat: 40.7080, lng: -74.0060 },
            emotion: {
              primary: 'neutral',
              intensity: 0.5,
              note: 'Analyzing Asian markets before sleep'
            }
          }
        ]);
      } else if (friendId === 'shahraan') {
        resolve([
          {
            id: '1',
            name: 'School',
            type: 'school',
            address: 'Scarsdale High School, Scarsdale, NY',
            time: '8:00 AM',
            duration: '6 hours',
            coordinates: { lat: 40.9880, lng: -73.7950 },
            emotion: {
              primary: 'neutral',
              intensity: 0.6,
              note: 'Regular school day'
            }
          },
          {
            id: '2',
            name: 'Baseball Practice',
            type: 'park',
            address: 'Scarsdale Baseball Field, Scarsdale, NY',
            time: '3:00 PM',
            duration: '2 hours',
            coordinates: { lat: 40.9850, lng: -73.7920 },
            emotion: {
              primary: 'happy',
              intensity: 0.9,
              note: 'Excited for baseball practice'
            }
          },
          {
            id: '3',
            name: 'Home',
            type: 'home',
            address: 'Residential Area, Scarsdale, NY',
            time: '6:00 PM',
            duration: '4 hours',
            coordinates: { lat: 40.9870, lng: -73.7940 },
            emotion: {
              primary: 'neutral',
              intensity: 0.5,
              note: 'Relaxing at home'
            }
          }
        ]);
      } else if (friendId === 'lena') {
        resolve([
          {
            id: '1',
            name: 'Morning Coffee',
            type: 'home',
            address: 'Prospect Heights Apartment, Brooklyn',
            time: '5:30 AM',
            duration: '20 minutes',
            coordinates: { lat: 40.6782, lng: -73.9442 },
            emotion: {
              primary: 'neutral',
              intensity: 0.4,
              note: 'Early start for hospital shift'
            }
          },
          {
            id: '2',
            name: 'Commute to Hospital',
            type: 'transit',
            address: 'Brooklyn to Kings County via Eastern Parkway',
            time: '6:00 AM',
            duration: '25 minutes',
            coordinates: { lat: 40.6656, lng: -73.9600 },
            emotion: {
              primary: 'neutral',
              intensity: 0.3,
              note: 'Traffic lighter than usual today'
            }
          },
          {
            id: '3',
            name: 'Hospital Morning Shift',
            type: 'hospital',
            address: 'NYC Health + Hospitals/Kings County, 451 Clarkson Ave',
            time: '7:00 AM',
            duration: '6 hours',
            coordinates: { lat: 40.6564, lng: -73.9450 },
            emotion: {
              primary: 'happy',
              intensity: 0.7,
              note: 'Saved a patient in critical condition'
            }
          },
          {
            id: '4',
            name: 'Lunch Break',
            type: 'food',
            address: 'Hospital Cafeteria, Kings County',
            time: '1:00 PM',
            duration: '30 minutes',
            coordinates: { lat: 40.6564, lng: -73.9450 },
            emotion: {
              primary: 'sad',
              intensity: 0.6,
              note: 'Thinking about the difficult cases today'
            }
          },
          {
            id: '5',
            name: 'Patient Rounds',
            type: 'hospital',
            address: 'NYC Health + Hospitals/Kings County, 3rd Floor',
            time: '1:30 PM',
            duration: '3 hours',
            coordinates: { lat: 40.6564, lng: -73.9450 },
            emotion: {
              primary: 'surprised',
              intensity: 0.8,
              note: 'Patient showed remarkable improvement!'
            }
          }
        ]);
      } else {
        resolve([]);
      }
    }, 800);
  });
};

export const updateFriendEmotion = async (
  friendId: string,
  emotion: 'happy' | 'sad' | 'angry' | 'surprised' | 'scared' | 'neutral',
  intensity: number,
  comment: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real application, you would send this data to a server
      console.log(`Updated emotion for ${friendId} to ${emotion} with intensity ${intensity} and comment: ${comment}`);
      resolve(true);
    }, 500);
  });
};
