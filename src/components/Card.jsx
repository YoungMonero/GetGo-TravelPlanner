import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-card text-card-foreground shadow-card p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`flex flex-col space-y-1.5 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={`flex items-center pt-0 ${className}`}>{children}</div>;
}
