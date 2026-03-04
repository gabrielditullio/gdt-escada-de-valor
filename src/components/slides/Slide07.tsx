import SlideWrapper from "@/components/slides/SlideWrapper";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";
import { ArrowRight } from "lucide-react";

const asks = [
  { emoji: "💰", text: "Faturar mais" },
  { emoji: "👥", text: "Ter equipe boa" },
  { emoji: "🏪", text: "Abrir segunda unidade" },
];

const realWants = [
  { emoji: "🏆", title: "Reconhecimento", desc: "Ser visto como referência, não como 'mais um barbeiro'" },
  { emoji: "✈️", title: "Liberdade", desc: "Poder faltar um dia sem que tudo desmorone" },
  { emoji: "🛡️", title: "Segurança", desc: "Saber que o negócio sustenta a família mesmo em mês fraco" },
];

const Slide07 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="light" className="justify-start pt-16 lg:pt-20">
    <div className="w-full max-w-5xl mx-auto">
      <FadeIn delay={100}>
        <SlideLabel>Desejos reais</SlideLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <SlideTitle className="mt-4">O que o Rafael Quer de Verdade</SlideTitle>
      </FadeIn>

      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 mt-10">
        {/* Left - What he asks */}
        <FadeIn delay={200} className="flex-1">
          <div className="bg-slide-white rounded-xl shadow-md p-6 h-full">
            <h3 className="font-body font-bold text-slide-gray-dark text-sm uppercase tracking-wider mb-5">
              O que ele pede
            </h3>
            <div className="flex flex-col gap-4">
              {asks.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="font-body text-slide-gray-dark text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Arrow */}
        <FadeIn delay={500} className="flex items-center justify-center py-2 md:py-0">
          <div className="animate-pulse-arrow text-slide-gold">
            <ArrowRight size={32} className="md:rotate-0 rotate-90" />
          </div>
        </FadeIn>

        {/* Right - What he really wants */}
        <FadeIn delay={800} className="flex-1">
          <div className="bg-slide-dark rounded-xl border border-slide-gold-border p-6 h-full">
            <h3 className="font-body font-bold text-slide-gold text-sm uppercase tracking-wider mb-5">
              O que ele realmente quer
            </h3>
            <div className="flex flex-col gap-5">
              {realWants.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <span className="font-body font-bold text-slide-white text-sm">{item.title}</span>
                    <p className="font-body text-slide-gray text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </SlideWrapper>
);

export default Slide07;
