import { cn } from "@/lib/utils";

interface SlideTitleProps {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}

const SlideTitle: React.FC<SlideTitleProps> = ({ children, center, className }) => (
  <h1
    className={cn(
      "font-display font-bold leading-tight",
      "text-[clamp(32px,5vw,56px)]",
      center ? "text-center" : "text-left",
      className
    )}
  >
    {children}
  </h1>
);

export default SlideTitle;
