import { cn } from "@/lib/utils";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

const SlideLabel: React.FC<LabelProps> = ({ children, className }) => (
  <span
    className={cn(
      "text-slide-gold uppercase tracking-[3px] text-xs font-bold font-body",
      className
    )}
  >
    {children}
  </span>
);

export default SlideLabel;
