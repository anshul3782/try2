
import React from 'react';
import { DashboardProvider, useDashboard } from '@/context/DashboardContext';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import SentimentAnalysis from '@/components/Dashboard/SentimentAnalysis';
import LocationTimeline from '@/components/Dashboard/LocationTimeline';
import { Button } from "@/components/ui/button";
import { MapPin, RefreshCw, PlusCircle, Heart } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const {
    locations,
    sentimentData,
    isLocationLoading,
    isSentimentLoading,
    activePeriod,
    setActivePeriod,
    refreshData
  } = useDashboard();

  const handleRefresh = async () => {
    await refreshData();
    toast.success("Data refreshed successfully");
  };

  const handleTimeRangeChange = (range: string) => {
    setActivePeriod(range);
  };

  const handleAddLocation = () => {
    toast.success("Location added", {
      description: "Your current location has been recorded"
    });
  };

  return (
    <>
      <DashboardHeader
        title="Emotion Map"
        subtitle="Track your locations and feelings throughout the day"
        onTimeRangeChange={handleTimeRangeChange}
      />

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-rose-500" />
          <h2 className="text-xl font-medium">Your Emotional Journey</h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleAddLocation}
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add Location</span>
          </Button>
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
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <LocationTimeline 
          locations={locations} 
          isLoading={isLocationLoading} 
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SentimentAnalysis 
          data={sentimentData} 
          isLoading={isSentimentLoading} 
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
