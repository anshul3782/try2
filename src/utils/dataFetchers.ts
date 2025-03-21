import { SocialPost } from '@/components/Dashboard/SocialFeed';
import { LocationData } from '@/components/Dashboard/LocationTimeline';
import { ActivityData } from '@/components/Dashboard/ActivityMetrics';
import { ReportData } from '@/components/Dashboard/LifeReport';
import { Friend } from '@/context/DashboardContext';

// Mock function to fetch friends data
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
          location: 'Manhattan, New York',
          currentEmotion: 'neutral',
          emotionIntensity: 0.5,
          description: 'Busy day at work, looking forward to the weekend'
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
          location: 'Queens, New York',
          currentEmotion: 'tired',
          emotionIntensity: 0.7,
          description: 'Long shift at the hospital, need some rest'
        }
      ]);
    }, 1000);
  });
};

// Mock function to fetch social media data
export const fetchSocialData = async (): Promise<SocialPost[]> => {
  // In a real app, you would fetch this from APIs
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          platform: 'twitter',
          author: {
            name: 'John Doe',
            handle: 'johndoe',
            avatar: ''
          },
          content: 'Just finished a great workout at the gym! Feeling energized and ready for the day ahead. #fitness #wellness',
          timestamp: '2 hours ago',
          metrics: {
            likes: 12,
            comments: 3,
            shares: 2
          },
          sentiment: {
            score: 0.8,
            label: 'positive'
          }
        },
        {
          id: '2',
          platform: 'facebook',
          author: {
            name: 'John Doe',
            avatar: ''
          },
          content: 'Had a frustrating experience with customer service today. Still waiting for a resolution after 2 hours on the phone.',
          timestamp: '5 hours ago',
          metrics: {
            likes: 5,
            comments: 8,
            shares: 0
          },
          sentiment: {
            score: -0.6,
            label: 'negative'
          }
        },
        {
          id: '3',
          platform: 'linkedin',
          author: {
            name: 'John Doe',
            handle: 'johndoe',
            avatar: ''
          },
          content: 'Excited to announce that I\'ll be speaking at the upcoming tech conference next month! Looking forward to sharing insights on data privacy and analytics.',
          timestamp: 'Yesterday',
          metrics: {
            likes: 45,
            comments: 7,
            shares: 5
          },
          sentiment: {
            score: 0.7,
            label: 'positive'
          },
          link: 'https://example.com/conference'
        },
        {
          id: '4',
          platform: 'email',
          author: {
            name: 'Project Team',
            handle: 'team@example.com',
            avatar: ''
          },
          content: 'The quarterly report is now available for review. Please provide your feedback by the end of the week.',
          timestamp: 'Yesterday',
          sentiment: {
            score: 0.1,
            label: 'neutral'
          }
        },
        {
          id: '5',
          platform: 'instagram',
          author: {
            name: 'John Doe',
            handle: 'johndoe',
            avatar: ''
          },
          content: 'Beautiful sunset at the beach today. The perfect end to a relaxing weekend! #sunset #weekend #beach',
          timestamp: '2 days ago',
          metrics: {
            likes: 87,
            comments: 12,
            shares: 0
          },
          sentiment: {
            score: 0.9,
            label: 'positive'
          }
        }
      ]);
    }, 1500);
  });
};

