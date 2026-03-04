import { useEffect, useState } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";

/* Particle component for the bucket animation */
const Particle = ({ delay, leak, color }: { delay: number; leak?: boolean; color: string }) => (
  <div
    className="absolute w-2 h-2 rounded-full"
    style={{
      backgroundColor: color,
      left: `${20 + Math.random() * 60}%`,
      top: leak ? "100%" : "-8px",
      animation: leak
        ? `leakParticle 2s ${delay}s ease-in infinite`
        : `dropParticle 2s ${delay}s ease-in infinite`,
      opacity: 0,
    }}
  />
);

const LeakyBucket = () => {
  return (
    <FadeIn delay={500}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center">
        {/* Bucket */}
        <div className="relative w-48 h-56">
          {/* Particles dropping in */}
          {[0, 0.3, 0.7, 1.1, 1.5].map((d, i) => (
            <Particle key={`drop-${i}`} delay={d} color={i % 2 === 0 ? "#D4A853" : "#5B8DEF"} />
          ))}

          {/* Bucket shape */}
          <div className="absolute top-12 left-4 right-4 bottom-4 bg-slide-dark-card border-2 border-slide-gold-border rounded-b-2xl rounded-t-sm overflow-hidden">
            {/* Holes with red glow */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around pb-0">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(231,76,60,0.6) 0%, transparent 70%)",
                    boxShadow: "0 0 8px rgba(231,76,60,0.4)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Leaking particles */}
          {[0.2, 0.6, 1.0, 1.4, 1.8].map((d, i) => (
            <Particle key={`leak-${i}`} delay={d} leak color={i % 2 === 0 ? "#D4A853" : "#5B8DEF"} />
          ))}
        </div>

        {/* Big zero */}
        <div className="text-center md:text-left">
          <div className="text-slide-gold font-display text-[72px] leading-none">0</div>
          <p className="text-slide-gray text-xs font-body mt-1 max-w-[200px]">
            contatos disponíveis para recontatar
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

const Slide02 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="dark" className="justify-start pt-16 lg:pt-24">
    <GoldBarTop />
    <div className="w-full max-w-5xl mx-auto">
      <FadeIn delay={100}>
        <SlideLabel>O problema real</SlideLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <SlideTitle className="mt-4">O Problema Invisível</SlideTitle>
      </FadeIn>

      <div className="mt-10">
        <LeakyBucket />
      </div>

      <div className="max-w-[600px] mt-10">
        <FadeIn delay={700}>
          <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left">
            O problema não é falta de qualidade. Não é falta de resultado. O problema é estrutural.
          </p>
        </FadeIn>
        <FadeIn delay={700}>
          <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left mt-4">
            Cada pessoa que fala com você e não fecha agora... desaparece para sempre. Você não tem como falar com ela de novo. Não tem uma lista de emails, não tem um caminho onde ela vai aquecendo até estar pronta.
          </p>
        </FadeIn>
        <FadeIn delay={900}>
          <div className="bg-slide-dark-card border-l-2 border-slide-red p-6 rounded-r-lg mt-6">
            <p className="text-slide-white text-sm md:text-[15px] leading-relaxed font-body italic text-left">
              Cada "não agora" vira "nunca mais". E você fica dependendo de sempre encontrar gente nova, do zero, toda semana.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </SlideWrapper>
);

export default Slide02;
