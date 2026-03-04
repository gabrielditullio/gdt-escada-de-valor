import React from "react";
import { cn } from "@/lib/utils";

interface SlideWrapperProps {
  theme?: "dark" | "light";
  children: React.ReactNode;
  className?: string;
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({ theme = "dark", children, className }) => {
  return (
    <div
      className={cn(
        "slide-wrapper min-h-screen w-full overflow-y-auto overflow-x-hidden",
        "px-5 py-12 md:px-10 lg:px-16",
        "flex flex-col justify-center",
        theme === "dark" ? "bg-slide-dark text-slide-white" : "bg-slide-light text-slide-dark",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SlideWrapper;
