
// Define the ActivityData interface
export interface ActivityData {
  date: string;
  steps: number;
  calories: number;
  sleep: number;
  activeMinutes: number;
}

// Define the ReportData interface
export interface ReportData {
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