// Mock function to fetch location data - updated to be friend-specific
export const fetchLocationData = async (friendId = 'arnav'): Promise<LocationData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (friendId === 'arnav') {
        resolve([
          {
            id: '1',
            name: 'Campus Dorm',
            type: 'home',
            address: 'ASU Tooker House, Tempe',
            time: '7:00 AM',
            duration: '45 minutes',
            coordinates: {
              lat: 33.4145,
              lng: -111.9280
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.3,
              note: 'Just woke up, feeling a bit groggy but ready for class'
            }
          },
          {
            id: '2',
            name: 'Campus Dining Hall',
            type: 'food',
            address: 'ASU Memorial Union, Tempe',
            time: '8:00 AM',
            duration: '30 minutes',
            coordinates: {
              lat: 33.4175,
              lng: -111.9350
            },
            emotion: {
              primary: 'happy',
              intensity: 0.5,
              note: 'Had a good breakfast with friends'
            }
          },
          {
            id: '3',
            name: 'Computer Science Building',
            type: 'school',
            address: 'ASU Brickyard, Tempe',
            time: '9:00 AM',
            duration: '2 hours',
            coordinates: {
              lat: 33.4225,
              lng: -111.9400
            },
            emotion: {
              primary: 'happy',
              intensity: 0.9,
              note: 'Aced my computer science exam!'
            }
          },
          {
            id: '4',
            name: 'Library Study Session',
            type: 'school',
            address: 'Hayden Library, ASU Tempe',
            time: '12:00 PM',
            duration: '2 hours 30 minutes',
            coordinates: {
              lat: 33.4190,
              lng: -111.9350
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.6,
              note: 'Working on group project, making good progress'
            }
          },
          {
            id: '5',
            name: 'Campus Recreation',
            type: 'park',
            address: 'Sun Devil Fitness Complex, Tempe',
            time: '3:00 PM',
            duration: '1 hour',
            coordinates: {
              lat: 33.4160,
              lng: -111.9320
            },
            emotion: {
              primary: 'happy',
              intensity: 0.7,
              note: 'Great workout, feeling energized'
            }
          },
          {
            id: '6',
            name: 'Coffee with Friends',
            type: 'food',
            address: 'Dutch Bros Coffee, Tempe',
            time: '5:00 PM',
            duration: '1 hour',
            coordinates: {
              lat: 33.4150,
              lng: -111.9270
            },
            emotion: {
              primary: 'happy',
              intensity: 0.8,
              note: 'Hanging out with friends, sharing good news about exam'
            }
          },
          {
            id: '7',
            name: 'Back at Dorm',
            type: 'home',
            address: 'ASU Tooker House, Tempe',
            time: '7:00 PM',
            coordinates: {
              lat: 33.4145,
              lng: -111.9280
            },
            emotion: {
              primary: 'happy',
              intensity: 0.6,
              note: 'Relaxing after a great day'
            }
          }
        ]);
      } else if (friendId === 'sheetal') {
        resolve([
          {
            id: '1',
            name: 'Manhattan Apartment',
            type: 'home',
            address: '212 E 42nd St, Manhattan',
            time: '6:30 AM',
            duration: '45 minutes',
            coordinates: {
              lat: 40.7505,
              lng: -73.9734
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.3,
              note: 'Starting another busy day'
            }
          },
          {
            id: '2',
            name: 'Central Park Run',
            type: 'park',
            address: 'Central Park Reservoir Track',
            time: '7:30 AM',
            duration: '1 hour',
            coordinates: {
              lat: 40.7812,
              lng: -73.9665
            },
            emotion: {
              primary: 'happy',
              intensity: 0.8,
              note: 'Morning run always makes me feel great'
            }
          },
          {
            id: '3',
            name: 'Coffee Shop',
            type: 'food',
            address: '401 Park Ave S, Manhattan',
            time: '8:45 AM',
            duration: '25 minutes',
            coordinates: {
              lat: 40.7425,
              lng: -73.9845
            },
            emotion: {
              primary: 'happy',
              intensity: 0.6,
              note: 'Good coffee to start the workday'
            }
          },
          {
            id: '4',
            name: 'Office - Wall Street',
            type: 'work',
            address: '23 Wall St, Manhattan',
            time: '9:30 AM',
            duration: '4 hours',
            coordinates: {
              lat: 40.7068,
              lng: -74.0106
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.5,
              note: 'Busy morning with meetings'
            }
          },
          {
            id: '5',
            name: 'Lunch at Shake Shack',
            type: 'food',
            address: '215 Murray St, Manhattan',
            time: '1:45 PM',
            duration: '45 minutes',
            coordinates: {
              lat: 40.7149,
              lng: -74.0133
            },
            emotion: {
              primary: 'happy',
              intensity: 0.7,
              note: 'Great burger and took a nice break from work'
            }
          },
          {
            id: '6',
            name: 'Back at Office',
            type: 'work',
            address: '23 Wall St, Manhattan',
            time: '2:30 PM',
            coordinates: {
              lat: 40.7068,
              lng: -74.0106
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.5,
              note: 'Afternoon meetings, looking forward to the weekend'
            }
          }
        ]);
      } else if (friendId === 'shahraan') {
        resolve([
          {
            id: '1',
            name: 'Home',
            type: 'home',
            address: 'Scarsdale, NY',
            time: '7:00 AM',
            duration: '1 hour',
            coordinates: {
              lat: 40.9884,
              lng: -73.7776
            },
            emotion: {
              primary: 'happy',
              intensity: 0.6,
              note: 'Excited for school today'
            }
          },
          {
            id: '2',
            name: 'Scarsdale Elementary',
            type: 'school',
            address: 'Scarsdale, NY',
            time: '8:30 AM',
            duration: '3 hours 30 minutes',
            coordinates: {
              lat: 40.9900,
              lng: -73.7800
            },
            emotion: {
              primary: 'happy',
              intensity: 0.8,
              note: 'Got a gold star on my math homework!'
            }
          },
          {
            id: '3',
            name: 'School Lunch',
            type: 'food',
            address: 'School Cafeteria',
            time: '12:00 PM',
            duration: '30 minutes',
            coordinates: {
              lat: 40.9900,
              lng: -73.7800
            },
            emotion: {
              primary: 'happy',
              intensity: 0.7,
              note: 'Pizza day is the best!'
            }
          },
          {
            id: '4',
            name: 'Afternoon Classes',
            type: 'school',
            address: 'Scarsdale Elementary',
            time: '12:30 PM',
            duration: '3 hours',
            coordinates: {
              lat: 40.9900,
              lng: -73.7800
            },
            emotion: {
              primary: 'happy',
              intensity: 0.9,
              note: 'Art class was super fun today'
            }
          },
          {
            id: '5',
            name: 'Baseball Practice',
            type: 'park',
            address: 'Scarsdale Little League Field',
            time: '4:00 PM',
            duration: '1 hour 30 minutes',
            coordinates: {
              lat: 40.9850,
              lng: -73.7830
            },
            emotion: {
              primary: 'happy',
              intensity: 0.9,
              note: 'Hit a home run at practice!'
            }
          },
          {
            id: '6',
            name: 'Home for Dinner',
            type: 'home',
            address: 'Scarsdale, NY',
            time: '6:00 PM',
            coordinates: {
              lat: 40.9884,
              lng: -73.7776
            },
            emotion: {
              primary: 'happy',
              intensity: 0.8,
              note: 'Mom made my favorite dinner'
            }
          }
        ]);
      } else if (friendId === 'lena') {
        resolve([
          {
            id: '1',
            name: 'Queens Apartment',
            type: 'home',
            address: 'Queens, NY',
            time: '5:00 AM',
            duration: '45 minutes',
            coordinates: {
              lat: 40.7282,
              lng: -73.7949
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.4,
              note: 'Early morning, getting ready for hospital shift'
            }
          },
          {
            id: '2',
            name: 'Subway Commute',
            type: 'transit',
            address: 'Queens Subway',
            time: '6:00 AM',
            duration: '45 minutes',
            coordinates: {
              lat: 40.7300,
              lng: -73.8000
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.3,
              note: 'Quiet morning commute, preparing mentally for the day'
            }
          },
          {
            id: '3',
            name: 'Queens Medical Center',
            type: 'hospital',
            address: 'Queens Hospital Center',
            time: '7:00 AM',
            duration: '6 hours',
            coordinates: {
              lat: 40.7420,
              lng: -73.8200
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.5,
              note: 'Busy morning rounds, multiple patients to see'
            }
          },
          {
            id: '4',
            name: 'Hospital Cafeteria',
            type: 'food',
            address: 'Queens Hospital Center',
            time: '1:00 PM',
            duration: '30 minutes',
            coordinates: {
              lat: 40.7420,
              lng: -73.8200
            },
            emotion: {
              primary: 'sad',
              intensity: 0.6,
              note: 'Had to deliver difficult news to a patient'
            }
          },
          {
            id: '5',
            name: 'Emergency Department',
            type: 'hospital',
            address: 'Queens Hospital Center',
            time: '1:30 PM',
            duration: '5 hours 30 minutes',
            coordinates: {
              lat: 40.7420,
              lng: -73.8200
            },
            emotion: {
              primary: 'sad',
              intensity: 0.7,
              note: 'Very busy ER shift, challenging cases'
            }
          },
          {
            id: '6',
            name: 'Subway Home',
            type: 'transit',
            address: 'Queens Subway',
            time: '7:00 PM',
            duration: '45 minutes',
            coordinates: {
              lat: 40.7300,
              lng: -73.8000
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.4,
              note: 'Tired after long shift, looking forward to rest'
            }
          },
          {
            id: '7',
            name: 'Home',
            type: 'home',
            address: 'Queens, NY',
            time: '8:00 PM',
            coordinates: {
              lat: 40.7282,
              lng: -73.7949
            },
            emotion: {
              primary: 'neutral',
              intensity: 0.6,
              note: 'Need to rest, long day at the hospital'
            }
          }
        ]);
      } else {
        // Default
        resolve([]);
      }
    }, 1500);
  });
};

