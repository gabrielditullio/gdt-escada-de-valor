import { cn } from "@/lib/utils";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => (
  <p
    className={cn(
      "text-slide-gray text-base md:text-lg max-w-[600px] leading-relaxed text-left font-body",
      className
    )}
  >
    {children}
  </p>
);

export default Subtitle;
