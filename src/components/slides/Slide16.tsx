import { useState, useEffect } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";

const timeline = [
  { year: "2017", icon: "✂️", text: "18 anos. Zona Leste de São Paulo. Abre a barbearia do zero.", color: "#D4A853", borderColor: "border-slide-gold" },
  { year: "Ponto baixo", icon: "📉", text: "Quase fecha. Sem grana, sem conexão, sem formação.", color: "#E74C3C", borderColor: "border-slide-red" },
  { year: "Virada", icon: "💡", text: "Descobre que o segredo não era cortar melhor, era GERIR melhor.", color: "#D4A853", borderColor: "border-slide-gold" },
  { year: "Crescimento", icon: "📚", text: "Faz faculdade de administração enquanto opera o negócio.", color: "#3498DB", borderColor: "border-slide-gold-border" },
  { year: "Hoje", icon: "🏆", text: "Top 16 de São Paulo. 4.7 estrelas. MVP Education. Mentoria de R$12k.", color: "#D4A853", isGold: true },
];

const manifesto = [
  "Nós acreditamos que todo barbeiro que teve a coragem de abrir seu próprio negócio merece saber como fazer esse negócio dar certo.",
  "Não com teoria de MBA. Com o sistema que funciona na barbearia real, na rua real, com o cliente real.",
  "Nós somos a geração de barbeiros que não aceita mais trabalhar 14 horas por dia pra ganhar menos que o funcionário de shopping.",
];

const Slide16 = ({ isActive }: { isActive?: boolean }) => {
  const [visibleNodes, setVisibleNodes] = useState(0);

  useEffect(() => {
    if (!isActive) { setVisibleNodes(0); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    timeline.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleNodes(i + 1), 600 + i * 500));
    });
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16 pb-20">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        {/* SEÇÃO A: Timeline */}
        <FadeIn delay={100}><SlideLabel>O personagem</SlideLabel></FadeIn>
        <FadeIn delay={100}><SlideTitle className="mt-3">A História que Vende Sozinha</SlideTitle></FadeIn>

        <FadeIn delay={300}>
          <div className="relative mt-8 ml-6 md:ml-0">
            {/* Vertical line */}
            <div
              className="absolute left-3 md:left-1/2 top-0 w-px bg-slide-gold/40 transition-all duration-1000 ease-out -translate-x-px"
              style={{ height: `${Math.min((visibleNodes / timeline.length) * 100, 100)}%` }}
            />

            <div className="flex flex-col gap-8">
              {timeline.map((node, i) => {
                const visible = i < visibleNodes;
                const isRight = i % 2 === 1;
                return (
                  <div
                    key={i}
                    className="relative transition-all duration-500"
                    style={{ opacity: visible ? 1 : 0.1, transform: visible ? "translateY(0)" : "translateY(12px)" }}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-3 md:left-1/2 w-6 h-6 rounded-full border-2 -translate-x-1/2 z-10 flex items-center justify-center text-xs transition-all duration-300"
                      style={{
                        borderColor: node.color,
                        backgroundColor: node.isGold ? node.color : "var(--slide-dark-card)",
                      }}
                    >
                      <span>{node.icon}</span>
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-10 md:ml-0 md:w-[44%] bg-slide-dark-card rounded-xl p-4 border border-slide-gold-border/20 ${
                        isRight ? "md:ml-[56%]" : "md:mr-[56%]"
                      }`}
                    >
                      <span className="text-slide-gold font-body text-xs font-bold uppercase tracking-wider">{node.year}</span>
                      <p className="text-slide-white font-body text-sm mt-1 leading-relaxed">{node.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="text-slide-gray font-body text-sm italic mt-8 max-w-[600px]">
            Isso não é marketing — isso é verdade. E verdade vende mais que qualquer técnica.
          </p>
        </FadeIn>

        {/* SEÇÃO B: Manifesto */}
        <div className="mt-16 pt-12 border-t border-slide-gold-border/20">
          <div className="text-center max-w-[700px] mx-auto">
            {manifesto.map((phrase, i) => (
              <FadeIn key={i} delay={800 + i * 600}>
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-slide-white leading-snug mb-6">
                  {phrase}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={800 + manifesto.length * 600}>
              <p className="text-slide-gold font-display text-2xl md:text-3xl tracking-wider mt-8">
                Barbearia de Elite
              </p>
            </FadeIn>

            <FadeIn delay={800 + manifesto.length * 600 + 400}>
              <div className="mt-10 bg-slide-dark-card border border-slide-gold rounded-2xl p-8">
                <h4 className="text-slide-gold font-body font-bold text-sm uppercase tracking-wider mb-4">A Linha na Areia</h4>
                <p className="text-slide-white font-body font-bold text-lg md:text-xl leading-relaxed">
                  Barbearia não é hobby. Não é trampo. É EMPRESA. Se você trata como empresa, ela te paga como empresa. Se trata como bico, ela te paga como bico.
                </p>
                <p className="text-slide-gray font-body text-xs mt-4 italic">
                  Essa frase polariza. Os medianos se afastam. Os ambiciosos se aproximam. Isso é intencional.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide16;
