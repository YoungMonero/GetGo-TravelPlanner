import React from "react";
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

const getWeatherIcon = (condition, size = "w-12 h-12") => {
  const cond = condition.toLowerCase();
  if (cond.includes("sun") || cond.includes("clear")) return <Sun className={`${size} text-golden`} />;
  if (cond.includes("rain") || cond.includes("drizzle")) return <CloudRain className={`${size} text-ocean`} />;
  if (cond.includes("snow")) return <CloudSnow className={`${size} text-ocean-light`} />;
  if (cond.includes("cloud") || cond.includes("overcast")) return <Cloud className={`${size} text-muted-foreground`} />;
  return <Sun className={`${size} text-golden`} />;
};

const WeatherCard = ({ weather, destination }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <span className="p-2 rounded-lg bg-ocean/10">
            <Cloud className="w-5 h-5 text-ocean" />
          </span>
          Weather in {destination}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Current Weather */}
        <div className="flex items-center justify-between mb-6 p-4 bg-secondary/50 rounded-xl">
          <div className="flex items-center gap-4">
            {getWeatherIcon(weather.current.condition, "w-16 h-16")}
            <div>
              <p className="text-5xl font-display font-bold text-foreground">
                {weather.current.temp}°
              </p>
              <p className="text-muted-foreground capitalize">
                {weather.current.condition}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Droplets className="w-4 h-4 text-ocean" />
              <span>{weather.current.humidity}% humidity</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wind className="w-4 h-4 text-ocean" />
              <span>{weather.current.windSpeed} km/h wind</span>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="grid grid-cols-5 gap-2">
          {weather.forecast.map((day) => (
            <div
              key={day.day}
              className="text-center p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <p className="text-xs font-medium text-muted-foreground mb-2">
                {day.day}
              </p>
              {getWeatherIcon(day.condition, "w-8 h-8 mx-auto")}
              <div className="mt-2">
                <span className="text-sm font-semibold">{day.high}°</span>
                <span className="text-xs text-muted-foreground ml-1">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
