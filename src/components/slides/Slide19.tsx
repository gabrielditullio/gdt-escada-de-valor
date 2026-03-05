import { useState, useEffect } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import Subtitle from "@/components/slides/Subtitle";
import FadeIn from "@/components/slides/FadeIn";
import { Lock, Unlock } from "lucide-react";

const phases = [
  {
    num: 1,
    name: "A Fundação",
    weeks: "Semanas 1-4",
    color: "#27AE60",
    items: ["Nomear método", "Criar lead magnet", "Landing page", "5 emails automáticos", "Ferramenta de email"],
  },
  {
    num: 2,
    name: "Produto de Entrada",
    weeks: "Semanas 4-8",
    color: "#3498DB",
    items: ["Ebook/mini-curso", "Funil de vendas", "Anúncios pagos", "Conteúdo orgânico"],
  },
  {
    num: 3,
    name: "Programa Completo",
    weeks: "Semanas 8-16",
    color: "#2C3E8C",
    items: ["8 módulos do curso", "Webinar de lançamento", "Vender para base existente"],
  },
  {
    num: 4,
    name: "Mentoria Otimizada",
    weeks: "Semanas 12-20",
    color: "#D4A853",
    items: ["Funil de aplicação", "Vender para qualificados", "Documentar resultados"],
  },
  {
    num: 5,
    name: "Recorrência e Escala",
    weeks: "Mês 5+",
    color: "#C9952E",
    items: ["Comunidade mensal", "Escalar tráfego", "Emails diários"],
  },
];

const Slide19 = ({ isActive }: { isActive?: boolean }) => {
  const [unlocked, setUnlocked] = useState(0);

  useEffect(() => {
    if (!isActive) { setUnlocked(0); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    phases.forEach((_, i) => {
      timers.push(setTimeout(() => setUnlocked(i + 1), 600 + i * 400));
    });
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <SlideWrapper theme="light" className="justify-start pt-14 lg:pt-16">
      <div className="w-full max-w-5xl mx-auto">
        <FadeIn delay={100}><SlideLabel>O plano</SlideLabel></FadeIn>
        <FadeIn delay={100}><SlideTitle className="mt-3">Roadmap de Implementação</SlideTitle></FadeIn>
        <FadeIn delay={200}><Subtitle className="mt-2">Cada fase desbloqueia a seguinte</Subtitle></FadeIn>

        <FadeIn delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
            {phases.map((p, i) => {
              const isUnlocked = i < unlocked;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-4 transition-all duration-500 relative"
                  style={{
                    borderTop: `4px solid ${isUnlocked ? p.color : "#D1D5DB"}`,
                    opacity: isUnlocked ? 1 : 0.4,
                    transform: isUnlocked ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-2xl md:text-3xl" style={{ color: isUnlocked ? p.color : "#9CA3AF" }}>
                      {p.num}
                    </span>
                    {isUnlocked ? (
                      <Unlock size={14} style={{ color: p.color }} />
                    ) : (
                      <Lock size={14} className="text-gray-400" />
                    )}
                  </div>

                  <h4 className="font-body font-bold text-xs md:text-sm text-slide-dark leading-tight">{p.name}</h4>
                  <p className="font-body text-[9px] md:text-[10px] text-slide-gray-dark mt-0.5 uppercase tracking-wider">{p.weeks}</p>

                  <ul className="mt-2 flex flex-col gap-1">
                    {p.items.map((item, j) => (
                      <li key={j} className="font-body text-[11px] md:text-xs text-slide-gray-dark flex items-start gap-1">
                        <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <span
                    className="inline-block mt-2 px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-body font-bold text-white"
                    style={{ backgroundColor: isUnlocked ? p.color : "#9CA3AF" }}
                  >
                    {p.items.length} entregáveis
                  </span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide19;
