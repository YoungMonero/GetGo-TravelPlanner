import { Languages, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import React from "react";

const LanguageCard = ({ languages, country }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <span className="p-2 rounded-lg bg-coral/10">
            <Languages className="w-5 h-5 text-coral" />
          </span>
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Primary Language */}
          <div className="p-4 bg-gradient-to-r from-coral/10 to-transparent rounded-xl border border-coral/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-coral" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Primary Language
                </p>
                <p className="text-xl font-display font-semibold">
                  {languages.primary}
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Languages */}
          {languages.secondary && languages.secondary.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Also spoken in {country}:
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.secondary.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageCard;
