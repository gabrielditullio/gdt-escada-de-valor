import { useState, useEffect } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import Subtitle from "@/components/slides/Subtitle";
import FadeIn from "@/components/slides/FadeIn";

const premises = [
  { label: "Investimento em anúncios", value: "R$3.000/mês (R$100/dia)" },
  { label: "Custo por lead", value: "R$6" },
  { label: "Leads por mês", value: "500" },
  { label: "Compradores frontend (5%)", value: "25/mês" },
];

const bars = [
  { name: "Produto de Entrada + Bumps", value: "R$2.250", pct: 10, color: "#27AE60" },
  { name: "Curso Barbearia de Elite", value: "R$7.500-12.000", pct: 45, color: "#3498DB" },
  { name: "Mentoria", value: "R$12.000-24.000", pct: 75, color: "#D4A853" },
  { name: "Comunidade (~150 membros)", value: "R$14.550", pct: 60, color: "#C9952E" },
];

const Slide20 = ({ isActive }: { isActive?: boolean }) => {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    if (!isActive) { setAnimateBars(false); return; }
    const t = setTimeout(() => setAnimateBars(true), 1000);
    return () => clearTimeout(t);
  }, [isActive]);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        <FadeIn delay={100}><SlideLabel>Os números</SlideLabel></FadeIn>
        <FadeIn delay={100}><SlideTitle className="mt-3">Cenário Conservador</SlideTitle></FadeIn>
        <FadeIn delay={200}><Subtitle className="mt-2">Premissas realistas, não promessas</Subtitle></FadeIn>

        {/* Premises */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-2 gap-3 mt-6 max-w-[500px]">
            {premises.map((p, i) => (
              <div key={i} className="bg-slide-dark-card rounded-lg p-4 border border-slide-gold-border/20">
                <p className="text-slide-gray font-body text-[10px] uppercase tracking-wider">{p.label}</p>
                <p className="text-slide-white font-body font-bold text-sm mt-1">{p.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bars */}
        <FadeIn delay={500}>
          <h3 className="text-slide-white font-body font-bold text-sm mt-8 mb-4">Projeção Mensal no Mês 12</h3>
          <div className="flex flex-col gap-4 max-w-[550px]">
            {bars.map((b, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs font-body mb-1">
                  <span className="text-slide-gray">{b.name}</span>
                  <span
                    className="font-bold transition-opacity duration-500"
                    style={{ color: b.color, opacity: animateBars ? 1 : 0, transitionDelay: `${i * 200 + 300}ms` }}
                  >
                    {b.value}
                  </span>
                </div>
                <div className="h-5 bg-slide-dark-card rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: animateBars ? `${b.pct}%` : "0%",
                      backgroundColor: b.color,
                      transitionDelay: `${i * 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Totals */}
        <FadeIn delay={800}>
          <div className="border-t-2 border-slide-gold mt-6 pt-4 max-w-[550px]">
            <div className="flex justify-between items-center">
              <span className="text-slide-gray font-body text-sm">TOTAL MENSAL:</span>
              <span className="text-slide-gold font-display text-2xl md:text-3xl">R$36.000 — R$53.000</span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-slide-gray font-body text-sm">TOTAL ANUAL:</span>
              <span
                className="text-slide-white font-display text-3xl md:text-4xl"
                style={{ textShadow: "0 0 30px rgba(212,168,83,0.3)" }}
              >
                R$350.000 — R$550.000
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={1000}>
          <p className="text-slide-gray font-body text-xs italic mt-6 max-w-[550px]">
            Esses números são conservadores. Não é cenário de sonho — é o que acontece quando cada peça da escada funciona.
          </p>
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide20;
