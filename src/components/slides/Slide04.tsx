import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";

const stats = [
  { icon: "📅", label: "Idade", value: "22-38 anos" },
  { icon: "💵", label: "Faturamento", value: "R$8k-25k/mês" },
  { icon: "⏱️", label: "Rotina", value: "10-14h/dia na cadeira" },
  { icon: "🚀", label: "Origem", value: "Ex-funcionário, abriu o próprio" },
];

const floatingIcons = [
  { emoji: "⏰", label: "Tempo", pos: "top-0 -left-8 md:-left-12" },
  { emoji: "💰", label: "Dinheiro", pos: "top-0 -right-8 md:-right-12" },
  { emoji: "👥", label: "Equipe", pos: "bottom-0 -left-8 md:-left-12" },
  { emoji: "📱", label: "Marketing", pos: "bottom-0 -right-8 md:-right-12" },
];

const Slide04 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="dark" className="justify-start pt-16 lg:pt-20">
    <GoldBarTop />
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <FadeIn delay={100}>
        <SlideLabel>Cliente dos sonhos</SlideLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <SlideTitle center className="mt-4">Conheça o Rafael</SlideTitle>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="relative mt-10">
          {/* Floating icons */}
          {floatingIcons.map((fi, i) => (
            <div
              key={i}
              className={`absolute ${fi.pos} hidden md:flex flex-col items-center gap-1 animate-float`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <span className="text-2xl">{fi.emoji}</span>
              <span className="text-[10px] text-slide-gray font-body">{fi.label}</span>
            </div>
          ))}

          {/* Character card */}
          <div className="bg-slide-dark-card border border-slide-gold-border rounded-2xl p-8 w-[320px] md:w-[380px] flex flex-col items-center">
            {/* Avatar */}
            <div className="w-[120px] h-[120px] rounded-full border-2 border-slide-gold flex items-center justify-center bg-slide-dark text-5xl">
              ✂️
            </div>
            <h3 className="text-slide-gold font-body font-bold text-2xl mt-4">Rafael</h3>
            <p className="text-slide-gray font-body text-sm">O seu cliente ideal</p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 w-full">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-[11px] text-slide-gray font-body uppercase tracking-wider">{s.label}</span>
                  <span className="text-slide-white font-body font-bold text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={600}>
        <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-center max-w-[600px] mt-8">
          Ele não é o cliente médio — é o melhor. O cara que, se você resolver o problema dele, te indica para 10 amigos.
        </p>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide04;
