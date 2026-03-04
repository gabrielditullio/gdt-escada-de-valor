import { useState, useEffect } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";
import StairIndicator from "@/components/slides/StairIndicator";
import { Check, ChevronDown, RefreshCw } from "lucide-react";

const scenarios = [
  { members: 100, value: 9700 },
  { members: 300, value: 29100 },
  { members: 500, value: 48500 },
];
const maxValue = 48500;

const deliverables = [
  "Grupo configurado (plataforma)",
  "Calendário de conteúdo mensal",
  "Página de vendas da comunidade",
  "Automação de onboarding",
  "Cobrança recorrente configurada",
];

const Slide14 = () => {
  const [open, setOpen] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimateBars(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <FadeIn delay={100}><SlideLabel>Degrau 6</SlideLabel></FadeIn>
            <FadeIn delay={100}><SlideTitle className="mt-3">A Comunidade Mensal</SlideTitle></FadeIn>
          </div>
          <FadeIn delay={100}>
            <StairIndicator activeStep={6} className="mt-2" />
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="flex items-center gap-2 mt-4">
            <RefreshCw size={14} className="text-slide-gold" />
            <span className="inline-block px-4 py-1 rounded-full text-sm font-body font-bold bg-slide-gold text-slide-black">
              R$97/mês
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left mt-4 max-w-[600px]">
            Grupo fechado onde donos de barbearia pagam R$97/mês para conteúdo exclusivo, lives mensais, templates, e rede de contatos.
          </p>
        </FadeIn>

        {/* Recurring math */}
        <FadeIn delay={400}>
          <h3 className="text-slide-white font-body font-bold text-sm mt-8 mb-4">A Matemática da Recorrência</h3>
          <div className="max-w-[550px] flex flex-col gap-4">
            {scenarios.map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-xs font-body mb-1">
                  <span className="text-slide-gray">{s.members} membros × R$97</span>
                  <span
                    className="text-slide-gold font-bold transition-opacity duration-500"
                    style={{ opacity: animateBars ? 1 : 0, transitionDelay: `${i * 300 + 400}ms` }}
                  >
                    R${s.value.toLocaleString("pt-BR")}/mês
                  </span>
                </div>
                <div className="h-5 bg-slide-dark-card rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: animateBars ? `${(s.value / maxValue) * 100}%` : "0%",
                      transitionDelay: `${i * 300}ms`,
                      background: "linear-gradient(90deg, #D4A853, #C9952E)",
                    }}
                  />
                </div>
              </div>
            ))}
            <p className="text-slide-gray font-body text-xs mt-1 italic">
              Entra TODO MÊS, independente de lançamento, independente de sessão estratégica.
            </p>
          </div>
        </FadeIn>

        {/* Highlight box */}
        <FadeIn delay={600}>
          <div className="mt-6 bg-slide-gold rounded-xl p-5 max-w-[550px]">
            <p className="text-slide-black font-body font-bold text-sm leading-relaxed">
              Toda semana que passa sem uma comunidade rodando, você está deixando dinheiro na mesa.
            </p>
          </div>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={700}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 mt-6 text-slide-gray hover:text-slide-white transition-colors font-body text-sm"
          >
            <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            Entregáveis deste degrau
          </button>
          {open && (
            <div className="mt-3 flex flex-col gap-2 animate-slide-fade-in">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-slide-gold flex-shrink-0" />
                  <span className="text-slide-gray font-body text-sm">{d}</span>
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide14;
