import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "@/components/ui/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  useEffect(() => {
    // 📍 Trigger browser location permission immediately
    const requestLocationPermission = () => {
      if (!navigator.geolocation) {
        console.error('Geolocation is not supported by this browser.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        () => {
          console.log('Location permission granted.');
        },
        (error) => {
          console.warn('Location permission denied or error:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    };

    // 🛰 Track and send user location
    const trackUserLocation = async () => {
      const storedEmail = localStorage.getItem('email');
      if (!storedEmail) {
        console.log('No email stored. Skipping location tracking.');
        return;
      }

      if (!navigator.geolocation) {
        console.error('Geolocation is not supported by this browser.');
        return;
      }

      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          });
        });

        const { latitude, longitude } = position.coords;

        const response = await fetch('https://apigeosentiment.vercel.app/insert_tracker', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email_id: storedEmail,
            lat: latitude,
            lng: longitude,
            radius: 100
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to send location data: ${response.status}`);
        }

        console.log('Location tracked successfully');
      } catch (error) {
        console.error('Error tracking location:', error);
      }
    };

    // 🚀 Start
    requestLocationPermission();   // Trigger browser prompt
    trackUserLocation();           // First location send

    // ⏱️ Periodic tracking every 2 minutes
    const intervalId = setInterval(trackUserLocation, 2 * 60 * 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // 🔒 Route guard
  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const storedEmail = localStorage.getItem('email');
    return storedEmail ? <>{children}</> : <Navigate to="/" replace />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
