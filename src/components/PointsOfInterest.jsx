import { useState } from "react";
import { MapPin, Star, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import React from "react";


const PointsOfInterest = ({ places }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const visiblePlaces = places.slice(0, visibleCount);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <span className="p-2 rounded-lg bg-coral/10">
            <MapPin className="w-6 h-6 text-coral" />
          </span>
          Points of Interest
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visiblePlaces.map((place) => (
            <Card
              key={place.id}
              className="group cursor-pointer overflow-hidden rounded-xl transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Category */}
                <span className="absolute top-3 left-3 px-2 py-1 bg-card/90 backdrop-blur-sm rounded-lg text-xs font-medium">
                  {place.category}
                </span>

                {/* Rating */}
                {place.rating && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-golden/90 rounded-lg">
                    <Star className="w-3 h-3 text-foreground fill-foreground" />
                    <span className="text-xs font-bold text-foreground">
                      {place.rating.toFixed(1)}
                    </span>
                  </div>
                )}

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-display font-semibold text-primary-foreground mb-1 line-clamp-1">
                    {place.name}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 line-clamp-2">
                    {place.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {visibleCount < places.length && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="gap-2 bg-secondary text-secondary-foreground hover:bg-sand-dark"
            >
              Load More
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PointsOfInterest;
