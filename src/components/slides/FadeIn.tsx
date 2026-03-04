import React from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({ delay = 0, children, className, isActive = true }) => (
  <div
    className={cn(
      isActive ? "opacity-0 animate-slide-fade-in" : "opacity-0",
      className
    )}
    style={isActive ? { animationDelay: `${delay}ms`, animationFillMode: "forwards" } : undefined}
  >
    {children}
  </div>
);

export default FadeIn;
