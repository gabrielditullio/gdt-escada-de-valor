import React from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide01 from "@/components/slides/Slide01";
import Slide02 from "@/components/slides/Slide02";
import Slide03 from "@/components/slides/Slide03";
import Slide04 from "@/components/slides/Slide04";
import Slide05 from "@/components/slides/Slide05";
import Slide06 from "@/components/slides/Slide06";
import Slide07 from "@/components/slides/Slide07";

const slides = [
  () => <Slide01 />,
  () => <Slide02 />,
  () => <Slide03 />,
  () => <Slide04 />,
  () => <Slide05 />,
  () => <Slide06 />,
  () => <Slide07 />,
];

const Index: React.FC = () => {
  const { current, total, next, prev, onTouchStart, onTouchEnd } = useSlideNavigation(slides.length);
  const progress = ((current + 1) / total) * 100;

  const SlideComponent = slides[current];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-slide-black"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-slide-gold/20 z-50">
        <div
          className="h-full bg-slide-gold transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide content with transition */}
      <div
        key={current}
        className="w-full h-full animate-slide-transition"
      >
        <SlideComponent />
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-6 left-6 text-slide-gray text-sm font-body z-50 select-none">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-6 right-6 flex gap-2 z-50">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-slide-gold-border bg-slide-dark-card/80 text-slide-gold disabled:opacity-30 hover:bg-slide-gold/10 transition-colors backdrop-blur-sm"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          disabled={current === total - 1}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-slide-gold-border bg-slide-dark-card/80 text-slide-gold disabled:opacity-30 hover:bg-slide-gold/10 transition-colors backdrop-blur-sm"
          aria-label="Próximo slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Index;
