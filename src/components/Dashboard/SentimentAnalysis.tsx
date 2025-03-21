
import React from 'react';
import DataCard from '@/components/UI/DataCard';
import LineChart from '@/components/UI/LineChart';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfoIcon, ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, Smile, Meh, Frown } from "lucide-react";
import { cn } from '@/lib/utils';

interface SentimentData {
  period: string;
  positive: number;
  neutral: number;
  negative: number;
  overall: number; // -1 to 1
}

interface SentimentAnalysisProps {
  data: SentimentData[];
  isLoading?: boolean;
  className?: string;
}

const SentimentAnalysis = ({ data = [], isLoading = false, className }: SentimentAnalysisProps) => {
  // Calculate overall sentiment score from the latest data point
  const latestSentiment = data.length > 0 ? data[data.length - 1] : null;
  
  // Calculate sentiment trend
  const previousSentiment = data.length > 1 ? data[data.length - 2] : null;
  const sentimentChange = latestSentiment && previousSentiment 
    ? latestSentiment.overall - previousSentiment.overall
    : 0;
  
  const getSentimentLabel = (score: number) => {
    if (score >= 0.2) return "Very Positive";
    if (score >= 0.05) return "Positive";
    if (score > -0.05) return "Neutral";
    if (score > -0.2) return "Negative";
    return "Very Negative";
  };
  
  const getSentimentIcon = (score: number) => {
    if (score >= 0.05) return <Smile className="h-5 w-5 text-sentiment-positive" />;
    if (score > -0.05) return <Meh className="h-5 w-5 text-sentiment-neutral" />;
    return <Frown className="h-5 w-5 text-sentiment-negative" />;
  };
  
  return (
    <DataCard 
      title="Sentiment Analysis" 
      description="Emotional trends from your digital interactions"
      className={cn("", className)}
      isLoading={isLoading}
      animation="fade"
      delay={100}
    >
      <div className="space-y-6">
        {latestSentiment && (
          <div className="flex items-center justify-between pb-2 border-b">
            <div className="flex items-center gap-2">
              {getSentimentIcon(latestSentiment.overall)}
              <div>
                <div className="text-lg font-medium">
                  {getSentimentLabel(latestSentiment.overall)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Overall sentiment
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">
                  {(latestSentiment.overall * 100).toFixed(1)}%
                </span>
                
                {sentimentChange !== 0 && (
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs flex items-center gap-0.5",
                      sentimentChange > 0 ? "text-green-500" : "text-red-500"
                    )}
                  >
                    {sentimentChange > 0 ? (
                      <ArrowUpIcon className="h-3 w-3" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3" />
                    )}
                    {Math.abs(sentimentChange * 100).toFixed(1)}%
                  </Badge>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                {previousSentiment ? `vs ${previousSentiment.period}` : 'Current score'}
              </div>
            </div>
          </div>
        )}
        
        <div className="h-64">
          <LineChart
            data={data}
            xAxisDataKey="period"
            lines={[
              { dataKey: 'positive', name: 'Positive', color: 'hsl(var(--sentiment-positive))' },
              { dataKey: 'neutral', name: 'Neutral', color: 'hsl(var(--sentiment-neutral))' },
              { dataKey: 'negative', name: 'Negative', color: 'hsl(var(--sentiment-negative))' }
            ]}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex flex-col items-center justify-center p-3 rounded-md bg-sentiment-positive/10 border border-sentiment-positive/20">
            <Smile className="h-5 w-5 mb-1 text-sentiment-positive" />
            <div className="text-sm font-medium">Positive</div>
            <div className="text-xl font-semibold">
              {latestSentiment ? `${(latestSentiment.positive * 100).toFixed(0)}%` : '--'}
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-3 rounded-md bg-sentiment-neutral/10 border border-sentiment-neutral/20">
            <Meh className="h-5 w-5 mb-1 text-sentiment-neutral" />
            <div className="text-sm font-medium">Neutral</div>
            <div className="text-xl font-semibold">
              {latestSentiment ? `${(latestSentiment.neutral * 100).toFixed(0)}%` : '--'}
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-3 rounded-md bg-sentiment-negative/10 border border-sentiment-negative/20">
            <Frown className="h-5 w-5 mb-1 text-sentiment-negative" />
            <div className="text-sm font-medium">Negative</div>
            <div className="text-xl font-semibold">
              {latestSentiment ? `${(latestSentiment.negative * 100).toFixed(0)}%` : '--'}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <Button variant="outline" size="sm" className="text-xs">
            <InfoIcon className="h-3.5 w-3.5 mr-1.5" />
            View detailed analysis
          </Button>
          
          <Button variant="ghost" size="sm" className="text-xs">
            <TrendingUpIcon className="h-3.5 w-3.5 mr-1.5" />
            View trends
          </Button>
        </div>
      </div>
    </DataCard>
  );
};

export default SentimentAnalysis;
