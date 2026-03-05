import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FooterQuote from "@/components/slides/FooterQuote";
import FadeIn from "@/components/slides/FadeIn";

const weekdays = [
  { day: "Seg", icon: "💡", type: "Dica rápida", color: "#27AE60" },
  { day: "Ter", icon: "📖", type: "História", color: "#3498DB" },
  { day: "Qua", icon: "🎬", type: "Bastidores", color: "#8E44AD" },
  { day: "Qui", icon: "⭐", type: "Depoimento", color: "#D4A853" },
  { day: "Sex", icon: "📚", type: "Educativo", color: "#2C3E8C" },
  { day: "Sáb", icon: "🌟", type: "Lifestyle", color: "#E91E63" },
  { day: "Dom", icon: "😴", type: "Descanso", color: "#8A8F98" },
];

const hooks = [
  "3 motivos pelos quais sua barbearia não cresce (e não tem nada a ver com o seu corte)",
  "O erro de R$5.000 que todo dono de barbearia comete no primeiro ano",
  "Como cobrar R$80 no corte sem perder um cliente",
  "Seu melhor barbeiro vai sair. Quando isso acontecer, você tá preparado?",
  "Por que barbearias na mesma rua faturam 5x diferente",
  "A planilha que mudou minha barbearia (e que você pode copiar grátis)",
];

const Slide18 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
    <GoldBarTop />
    <div className="w-full max-w-4xl mx-auto">
      <FadeIn delay={100}><SlideLabel>Conteúdo</SlideLabel></FadeIn>
      <FadeIn delay={100}><SlideTitle className="mt-3">O Motor Gratuito</SlideTitle></FadeIn>

      {/* Weekly calendar */}
      <FadeIn delay={300}>
        <div className="relative">
          <div className="flex gap-3 mt-8 overflow-x-auto pb-2 -mx-2 px-2">
            {weekdays.map((d, i) => (
              <div
                key={i}
                className="min-w-[100px] bg-slide-dark-card rounded-xl p-4 flex-shrink-0 text-center border border-slide-gold-border/20"
                style={{ borderTopColor: d.color, borderTopWidth: 3 }}
              >
                <span className="text-2xl">{d.icon}</span>
                <p className="text-slide-white font-body font-bold text-xs mt-2">{d.day}</p>
                <p className="text-slide-gray font-body text-[10px] mt-1">{d.type}</p>
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 w-10 h-full pointer-events-none" style={{ background: 'linear-gradient(to left, var(--slide-dark), transparent)' }} />
        </div>
      </FadeIn>

      {/* Hook examples */}
      <FadeIn delay={500}>
        <h3 className="text-slide-white font-body font-bold text-sm mt-8 mb-4">Exemplos de Ganchos</h3>
        <div className="flex flex-col gap-1 max-w-[600px]">
          {hooks.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-3 py-3 px-3 rounded-lg cursor-default hover:bg-slide-gold-dim transition-colors"
            >
              <span className="text-slide-gold text-xs mt-0.5">▶</span>
              <p className="text-slide-gray font-body text-sm leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={700}>
        <FooterQuote className="mt-6">
          Cada vídeo termina com: "Quer o checklist grátis? Link na bio."
        </FooterQuote>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide18;
