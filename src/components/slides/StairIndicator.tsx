import { cn } from "@/lib/utils";

const stepsData = [
  { color: "#27AE60", label: "1" },
  { color: "#3498DB", label: "2" },
  { color: "#2C3E8C", label: "3" },
  { color: "#D4A853", label: "4" },
  { color: "#0A0A0A", label: "5", border: true },
  { color: "#D4A853", label: "6" },
];

interface StairIndicatorProps {
  activeStep: number; // 1-indexed
  className?: string;
}

const StairIndicator = ({ activeStep, className }: StairIndicatorProps) => (
  <div className={cn("flex items-end gap-[3px]", className)}>
    {stepsData.map((step, i) => (
      <div
        key={i}
        className="rounded-sm"
        style={{
          width: 8,
          height: 10 + i * 8,
          backgroundColor: i + 1 === activeStep ? step.color : "#2A2A3E",
          border: step.border && i + 1 === activeStep ? "1px solid #D4A853" : "none",
          opacity: i + 1 === activeStep ? 1 : 0.4,
        }}
      />
    ))}
  </div>
);

export default StairIndicator;
