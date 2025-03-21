
import React from 'react';
import { DashboardProvider, useDashboard } from '@/context/DashboardContext';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import SocialFeed from '@/components/Dashboard/SocialFeed';
import SentimentAnalysis from '@/components/Dashboard/SentimentAnalysis';
import LocationTimeline from '@/components/Dashboard/LocationTimeline';
import ActivityMetrics from '@/components/Dashboard/ActivityMetrics';
import LifeReport from '@/components/Dashboard/LifeReport';
import PrivacySettings from '@/components/Dashboard/PrivacySettings';
import { Button } from "@/components/ui/button";
import { MapPin, RefreshCw } from "lucide-react";

const Dashboard = () => {
  const {
    socialPosts,
    locations,
    activityData,
    sentimentData,
    lifeReport,
    privacySettings,
    isSocialLoading,
    isLocationLoading,
    isActivityLoading,
    isSentimentLoading,
    isReportLoading,
    isPrivacyLoading,
    activePeriod,
    setActivePeriod,
    refreshData
  } = useDashboard();

  const handleRefresh = async () => {
    await refreshData();
  };

  const handleTimeRangeChange = (range: string) => {
    setActivePeriod(range);
  };

  return (
    <>
      <DashboardHeader
        title="Life Dashboard"
        subtitle="Your personal data insights and analytics"
        onTimeRangeChange={handleTimeRangeChange}
      />

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-medium">Today's Insights</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={handleRefresh}
        >
          <RefreshCw className="h-4 w-4" />
          <span>Refresh</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SocialFeed 
          posts={socialPosts} 
          isLoading={isSocialLoading} 
        />
        <SentimentAnalysis 
          data={sentimentData} 
          isLoading={isSentimentLoading} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <LocationTimeline 
          locations={locations} 
          isLoading={isLocationLoading} 
        />
        <ActivityMetrics 
          data={activityData} 
          isLoading={isActivityLoading} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LifeReport 
          report={lifeReport} 
          isLoading={isReportLoading} 
        />
        <PrivacySettings 
          settings={privacySettings} 
          isLoading={isPrivacyLoading} 
        />
      </div>
    </>
  );
};

const Index = () => {
  return (
    <DashboardProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </DashboardProvider>
  );
};

export default Index;
