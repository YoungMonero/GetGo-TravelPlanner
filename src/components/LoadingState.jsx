import { Plane } from "lucide-react";
import React from "react";

const LoadingState = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      {/* Animated plane container replaced with static Plane */}
      <div className="mb-8 w-16 h-16 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-lg">
        <Plane className="w-8 h-8 text-accent-foreground" />
      </div>
      
      <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
        Planning Your Adventure
      </h2>
      
      <p className="text-muted-foreground">
        Gathering destination information...
      </p>
      
      {/* Dots loader (static, no animation) */}
      <div className="flex gap-2 mt-8">
        <div className="w-3 h-3 rounded-full bg-ocean" />
        <div className="w-3 h-3 rounded-full bg-ocean" />
        <div className="w-3 h-3 rounded-full bg-ocean" />
      </div>
    </div>
  );
};

export default LoadingState;
