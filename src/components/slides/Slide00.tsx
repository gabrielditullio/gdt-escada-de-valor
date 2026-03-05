import React from "react";
import FadeIn from "@/components/slides/FadeIn";
import { Scissors } from "lucide-react";

interface Slide00Props {
  isActive?: boolean;
  onNext?: () => void;
}

const Slide00: React.FC<Slide00Props> = ({ isActive, onNext }) => (
  <div className="slide-wrapper h-screen w-full overflow-hidden bg-slide-black text-slide-white relative px-5 md:px-10 lg:px-16 flex flex-col justify-center">
    {/* Gold bar top */}
    <div
      className="absolute top-0 left-0 w-full h-1 z-10"
      style={{ background: "linear-gradient(90deg, #D4A853, #E8D48B, #D4A853)" }}
    />

    {/* Main content */}
    <div className="relative z-10 max-w-[600px] text-left">
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

    {/* Decorative circles with barber seal */}
    <div className="hidden md:flex absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 items-center justify-center" style={{ width: "clamp(200px, 20vw, 280px)", height: "clamp(200px, 20vw, 280px)" }}>
      <FadeIn delay={1000} isActive={isActive} className="absolute inset-0">
        <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ border: "1px solid rgba(212,168,83,0.2)" }} />
        <div className="absolute rounded-full" style={{ inset: 30, border: "1px solid rgba(212,168,83,0.12)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
          <Scissors className="text-slide-gold" style={{ opacity: 0.5 }} size={48} />
          <span
            className="font-body uppercase text-slide-gold text-center"
            style={{ opacity: 0.3, fontSize: 10, letterSpacing: 3 }}
          >
            BARBEARIA DE ELITE
          </span>
        </div>
      </FadeIn>
    </div>

    {/* "Começar" indicator */}
    <FadeIn delay={2000} isActive={isActive}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext?.();
        }}
        className="absolute left-1/2 -translate-x-1/2 bottom-20 flex flex-col items-center gap-2 group cursor-pointer bg-transparent border-none outline-none z-20"
      >
        <span
          className="font-body uppercase group-hover:!opacity-100 transition-opacity duration-200"
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,0.4)" }}
        >
          Começar apresentação
        </span>
        <span
          className="animate-bounce-arrow group-hover:!opacity-100 transition-opacity duration-200 block"
          style={{
            width: 12,
            height: 12,
            borderRight: "2px solid var(--slide-gold)",
            borderBottom: "2px solid var(--slide-gold)",
            opacity: 0.4,
          }}
        />
      </button>
    </FadeIn>

    {/* Footer */}
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
  </div>
);

export default Slide00;
