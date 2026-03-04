import { useState, useEffect } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import Subtitle from "@/components/slides/Subtitle";
import FadeIn from "@/components/slides/FadeIn";

const stepsData = [
  { name: "Isca", price: "Grátis", color: "#27AE60", w: "55%" },
  { name: "Entrada", price: "R$47-97", color: "#3498DB", w: "60%" },
  { name: "Curso", price: "R$997-1.997", color: "#2C3E8C", w: "65%" },
  { name: "Mentoria", price: "R$12.000", color: "#D4A853", w: "72%" },
  { name: "Alto Nível", price: "R$25-50k", color: "#0A0A0A", w: "80%", border: true },
];

const Slide08 = ({ isActive }: { isActive?: boolean }) => {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [showCommunity, setShowCommunity] = useState(false);

  useEffect(() => {
    if (!isActive) { setVisibleSteps(0); setShowCommunity(false); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    stepsData.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleSteps(i + 1), 800 + i * 500));
    });
    timers.push(setTimeout(() => setShowCommunity(true), 800 + stepsData.length * 500 + 300));
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        <FadeIn delay={100}>
          <SlideLabel>Método</SlideLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <SlideTitle className="mt-3">A Escada do Seu Negócio</SlideTitle>
        </FadeIn>
        <FadeIn delay={200}>
          <Subtitle className="mt-2">
            O mapa completo de como um dono de barbearia que nunca ouviu falar de você se torna o seu melhor cliente.
          </Subtitle>
        </FadeIn>

        {/* Staircase */}
        <FadeIn delay={400}>
          <div className="relative mt-10 pb-4">
            {/* Y axis */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col items-center justify-between">
              <span className="text-[10px] text-slide-gray font-body tracking-wider rotate-[-90deg] origin-center whitespace-nowrap">
                VALOR ↑
              </span>
            </div>

            {/* Steps container */}
            <div className="ml-8 flex flex-col-reverse gap-2">
              {stepsData.map((step, i) => {
                const visible = i < visibleSteps;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "scale(1)" : "scale(1.02)",
                      marginLeft: `${i * 8}%`,
                    }}
                  >
                    <div
                      className="h-10 md:h-12 rounded-lg flex items-center px-4 transition-all duration-700 overflow-hidden"
                      style={{
                        width: visible ? step.w : "0%",
                        backgroundColor: step.color,
                        border: step.border ? "1px solid #D4A853" : "none",
                      }}
                    >
                      <span className="text-white font-body text-xs md:text-sm font-bold whitespace-nowrap">
                        {step.name}
                      </span>
                      <span className="text-white/70 font-body text-[10px] md:text-xs ml-auto whitespace-nowrap">
                        {step.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* X axis */}
            <div className="ml-8 mt-3">
              <span className="text-[10px] text-slide-gray font-body tracking-wider">PREÇO →</span>
            </div>

            {/* Community bar */}
            <div
              className="ml-8 mt-4 h-10 md:h-11 rounded-lg flex items-center px-4 transition-all duration-700"
              style={{
                opacity: showCommunity ? 1 : 0,
                width: showCommunity ? "92%" : "0%",
                background: "linear-gradient(90deg, #D4A853, #C9952E)",
              }}
            >
              <span className="text-white font-body text-xs md:text-sm font-bold whitespace-nowrap">
                Comunidade
              </span>
              <span className="text-white/70 font-body text-[10px] md:text-xs ml-auto whitespace-nowrap">
                R$97/mês
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide08;
