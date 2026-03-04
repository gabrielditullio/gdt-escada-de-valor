import React from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import Subtitle from "@/components/slides/Subtitle";
import FooterQuote from "@/components/slides/FooterQuote";
import FadeIn from "@/components/slides/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  // Slide 1 - Dark
  () => (
    <SlideWrapper theme="dark">
      <GoldBarTop />
      <div className="max-w-[600px]">
        <FadeIn delay={0}>
          <SlideLabel>Introdução</SlideLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <SlideTitle className="mt-4">Slide 1</SlideTitle>
        </FadeIn>
        <FadeIn delay={200}>
          <Subtitle className="mt-4">
            Este é um slide com tema escuro. Conteúdo de exemplo para demonstrar o layout.
          </Subtitle>
        </FadeIn>
        <FadeIn delay={400}>
          <FooterQuote className="mt-8">
            "Uma citação de exemplo para o rodapé do slide."
          </FooterQuote>
        </FadeIn>
      </div>
    </SlideWrapper>
  ),
  // Slide 2 - Light
  () => (
    <SlideWrapper theme="light">
      <GoldBarTop />
      <div className="max-w-[600px]">
        <FadeIn delay={0}>
          <SlideLabel>Conceitos</SlideLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <SlideTitle className="mt-4">Slide 2</SlideTitle>
        </FadeIn>
        <FadeIn delay={200}>
          <Subtitle className="mt-4">
            Este é um slide com tema claro. Demonstra a alternância de temas entre slides.
          </Subtitle>
        </FadeIn>
      </div>
    </SlideWrapper>
  ),
  // Slide 3 - Dark scrollable
  () => (
    <SlideWrapper theme="dark" className="justify-start pt-16">
      <GoldBarTop />
      <div className="max-w-[600px]">
        <FadeIn delay={0}>
          <SlideLabel>Conteúdo Extenso</SlideLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <SlideTitle className="mt-4">Slide 3</SlideTitle>
        </FadeIn>
        <FadeIn delay={200}>
          <Subtitle className="mt-4">
            Este slide possui conteúdo longo para demonstrar o scroll interno.
          </Subtitle>
        </FadeIn>
        {Array.from({ length: 8 }).map((_, i) => (
          <FadeIn key={i} delay={300 + i * 80}>
            <p className="text-slide-gray text-sm leading-relaxed mt-4 font-body max-w-[600px]">
              Parágrafo {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </p>
          </FadeIn>
        ))}
      </div>
    </SlideWrapper>
  ),
];

const Index = () => {
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
