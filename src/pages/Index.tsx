import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Slide00 from "@/components/slides/Slide00";
import Slide01 from "@/components/slides/Slide01";
import Slide02 from "@/components/slides/Slide02";
import Slide03 from "@/components/slides/Slide03";
import Slide04 from "@/components/slides/Slide04";
import Slide05 from "@/components/slides/Slide05";
import Slide06 from "@/components/slides/Slide06";
import Slide07 from "@/components/slides/Slide07";
import Slide08 from "@/components/slides/Slide08";
import Slide09 from "@/components/slides/Slide09";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import Slide12 from "@/components/slides/Slide12";
import Slide13 from "@/components/slides/Slide13";
import Slide14 from "@/components/slides/Slide14";
import Slide15 from "@/components/slides/Slide15";
import Slide16 from "@/components/slides/Slide16";
import Slide17 from "@/components/slides/Slide17";
import Slide18 from "@/components/slides/Slide18";
import Slide19 from "@/components/slides/Slide19";
import Slide20 from "@/components/slides/Slide20";
import Slide21 from "@/components/slides/Slide21";

const slideComponents = [
  Slide00, Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07,
  Slide08, Slide09, Slide10, Slide11, Slide12, Slide13, Slide14,
  Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21,
];

const Index: React.FC = () => {
  const { current, total, next, prev, goTo, onTouchStart, onTouchEnd } = useSlideNavigation(slideComponents.length);
  const progress = ((current + 1) / total) * 100;
  const slideRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [showNavHint, setShowNavHint] = useState(false);
  const navHintShown = useRef(false);

  // Escape key → first slide
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") goTo(0);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goTo]);

  // Navigation hint: show once on first arrival at slide 1
  useEffect(() => {
    if (current === 1 && !navHintShown.current) {
      navHintShown.current = true;
      const showTimer = setTimeout(() => setShowNavHint(true), 1000);
      const hideTimer = setTimeout(() => setShowNavHint(false), 4000);
      return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
    }
  }, [current]);

  // Scroll indicator: detect if slide content is scrollable
  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    const wrapper = el.querySelector(".slide-wrapper");
    if (wrapper && wrapper.scrollHeight > wrapper.clientHeight + 20) {
      setShowScrollHint(true);
      const handleScroll = () => setShowScrollHint(false);
      wrapper.addEventListener("scroll", handleScroll, { once: true });
      return () => wrapper.removeEventListener("scroll", handleScroll);
    } else {
      setShowScrollHint(false);
    }
  }, [current]);

  const SlideComponent = slideComponents[current];
  const isCover = current === 0;

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
        ref={slideRef}
        className="w-full h-full overflow-y-auto animate-slide-transition"
      >
        {isCover ? (
          <Slide00 isActive={true} onNext={next} />
        ) : (
          <SlideComponent isActive={true} />
        )}
      </div>

      {/* Scroll indicator */}
      {showScrollHint && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-40 animate-slide-fade-in">
          <ChevronDown size={20} className="text-slide-gold/30 animate-float" />
        </div>
      )}

      {/* === LATERAL ARROWS (primary navigation, hidden on cover) === */}
      {!isCover && (
        <>
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="fixed left-4 md:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(212,168,83,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212,168,83,0.15)";
              e.currentTarget.style.borderColor = "var(--slide-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(212,168,83,0.2)";
            }}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={20} className="text-slide-gold" />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={current === total - 1}
            className="fixed right-4 md:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(212,168,83,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212,168,83,0.15)";
              e.currentTarget.style.borderColor = "var(--slide-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(212,168,83,0.2)";
            }}
            aria-label="Próximo slide"
          >
            <ChevronRight size={20} className="text-slide-gold" />
          </button>
        </>
      )}

      {/* Navigation hint — shows once on slide 2 */}
      {showNavHint && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 animate-slide-fade-in">
          <span className="font-body text-[12px] text-slide-white/30">
            Use as setas para navegar
          </span>
        </div>
      )}

      {/* Slide counter */}
      <div className="fixed bottom-6 left-6 text-slide-gray text-sm font-body z-50 select-none">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* Secondary small navigation buttons — hidden on cover */}
      {!isCover && (
        <div className="fixed bottom-6 right-6 flex gap-2 z-50">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slide-gold-border bg-slide-dark-card/80 text-slide-gold disabled:opacity-30 hover:bg-slide-gold/10 transition-colors backdrop-blur-sm"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slide-gold-border bg-slide-dark-card/80 text-slide-gold disabled:opacity-30 hover:bg-slide-gold/10 transition-colors backdrop-blur-sm"
            aria-label="Próximo slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
