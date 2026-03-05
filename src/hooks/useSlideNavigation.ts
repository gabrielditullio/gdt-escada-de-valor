import { useState, useEffect, useCallback, useRef } from "react";

export function useSlideNavigation(totalSlides: number) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return;
    setDirection(index > current ? "next" : "prev");
    setCurrent(index);
  }, [current, totalSlides]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const touchStartY = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    // Only navigate if horizontal swipe is dominant (not vertical scroll)
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      diffX > 0 ? next() : prev();
    }
  }, [next, prev]);

  return { current, total: totalSlides, next, prev, goTo, direction, onTouchStart, onTouchEnd };
}
