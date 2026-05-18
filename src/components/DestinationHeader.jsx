import { ArrowLeft, MapPin, Plane } from "lucide-react";
import React from "react";

const DestinationHeader = ({ destination, country, flag, onBack }) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="hover:bg-secondary hover:text-secondary-foreground mt-6 h-10 w-10 flex items-center justify-center rounded"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="text-4xl">{flag}</span>
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">
                  {destination}
                </h1>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{country}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-sunset text-accent-foreground rounded-xl">
              <Plane className="w-4 h-4" />
              <span className="font-display font-bold">GetGo</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DestinationHeader;
