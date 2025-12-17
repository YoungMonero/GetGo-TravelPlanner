import { useState } from "react";
import { toast } from "sonner";
import HeroSection from "@/components/travel/HeroSection";
import LoadingState from "@/components/travel/LoadingState";

import React from 'react'

const Index = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [travelData, setTravelData] = useState(null);

    const handleSearch = async (destination) => {
        setIsLoading(true);
        
        try {
          const data = await fetchTravelData(destination);
          
          if (data) {
            setTravelData(data);
            toast.success(`Welcome to ${data.destination.name}!`, {
              description: "Here's everything you need to know about your destination.",
            });
          } else {
            toast.error("Location not found", {
              description: "Please try a different city, town, or country name.",
            });
          }
        } catch (error) {
          console.error('Search error:', error);
          toast.error("Something went wrong", {
            description: "Please try again later.",
          });
        } finally {
          setIsLoading(false);
        }
      };

      const handleBack = () => {
        setTravelData(null);
      };

      if (isLoading) {
        return <LoadingState />;
      }

  return (
    <div>
      
    </div>
  )
}

export default Index
