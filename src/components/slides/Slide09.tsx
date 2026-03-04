import { useState } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FooterQuote from "@/components/slides/FooterQuote";
import FadeIn from "@/components/slides/FadeIn";
import StairIndicator from "@/components/slides/StairIndicator";
import { Check, ChevronDown } from "lucide-react";

const formats = [
  { icon: "📊", name: "Quiz Diagnóstico", desc: "10 perguntas → score da barbearia", conv: "Conversão: 35-50%", rec: true },
  { icon: "🎬", name: "Aula Gratuita em Vídeo", desc: "15-20 min, 3 insights práticos", conv: "Conversão: 25-35%", rec: false },
  { icon: "📄", name: "Checklist em PDF", desc: "21 pontos, aplicável no mesmo dia", conv: "Conversão: 20-30%", rec: false },
];

const deliverables = [
  "Landing page com promessa e formulário",
  "Material gratuito (quiz, vídeo ou PDF)",
  "Sequência de 5 emails automáticos pós-cadastro",
];

const Slide09 = () => {
  const [open, setOpen] = useState(false);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <FadeIn delay={100}><SlideLabel>Degrau 1</SlideLabel></FadeIn>
            <FadeIn delay={100}><SlideTitle className="mt-3">A Isca</SlideTitle></FadeIn>
          </div>
          <FadeIn delay={100}>
            <StairIndicator activeStep={1} className="mt-2" />
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <span className="inline-block mt-4 px-4 py-1 rounded-full text-sm font-body font-bold" style={{ backgroundColor: "#27AE60", color: "#fff" }}>
            Grátis
          </span>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left mt-4 max-w-[600px]">
            Um conteúdo gratuito tão bom que o dono de barbearia pensa "se o grátis é assim, imagina o pago." Em troca, ele deixa o email e o WhatsApp.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="bg-slide-dark-card border-l-2 border-slide-gold p-5 rounded-r-lg mt-5 max-w-[600px]">
            <p className="text-slide-white text-sm leading-relaxed font-body italic">
              Hoje, cada pessoa que não fecha a mentoria desaparece para sempre. Com a isca, essas pessoas entram na sua lista. Você pode falar com elas amanhã, semana que vem, mês que vem.
            </p>
          </div>
        </FadeIn>

        {/* 3 Format Options */}
        <FadeIn delay={500}>
          <h3 className="text-slide-white font-body font-bold text-sm mt-8 mb-4">3 Opções de Formato</h3>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
            {formats.map((f, i) => (
              <div key={i} className="min-w-[220px] bg-slide-dark-card border border-slide-gold-border rounded-xl p-5 flex-shrink-0 relative">
                {f.rec && (
                  <span className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-[10px] font-body font-bold bg-slide-gold text-slide-black">
                    Recomendada
                  </span>
                )}
                <span className="text-2xl">{f.icon}</span>
                <h4 className="text-slide-white font-body font-bold text-sm mt-2">{f.name}</h4>
                <p className="text-slide-gray font-body text-xs mt-1">{f.desc}</p>
                <p className="text-slide-gold font-body text-xs font-bold mt-2">{f.conv}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={600}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 mt-6 text-slide-gray hover:text-slide-white transition-colors font-body text-sm"
          >
            <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            O que será construído neste degrau
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

        <FadeIn delay={700}>
          <FooterQuote className="mt-6">
            Hoje você pesca com arpão — um por um, na força bruta. Com a isca, você joga a rede.
          </FooterQuote>
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide09;