// Mock function to fetch activity data
export const fetchActivityData = async (): Promise<ActivityData[]> => {
  // In a real app, you would fetch this from fitness trackers/health APIs
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          date: 'Monday',
          steps: 8234,
          calories: 1850,
          sleep: 7.5,
          activeMinutes: 35
        },
        {
          date: 'Tuesday',
          steps: 10543,
          calories: 2100,
          sleep: 8,
          activeMinutes: 42
        },
        {
          date: 'Wednesday',
          steps: 7654,
          calories: 1950,
          sleep: 6.5,
          activeMinutes: 28
        },
        {
          date: 'Thursday',
          steps: 9876,
          calories: 2200,
          sleep: 7,
          activeMinutes: 45
        },
        {
          date: 'Friday',
          steps: 11234,
          calories: 2350,
          sleep: 7.5,
          activeMinutes: 55
        },
        {
          date: 'Saturday',
          steps: 12543,
          calories: 2450,
          sleep: 8.5,
          activeMinutes: 65
        },
        {
          date: 'Sunday',
          steps: 9234,
          calories: 2150,
          sleep: 8,
          activeMinutes: 40
        }
      ]);
    }, 1500);
  });
};

// Mock function to fetch sentiment data - updated to be friend-specific
export const fetchSentimentData = async (friendId = 'arnav'): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (friendId === 'arnav') {
        resolve([
          {
            period: 'Monday',
            happy: 0.65,
            sad: 0.1,
            angry: 0.0,
            neutral: 0.25,
            overall: 0.55,
            primaryEmotion: 'happy',
            locationCorrelation: [
              {
                type: 'school',
                name: 'Computer Science Building',
                score: 0.85
              },
              {
                type: 'park',
                name: 'Campus Recreation',
                score: 0.72
              }
            ]
          }
        ]);
      } else if (friendId === 'sheetal') {
        resolve([
          {
            period: 'Monday',
            happy: 0.55,
            sad: 0.1,
            angry: 0.05,
            neutral: 0.3,
            overall: 0.45,
            primaryEmotion: 'happy',
            locationCorrelation: [
              {
                type: 'park',
                name: 'Central Park',
                score: 0.9
              },
              {
                type: 'food',
                name: 'Shake Shack',
                score: 0.75
              }
            ]
          }
        ]);
      } else if (friendId === 'shahraan') {
        resolve([
          {
            period: 'Monday',
            happy: 0.8,
            sad: 0.05,
            angry: 0.05,
            neutral: 0.1,
            overall: 0.75,
            primaryEmotion: 'happy',
            locationCorrelation: [
              {
                type: 'park',
                name: 'Baseball Field',
                score: 0.95
              },
              {
                type: 'food',
                name: 'School Cafeteria',
                score: 0.8
              }
            ]
          }
        ]);
      } else if (friendId === 'lena') {
        resolve([
          {
            period: 'Monday',
            happy: 0.2,
            sad: 0.4,
            angry: 0.1,
            neutral: 0.3,
            overall: -0.1,
            primaryEmotion: 'sad',
            locationCorrelation: [
              {
                type: 'home',
                name: 'Queens Apartment',
                score: 0.6
              },
              {
                type: 'food',
                name: 'Coffee Shop',
                score: 0.5
              }
            ]
          }
        ]);
      } else {
        // Default
        resolve([]);
      }
    }, 1500);
  });
};

