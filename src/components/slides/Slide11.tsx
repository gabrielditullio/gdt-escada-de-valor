import { useState, useEffect } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";
import StairIndicator from "@/components/slides/StairIndicator";
import { Check, ChevronDown } from "lucide-react";

const modules = [
  "Mentalidade de Dono",
  "Números que Importam",
  "Precificação Estratégica",
  "Time de Elite",
  "Marketing Local",
  "Experiência Premium",
  "Escala",
  "Plano de Ação 90 Dias",
];

const stackItems = [
  { name: "Programa completo (8 módulos)", value: "R$ 2.997" },
  { name: "Planilha de Gestão Financeira", value: "R$ 497" },
  { name: "Script de Vendas Premium", value: "R$ 297" },
  { name: "Template de Marketing Local", value: "R$ 397" },
  { name: "Comunidade (6 meses)", value: "R$ 582" },
  { name: "[Bônus] Masterclass Contratação", value: "R$ 497" },
  { name: "[Bônus] Checklist 2ª Unidade", value: "R$ 297" },
];

const deliverables = [
  "Curso gravado (8 módulos)",
  "Materiais de apoio e planilhas",
  "Plataforma de acesso",
  "Webinar de lançamento",
  "Página de vendas completa",
  "Sequência de emails de lançamento",
];

const Slide11 = ({ isActive }: { isActive?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (!isActive) { setVisibleItems(0); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    stackItems.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleItems(i + 1), 1200 + i * 400));
    });
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <FadeIn delay={100}><SlideLabel>Degrau 3</SlideLabel></FadeIn>
            <FadeIn delay={100}><SlideTitle className="mt-3">O Programa Completo</SlideTitle></FadeIn>
          </div>
          <FadeIn delay={100}>
            <StairIndicator activeStep={3} className="mt-2" />
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <span className="inline-block mt-4 px-4 py-1 rounded-full text-sm font-body font-bold text-white" style={{ backgroundColor: "#2C3E8C" }}>
            R$997 a R$1.997
          </span>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left mt-4 max-w-[600px]">
            O curso online completo — "Barbearia de Elite". Todo o método sistematizado em 8 módulos de vídeo, com planilhas, templates, ferramentas, e acesso a um grupo.
          </p>
        </FadeIn>

        {/* Modules grid */}
        <FadeIn delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {modules.map((m, i) => (
              <div key={i} className="bg-slide-dark-card rounded-lg p-4 text-center">
                <span className="text-slide-gold font-display text-2xl">{i + 1}</span>
                <p className="text-slide-white font-body font-bold text-xs mt-1">{m}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Value stack */}
        <FadeIn delay={600}>
          <h3 className="text-slide-white font-body font-bold text-sm mt-8 mb-4">Empilhamento de Valor</h3>
          <div className="max-w-[500px]">
            {stackItems.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-2 border-b border-slide-gold-border/30 transition-all duration-200 hover:border-slide-gold hover:-translate-y-0.5"
                style={{ opacity: i < visibleItems ? 1 : 0, transform: i < visibleItems ? "translateY(0)" : "translateY(8px)" }}
              >
                <span className="text-slide-gray font-body text-sm">{item.name}</span>
                <span className="text-slide-white font-body text-sm font-bold ml-4 whitespace-nowrap">{item.value}</span>
              </div>
            ))}

            {/* Totals */}
            <div className="border-t-2 border-slide-gold mt-3 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-slide-gray font-body text-sm">VALOR TOTAL:</span>
                <span className="text-slide-gray font-body text-lg line-through">R$ 5.564</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-slide-gold font-body text-sm font-bold">PREÇO HOJE:</span>
                <span className="text-slide-gold font-display text-4xl animate-pulse-price">R$ 1.497</span>
              </div>
              <p className="text-slide-gray font-body text-xs text-right mt-1">(ou 12x de R$149)</p>
            </div>
          </div>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={800}>
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

export default Slide11;
