import { useState } from "react";
import { toast } from "sonner";
import HeroSection from "../components/HeroSection";
import LoadingState from "../components/LoadingState";
import DestinationHeader from "../components/DestinationHeader";
import WeatherCard from "../components/WeatherCard";
import CurrencyCard from "../components/CurrencyCard";
import LanguageCard from "../components/LanguageCard";
import { fetchTravelData } from "../services/travelService";
import PointsOfInterest from "../components/PointsOfInterest";
import ToursSection from "../components/ToursSection";

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
    <>
            {!travelData ? (
        <div>
          <HeroSection onSearch={handleSearch} />
        </div>
      ) : (
        <div className="min-h-screen bg-background">
          <DestinationHeader
            destination={travelData.destination.name}
            country={travelData.country.name}
            flag={travelData.country.flag}
            onBack={handleBack}
          />
          
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Weather & Info */}
              <div className="lg:col-span-1 space-y-6">
                <WeatherCard
                  weather={travelData.weather}
                  destination={travelData.destination.name}
                />
                <CurrencyCard currency={travelData.country.currency} />
                <LanguageCard
                  languages={travelData.country.languages}
                  country={travelData.country.name}
                />
               
              </div>
              {/* Right Column - POIs & Tours */}
              <div className="lg:col-span-2 space-y-6">
                <PointsOfInterest places={travelData.pointsOfInterest} />
                <ToursSection tours={travelData.tours} />
              </div>
            </div>
          </main>
          
          {/* Footer */}
          <footer className="border-t border-border mt-12 py-8">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p className="font-display text-lg mb-2">
                GetGo Travel Companion
              </p>
              <p className="text-sm">
                Your adventure awaits. Explore with confidence.
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

export default Index