// Mock function to fetch life report
export const fetchLifeReport = async (): Promise<ReportData> => {
  // In a real app, this would be generated from all the collected data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Your Sunday Summary',
        period: 'Sunday, June 5, 2023',
        timestamp: '11:59 PM',
        summary: 'You had a balanced day with positive social interactions and good physical activity. Your overall sentiment was positive, and you visited 4 locations throughout the day. You spent most of your time at home and the park.',
        highlights: [
          {
            type: 'insight',
            title: 'Mood improvement after exercise',
            description: 'Your sentiment scores increased significantly after your morning run.'
          },
          {
            type: 'event',
            title: 'Family dinner',
            description: 'You spent 2 hours at an Italian restaurant with family members.'
          },
          {
            type: 'social',
            title: 'High engagement post',
            description: 'Your beach sunset photo received 87 likes, your highest this week.'
          },
          {
            type: 'wellness',
            title: 'Sleep quality improvement',
            description: 'You slept 8 hours with fewer disruptions than your weekly average.'
          }
        ],
        stats: {
          socialInteractions: 24,
          events: 3,
          locations: 4,
          sentiment: 0.7
        }
      });
    }, 1500);
  });
};

// Mock function to fetch privacy settings
export const fetchPrivacySettings = async (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'location-tracking',
          name: 'Location Tracking',
          description: 'Allow the app to collect and analyze your location data',
          enabled: true,
          category: 'data'
        },
        {
          id: 'social-content',
          name: 'Social Media Content',
          description: 'Collect and analyze content from your connected social accounts',
          enabled: true,
          category: 'data'
        },
        {
          id: 'health-data',
          name: 'Health & Activity Data',
          description: 'Access step count, sleep, and other wellness metrics',
          enabled: true,
          category: 'data'
        },
        {
          id: 'sentiment-analysis',
          name: 'Sentiment Analysis',
          description: 'Process text content to determine emotional tone',
          enabled: true,
          category: 'analytics'
        },
        {
          id: 'behavioral-patterns',
          name: 'Behavioral Pattern Analysis',
          description: 'Identify patterns in your daily activities and habits',
          enabled: true,
          category: 'analytics'
        },
        {
          id: 'social-graph',
          name: 'Social Connection Analysis',
          description: 'Analyze your social interactions and relationships',
          enabled: false,
          category: 'analytics'
        },
        {
          id: 'aggregate-stats',
          name: 'Anonymous Aggregate Statistics',
          description: 'Contribute anonymous data to improve the app (no personal information)',
          enabled: true,
          category: 'sharing'
        },
        {
          id: 'cross-device',
          name: 'Cross-Device Synchronization',
          description: 'Sync your data between different devices',
          enabled: true,
          category: 'sharing'
        },
        {
          id: 'third-party',
          name: 'Third-Party Integration',
          description: 'Share data with connected third-party services',
          enabled: false,
          category: 'sharing'
        }
      ]);
    }, 1500);
  });
};
