import SlideWrapper from "@/components/slides/SlideWrapper";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FooterQuote from "@/components/slides/FooterQuote";
import FadeIn from "@/components/slides/FadeIn";

const steps = [
  { label: "Grátis", color: "#7EC8A0" },
  { label: "R$47", color: "#6BBF8A" },
  { label: "R$997", color: "#A4B86B" },
  { label: "R$12k", color: "#C6A84D" },
  { label: "R$25k+", color: "#D4A853" },
  { label: "R$97/mês", color: "#D4A853" },
];

const Slide03 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="light" className="justify-start pt-16 lg:pt-24">
    <div className="w-full max-w-5xl mx-auto">
      <FadeIn delay={100}>
        <SlideLabel>A diferença</SlideLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <SlideTitle className="mt-4">
          O que os Negócios que Mais Crescem Fazem Diferente
        </SlideTitle>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-6 mt-10">
        {/* Card LEFT - Today */}
        <FadeIn delay={300} className="flex-1">
          <div className="bg-slide-white rounded-xl shadow-md border-t-[3px] border-slide-red p-6 h-full">
            <div className="text-3xl mb-3">🧗‍♂️</div>
            <h3 className="font-body font-bold text-slide-dark text-base mb-2">
              Como funciona hoje
            </h3>
            <p className="font-body text-slide-gray-dark text-sm leading-relaxed mb-6">
              Um salto gigante. De desconhecido para R$12.000. Sem degraus intermediários.
            </p>
            {/* Tall red bar visual */}
            <div className="flex items-end gap-3 justify-center h-40">
              <div className="flex flex-col items-center">
                <div className="w-12 bg-slide-red rounded-t-md" style={{ height: "140px" }} />
                <span className="text-[10px] font-body text-slide-gray-dark mt-1">R$12k</span>
              </div>
              <div className="text-2xl mb-1">😰</div>
            </div>
          </div>
        </FadeIn>

        {/* Card RIGHT - Staircase */}
        <FadeIn delay={600} className="flex-1">
          <div className="bg-slide-white rounded-xl shadow-md border-t-[3px] border-slide-gold p-6 h-full">
            <div className="text-3xl mb-3">📶</div>
            <h3 className="font-body font-bold text-slide-dark text-base mb-2">
              Como deveria funcionar
            </h3>
            <p className="font-body text-slide-gray-dark text-sm leading-relaxed mb-6">
              Uma escada com degraus. Cada um entrega valor. Cada um prepara para o próximo. No topo: a oferta premium.
            </p>
            {/* Staircase visual */}
            <div className="flex items-end gap-1 justify-center h-40">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="rounded-t-sm transition-all"
                    style={{
                      width: `${28 + i * 6}px`,
                      height: `${30 + i * 20}px`,
                      backgroundColor: step.color,
                    }}
                  />
                  <span className="text-[9px] font-body text-slide-gray-dark mt-1 whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={900}>
        <FooterQuote className="mt-10 text-slide-gray-dark">
          "O que eu vou te mostrar agora é essa escada montada especificamente para o seu negócio."
        </FooterQuote>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide03;
