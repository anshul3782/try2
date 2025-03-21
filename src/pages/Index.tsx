
import React, { useState } from 'react';
import { DashboardProvider, useDashboard } from '@/context/DashboardContext';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import SentimentAnalysis from '@/components/Dashboard/SentimentAnalysis';
import LocationTimeline from '@/components/Dashboard/LocationTimeline';
import UpdateEmotionModal from '@/components/Dashboard/UpdateEmotionModal';
import { Button } from "@/components/ui/button";
import { RefreshCw, UserPlus, Heart, Edit } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const {
    locations,
    sentimentData,
    isLocationLoading,
    isSentimentLoading,
    activePeriod,
    setActivePeriod,
    refreshData,
    friends,
    currentFriend
  } = useDashboard();
  
  const [isEmotionModalOpen, setIsEmotionModalOpen] = useState(false);

  const handleRefresh = async () => {
    await refreshData();
    toast.success("Data refreshed successfully");
  };

  const handleFriendChange = (friend: string) => {
    setActivePeriod(friend);
  };

  const handleAddFriend = () => {
    toast.success("Friend request sent", {
      description: "Your friend will receive a notification to connect"
    });
  };
  
  const getEmotionEmoji = (emotion: string) => {
    switch(emotion) {
      case 'happy': return '😊';
      case 'sad': return '😢';
      case 'angry': return '😠';
      case 'surprised': return '😮';
      case 'scared': return '😨';
      case 'neutral': return '😐';
      default: return '😐';
    }
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-1">Your Friends</h1>
            <p className="text-muted-foreground">See how your friends are feeling today</p>
          </div>
          
          <div className="grid gap-3">
            {friends.map(friend => (
              <div 
                key={friend.id}
                onClick={() => handleFriendChange(friend.id)}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer hover:bg-accent/50 ${
                  activePeriod === friend.id ? 'bg-accent border-primary/30' : 'bg-background'
                }`}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10 border">
                    <AvatarFallback>{getInitials(friend.name)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 text-lg">
                    {getEmotionEmoji(friend.currentEmotion)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium leading-none mb-1">{friend.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{friend.location}</div>
                </div>
                {activePeriod === friend.id && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEmotionModalOpen(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 mt-2" 
              onClick={handleAddFriend}
            >
              <UserPlus className="h-4 w-4" />
              <span>Add new friend</span>
            </Button>
          </div>
        </div>
        
        <div className="flex-1">
          {currentFriend && (
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">
                  {getEmotionEmoji(currentFriend.currentEmotion)}
                </div>
                <div>
                  <h2 className="text-xl font-medium">{currentFriend.name}'s Day</h2>
                  <p className="text-sm text-muted-foreground">
                    {currentFriend.location} • {currentFriend.description}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="ml-auto" 
                  onClick={handleRefresh}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span>Refresh</span>
                </Button>
              </div>
              
              <div className="space-y-6">
                <LocationTimeline 
                  locations={locations} 
                  isLoading={isLocationLoading}
                  onUpdateEmotion={() => setIsEmotionModalOpen(true)}
                />
                
                <SentimentAnalysis 
                  data={sentimentData} 
                  isLoading={isSentimentLoading} 
                  friend={currentFriend}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {currentFriend && (
        <UpdateEmotionModal
          isOpen={isEmotionModalOpen}
          onClose={() => setIsEmotionModalOpen(false)}
          friendId={currentFriend.id}
          friendName={currentFriend.name}
        />
      )}
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
