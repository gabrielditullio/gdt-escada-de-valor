import React from "react";
import FadeIn from "@/components/slides/FadeIn";
import { Scissors } from "lucide-react";

interface Slide00Props {
  isActive?: boolean;
  onNext?: () => void;
}

const Slide00: React.FC<Slide00Props> = ({ isActive, onNext }) => (
  <section className="slide-wrapper relative h-screen min-h-screen w-full overflow-hidden bg-slide-black text-slide-white px-5 md:px-10 lg:px-16">
    <div
      className="absolute inset-x-0 top-0 h-1 z-20"
      style={{ background: "linear-gradient(90deg, var(--slide-gold), #E8D48B, var(--slide-gold))" }}
    />

    <div className="relative z-10 h-full w-full flex items-center">
      <div className="max-w-[600px] pr-0 lg:pr-8">
        <FadeIn delay={300} isActive={isActive}>
          <p className="font-body text-slide-gold uppercase text-[11px] font-bold tracking-[3px]">
            Preparado por Gabriel Di Tullio · DT Coproduções
          </p>
        </FadeIn>

        <FadeIn delay={500} isActive={isActive}>
          <p className="font-body mt-5 text-[clamp(14px,2vw,18px)] font-normal text-slide-white/50">
            A Arquitetura Completa para Transformar a
          </p>
        </FadeIn>

        <FadeIn delay={700} isActive={isActive}>
          <h1 className="font-display leading-[0.95] tracking-[2px] text-slide-white text-[clamp(48px,8vw,96px)]">
            MVP Education
          </h1>
        </FadeIn>

        <FadeIn delay={900} isActive={isActive}>
          <p className="font-body text-[clamp(14px,2vw,18px)] font-normal text-slide-white/50 max-w-[500px]">
            em uma Máquina de Aquisição e Ascensão de Clientes
          </p>
        </FadeIn>

        <div className="h-8" />

        <FadeIn delay={1100} isActive={isActive}>
          <p className="font-display text-slide-gold text-[clamp(24px,3vw,36px)] tracking-[1px]">
            Guilherme Toledo
          </p>
        </FadeIn>
      </div>
    </div>

    <FadeIn delay={1000} isActive={isActive}>
      <div
        className="hidden md:flex absolute top-1/2 right-8 lg:right-16 -translate-y-1/2 items-center justify-center"
        style={{ width: "clamp(200px,20vw,280px)", height: "clamp(200px,20vw,280px)" }}
      >
        <div className="absolute inset-0 rounded-full border border-slide-gold/20 animate-spin-slow" />
        <div className="absolute inset-[30px] rounded-full border border-slide-gold/10" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          <Scissors size={48} className="text-slide-gold opacity-50" />
          <span className="font-body uppercase text-slide-gold/30 text-[10px] tracking-[3px] text-center">
            BARBEARIA DE ELITE
          </span>
        </div>
      </div>
    </FadeIn>

    <FadeIn delay={2000} isActive={isActive}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onNext?.();
        }}
        className="absolute bottom-[76px] md:bottom-[88px] left-1/2 -translate-x-1/2 z-30 flex min-h-12 flex-col items-center justify-center gap-2 px-10 py-5 rounded-[40px] group cursor-pointer"
        aria-label="Começar apresentação"
      >
        <span className="font-body uppercase text-[12px] font-semibold tracking-[2px] text-slide-white/40 group-hover:text-slide-gold group-hover:opacity-100 transition-all duration-200">
          Começar apresentação
        </span>
        <span
          className="block animate-bounce-arrow opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
          style={{ width: 12, height: 12, borderRight: "2px solid var(--slide-gold)", borderBottom: "2px solid var(--slide-gold)" }}
        />
        <span className="pointer-events-none absolute inset-0 rounded-[40px] border border-transparent group-hover:border-slide-gold/30 transition-colors duration-200" />
      </button>
    </FadeIn>

    <FadeIn delay={1500} isActive={isActive}>
      <footer className="pointer-events-none absolute bottom-0 left-0 w-full flex items-center justify-between px-5 md:px-10 lg:px-16 py-4 bg-slide-black/60 border-t border-slide-gold/10 z-20">
        <span className="font-body text-[11px] text-slide-white/25">Documento confidencial · Uso interno</span>
        <span className="font-body text-[11px] text-slide-white/25">2026</span>
      </footer>
    </FadeIn>
  </section>
);

export default Slide00;
