import React from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import FadeIn from "@/components/slides/FadeIn";

interface Slide00Props {
  isActive?: boolean;
  onNext?: () => void;
}

const Slide00: React.FC<Slide00Props> = ({ isActive, onNext }) => (
  <SlideWrapper
    theme="dark"
    className="relative !h-screen !min-h-screen !overflow-hidden !justify-center !py-0 bg-slide-black"
  >
    <div
      className="absolute top-0 left-0 w-full h-1"
      style={{ background: "linear-gradient(90deg, #D4A853, #E8D48B, #D4A853)" }}
    />

    <div className="relative z-10 w-full h-full flex items-center">
      <div className="max-w-[600px] text-left">
        <FadeIn delay={300} isActive={isActive}>
          <p
            className="font-body text-slide-gold uppercase"
            style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3 }}
          >
            Preparado por Gabriel Di Tullio · DT Coproduções
          </p>
        </FadeIn>

        <FadeIn delay={500} isActive={isActive}>
          <p
            className="font-body mt-5"
            style={{ fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}
          >
            A Arquitetura Completa para Transformar a
          </p>
        </FadeIn>

        <FadeIn delay={700} isActive={isActive}>
          <h1
            className="font-display text-slide-white"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.95, letterSpacing: 2 }}
          >
            MVP Education
          </h1>
        </FadeIn>

        <FadeIn delay={900} isActive={isActive}>
          <p
            className="font-body"
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 500,
            }}
          >
            em uma Máquina de Aquisição e Ascensão de Clientes
          </p>
        </FadeIn>

        <div style={{ height: 32 }} />

        <FadeIn delay={1100} isActive={isActive}>
          <p
            className="font-display text-slide-gold"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: 1 }}
          >
            Guilherme Toledo
          </p>
        </FadeIn>
      </div>
    </div>

    <div className="hidden md:block absolute right-10 lg:right-20 top-1/2 -translate-y-1/2">
      <div className="relative flex items-center justify-center" style={{ width: "clamp(200px, 20vw, 280px)", height: "clamp(200px, 20vw, 280px)" }}>
        <FadeIn delay={1000} isActive={isActive} className="absolute inset-0">
          <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ border: "1px solid rgba(212,168,83,0.2)" }} />
          <div className="absolute rounded-full" style={{ inset: 30, border: "1px solid rgba(212,168,83,0.12)" }} />
          <span className="absolute inset-0 flex items-center justify-center font-display text-slide-gold" style={{ fontSize: 40, opacity: 0.3 }}>
            BE
          </span>
        </FadeIn>
      </div>
    </div>

    <FadeIn delay={2000} isActive={isActive}>
      <button
        type="button"
        onClick={onNext}
        className="absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-[88px] flex flex-col items-center gap-2 group"
      >
        <span
          className="font-body uppercase transition-opacity duration-200"
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,0.4)" }}
        >
          Começar apresentação
        </span>
        <span
          className="animate-bounce-arrow transition-opacity duration-200"
          style={{ width: 12, height: 12, borderRight: "2px solid var(--slide-gold)", borderBottom: "2px solid var(--slide-gold)", opacity: 0.4 }}
        />
      </button>
    </FadeIn>

    <FadeIn delay={1500} isActive={isActive}>
      <footer
        className="absolute bottom-0 left-0 w-full flex justify-between items-center px-5 md:px-10 lg:px-16 py-4"
        style={{ background: "rgba(10,10,10,0.6)", borderTop: "1px solid rgba(212,168,83,0.08)" }}
      >
        <span className="font-body" style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>
          Documento confidencial · Uso interno
        </span>
        <span className="font-body" style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>
          2026
        </span>
      </footer>
    </FadeIn>
  </SlideWrapper>
);

export default Slide00;
