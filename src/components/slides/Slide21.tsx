import SlideWrapper from "@/components/slides/SlideWrapper";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";

const cards = [
  {
    icon: "⏸️",
    title: "Continuar como está",
    text: "Depender só da sessão estratégica. Funciona, mas o crescimento é lento e depende 100% do seu tempo.",
    border: "border-slide-gray/40",
    bg: "bg-slide-dark-card",
    scale: "",
  },
  {
    icon: "🔧",
    title: "Montar sozinho",
    text: "É possível. Vai levar mais tempo, vai ter mais erro, mas é possível. Tudo que está nesse documento pode ser pesquisado e implementado.",
    border: "border-[#3498DB]/30",
    bg: "bg-slide-dark-card",
    scale: "",
  },
  {
    icon: "🤝",
    title: "A gente monta junto",
    text: "Eu pego essa arquitetura inteira e transformo em realidade. Você foca no que faz de melhor: ensinar barbeiros a construir negócios de verdade. Eu cuido da engenharia por trás.",
    border: "border-slide-gold",
    bg: "bg-slide-gold-dim",
    scale: "scale-[1.03]",
    highlight: true,
  },
];

const Slide21 = () => (
  <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16 pb-20">
    <div className="w-full max-w-4xl mx-auto">
      <FadeIn delay={100}><SlideLabel>Decisão</SlideLabel></FadeIn>
      <FadeIn delay={100}><SlideTitle className="mt-3">Próximos Passos</SlideTitle></FadeIn>

      {/* 3 cards */}
      <FadeIn delay={300}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl border ${c.border} ${c.bg} p-6 flex flex-col transition-all duration-300 ${c.scale}`}
            >
              <span className="text-3xl mb-4">{c.icon}</span>
              <h3 className="text-slide-white font-body font-bold text-base mb-3">{c.title}</h3>
              <p className="text-slide-gray font-body text-sm leading-relaxed flex-1">{c.text}</p>
              {c.highlight && (
                <div className="mt-4 pt-3 border-t border-slide-gold/30">
                  <span className="text-slide-gold font-body text-xs font-bold uppercase tracking-wider">Recomendado</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Closing */}
      <FadeIn delay={700}>
        <div className="text-center mt-14">
          <p className="text-slide-gold font-display text-2xl md:text-3xl tracking-wider">DT Coproduções</p>
          <p className="text-slide-white font-display text-3xl md:text-5xl mt-4 tracking-wide">
            De barbeiro a empresário.
          </p>
          <p className="text-slide-gray font-body text-sm mt-6">Gabriel Di Tullio</p>
        </div>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide21;
