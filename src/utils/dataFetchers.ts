
import { SocialPost } from '@/components/Dashboard/SocialFeed';
import { LocationData } from '@/components/Dashboard/LocationTimeline';
import { ActivityData } from '@/components/Dashboard/ActivityMetrics';
import { ReportData } from '@/components/Dashboard/LifeReport';

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

// Mock function to fetch location data
export const fetchLocationData = async (): Promise<LocationData[]> => {
  // In a real app, you would fetch this from GPS/location APIs
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Home',
          type: 'home',
          address: '123 Main St',
          time: '7:00 AM',
          duration: '1 hour',
          coordinates: {
            lat: 37.7749,
            lng: -122.4194
          },
          sentimentScore: 0.7
        },
        {
          id: '2',
          name: 'Coffee Shop',
          type: 'food',
          address: '456 Market St',
          time: '8:30 AM',
          duration: '30 minutes',
          coordinates: {
            lat: 37.7790,
            lng: -122.4190
          },
          sentimentScore: 0.6
        },
        {
          id: '3',
          name: 'Office',
          type: 'work',
          address: '789 Mission St',
          time: '9:15 AM',
          duration: '4 hours',
          coordinates: {
            lat: 37.7850,
            lng: -122.4000
          },
          sentimentScore: 0.2
        },
        {
          id: '4',
          name: 'Lunch Spot',
          type: 'food',
          address: '101 Howard St',
          time: '1:30 PM',
          duration: '1 hour',
          coordinates: {
            lat: 37.7900,
            lng: -122.3950
          },
          sentimentScore: 0.8
        },
        {
          id: '5',
          name: 'Grocery Store',
          type: 'shopping',
          address: '202 Van Ness Ave',
          time: '5:45 PM',
          duration: '45 minutes',
          coordinates: {
            lat: 37.7700,
            lng: -122.4200
          },
          sentimentScore: 0.3
        },
        {
          id: '6',
          name: 'Home',
          type: 'home',
          address: '123 Main St',
          time: '6:45 PM',
          coordinates: {
            lat: 37.7749,
            lng: -122.4194
          },
          sentimentScore: 0.9
        }
      ]);
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

// Mock function to fetch sentiment data
export const fetchSentimentData = async (): Promise<any[]> => {
  // In a real app, you would calculate this from NLP processing
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          period: 'Monday',
          positive: 0.65,
          neutral: 0.25,
          negative: 0.1,
          overall: 0.55
        },
        {
          period: 'Tuesday',
          positive: 0.55,
          neutral: 0.35,
          negative: 0.1,
          overall: 0.45
        },
        {
          period: 'Wednesday',
          positive: 0.45,
          neutral: 0.3,
          negative: 0.25,
          overall: 0.2
        },
        {
          period: 'Thursday',
          positive: 0.6,
          neutral: 0.3,
          negative: 0.1,
          overall: 0.5
        },
        {
          period: 'Friday',
          positive: 0.7,
          neutral: 0.2,
          negative: 0.1,
          overall: 0.6
        },
        {
          period: 'Saturday',
          positive: 0.8,
          neutral: 0.15,
          negative: 0.05,
          overall: 0.75
        },
        {
          period: 'Sunday',
          positive: 0.75,
          neutral: 0.2,
          negative: 0.05,
          overall: 0.7
        }
      ]);
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
