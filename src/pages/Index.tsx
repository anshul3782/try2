
import React, { useState } from 'react';
import { DashboardProvider, useDashboard } from '@/context/DashboardContext';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import SentimentAnalysis from '@/components/Dashboard/SentimentAnalysis';
import LocationTimeline from '@/components/Dashboard/LocationTimeline';
import UpdateEmotionModal from '@/components/Dashboard/UpdateEmotionModal';
import { Button } from "@/components/ui/button";
import { RefreshCw, UserPlus, Edit } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
      <div className="mb-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-1">Your Friends</h1>
          <p className="text-muted-foreground">See how your friends are feeling today</p>
        </div>
        
        <div className="w-full pb-6">
          <Carousel className="w-full">
            <CarouselContent>
              {friends.map(friend => (
                <CarouselItem key={friend.id} className="basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div 
                    onClick={() => handleFriendChange(friend.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all cursor-pointer h-full
                      hover:bg-accent/50 ${
                      activePeriod === friend.id ? 'bg-accent border-primary/30' : 'bg-background'
                    }`}
                  >
                    <div className="relative">
                      <Avatar className="h-14 w-14 border">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{getInitials(friend.name)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 text-xl">
                        {getEmotionEmoji(friend.currentEmotion)}
                      </div>
                    </div>
                    <div className="font-medium text-sm leading-tight text-center">{friend.name}</div>
                  </div>
                </CarouselItem>
              ))}
              
              <CarouselItem className="basis-1/4 md:basis-1/5 lg:basis-1/6">
                <div 
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-all 
                    cursor-pointer h-full border-dashed hover:bg-accent/30"
                  onClick={handleAddFriend}
                >
                  <UserPlus className="h-8 w-8 text-muted-foreground" />
                  <div className="font-medium text-xs text-muted-foreground">Add friend</div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
      
      {currentFriend && (
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-4xl">
                  {getEmotionEmoji(currentFriend.currentEmotion)}
                </div>
                <div>
                  <h2 className="text-xl font-medium">{currentFriend.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {currentFriend.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsEmotionModalOpen(true)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Update emotion
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRefresh}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <LocationTimeline 
              locations={locations} 
              isLoading={isLocationLoading}
              onUpdateEmotion={() => setIsEmotionModalOpen(true)}
            />
          </div>
          
          <div className="flex-1">
            <SentimentAnalysis 
              data={sentimentData} 
              isLoading={isSentimentLoading} 
              friend={currentFriend}
            />
          </div>
        </div>
      )}
      
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
