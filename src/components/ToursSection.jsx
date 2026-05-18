import { useState } from "react";
import { Compass, Clock, Star, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import React from "react";

const ToursSection = ({ tours }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleTours = tours.slice(0, visibleCount);

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <span className="p-2 rounded-lg bg-ocean/10">
            <Compass className="w-6 h-6 text-ocean" />
          </span>
          Tours & Activities
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleTours.map((tour) => (
            <Card
              key={tour.id}
              className="group p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex gap-4">
                {/* Image */}
                <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground line-clamp-1 mb-1">
                    {tour.name}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {tour.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {tour.duration}
                      </span>

                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-golden fill-golden" />
                        {tour.rating.toFixed(1)}
                      </span>
                    </div>

                    <span className="text-sm font-bold text-ocean">
                      {tour.currency} {tour.price}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {visibleCount < tours.length && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="gap-2 bg-secondary text-secondary-foreground hover:bg-sand-dark"
            >
              Show More Tours
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ToursSection;
