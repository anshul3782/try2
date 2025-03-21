
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Smile, Frown, Angry, MehIcon, Zap, Heart } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDashboard } from '@/context/DashboardContext';
import { toast } from "sonner";

interface UpdateEmotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  friendId: string;
  friendName: string;
}

const formSchema = z.object({
  emotion: z.enum(['happy', 'sad', 'angry', 'surprised', 'scared', 'neutral']),
  intensity: z.number().min(0.1).max(1.0),
  comment: z.string().min(3, { message: "Comment must be at least 3 characters" }).max(200)
});

const UpdateEmotionModal: React.FC<UpdateEmotionModalProps> = ({ 
  isOpen, 
  onClose,
  friendId,
  friendName
}) => {
  const { updateEmotion } = useDashboard();
  const [selectedEmotion, setSelectedEmotion] = useState<'happy' | 'sad' | 'angry' | 'surprised' | 'scared' | 'neutral'>('happy');
  const [intensity, setIntensity] = useState(0.7);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emotion: 'happy',
      intensity: 0.7,
      comment: ""
    },
  });
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const success = await updateEmotion(
        friendId,
        values.emotion,
        values.intensity,
        values.comment
      );
      
      if (success) {
        toast.success(`Updated your emotion`, {
          description: `New emotion: ${values.emotion} - "${values.comment}"`
        });
        onClose();
      } else {
        toast.error("Failed to update emotion");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };
  
  const emotionOptions = [
    { value: 'happy', label: 'Happy', icon: Smile, color: 'bg-green-100 text-green-600 border-green-200' },
    { value: 'sad', label: 'Sad', icon: Frown, color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { value: 'angry', label: 'Angry', icon: Angry, color: 'bg-red-100 text-red-600 border-red-200' },
    { value: 'neutral', label: 'Neutral', icon: MehIcon, color: 'bg-gray-100 text-gray-600 border-gray-200' },
    { value: 'surprised', label: 'Surprised', icon: Zap, color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { value: 'scared', label: 'Anxious', icon: Heart, color: 'bg-orange-100 text-orange-600 border-orange-200' }
  ];
  
  const handleEmotionSelect = (emotion: 'happy' | 'sad' | 'angry' | 'surprised' | 'scared' | 'neutral') => {
    setSelectedEmotion(emotion);
    form.setValue('emotion', emotion);
  };
  
  const handleIntensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIntensity = parseFloat(e.target.value);
    setIntensity(newIntensity);
    form.setValue('intensity', newIntensity);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Your Mood</DialogTitle>
          <DialogDescription>
            How are you feeling right now?
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="emotion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your emotion?</FormLabel>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {emotionOptions.map(emotion => (
                      <div 
                        key={emotion.value}
                        className={`flex flex-col items-center p-3 rounded-md border cursor-pointer transition-colors ${
                          selectedEmotion === emotion.value 
                            ? `${emotion.color} border-2` 
                            : 'bg-background hover:bg-accent/50'
                        }`}
                        onClick={() => handleEmotionSelect(emotion.value as any)}
                      >
                        <emotion.icon className="h-6 w-6 mb-1" />
                        <span className="text-sm">{emotion.label}</span>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="intensity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How intense is this feeling? ({Math.round(intensity * 100)}%)</FormLabel>
                  <FormControl>
                    <input
                      type="range"
                      min="0.1"
                      max="1"
                      step="0.05"
                      value={intensity}
                      onChange={handleIntensityChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's on your mind?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What are you thinking or feeling?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
              <Button type="submit">Update My Mood</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEmotionModal;
