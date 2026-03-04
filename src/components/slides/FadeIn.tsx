import React from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ delay = 0, children, className }) => (
  <div
    className={cn("opacity-0 animate-slide-fade-in", className)}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    {children}
  </div>
);

export default FadeIn;
