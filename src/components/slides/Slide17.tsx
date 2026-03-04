import SlideWrapper from "@/components/slides/SlideWrapper";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";

const circles = [
  { label: "SEU", sub: "Lista de emails e WhatsApp", border: "border-slide-gold", bg: "bg-slide-gold/10", size: "w-36 h-36 md:w-40 md:h-40" },
  { label: "CONTROLADO", sub: "Anúncios pagos no Instagram/Facebook", border: "border-[#3498DB]", bg: "bg-[#3498DB]/5", size: "w-56 h-56 md:w-64 md:h-64" },
  { label: "NÃO CONTROLADO", sub: "Posts orgânicos, buscas no Google, indicações", border: "border-slide-gray/40", bg: "bg-transparent", size: "w-80 h-80 md:w-96 md:h-96" },
];

const paragraphs = [
  { color: "text-slide-gray-dark", text: "Orgânico: posts todo dia, sempre manda para a isca." },
  { color: "text-[#3498DB]", text: "Pago: R$50-100/dia em anúncios direcionando para a isca." },
  { color: "text-slide-gold", text: "Seu: o mais valioso. Pode contatar a qualquer momento, sem pagar nada. Cada contato vale ~R$1/mês." },
];

const Slide17 = () => (
  <SlideWrapper theme="light" className="justify-start pt-14 lg:pt-16">
    <div className="w-full max-w-4xl mx-auto">
      <FadeIn delay={100}><SlideLabel>De onde vêm os clientes</SlideLabel></FadeIn>
      <FadeIn delay={100}><SlideTitle className="mt-3">Os 3 Tipos de Público</SlideTitle></FadeIn>

      {/* Desktop: concentric circles */}
      <FadeIn delay={300}>
        <div className="hidden md:flex items-center justify-center mt-10 relative" style={{ minHeight: 400 }}>
          {[...circles].reverse().map((c, i) => (
            <div
              key={i}
              className={`absolute rounded-full border-2 ${c.border} ${c.bg} ${c.size} flex flex-col items-center justify-center text-center p-4 transition-all duration-700`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <span className="font-body font-bold text-xs uppercase tracking-wider text-slide-dark">{c.label}</span>
              <span className="font-body text-[10px] text-slide-gray-dark mt-1 max-w-[120px] leading-tight">{c.sub}</span>
            </div>
          ))}
          {/* Animated arrows */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-slide-gold animate-pulse-arrow text-lg">→</div>
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-slide-gold animate-pulse-arrow text-lg rotate-180">→</div>
        </div>
      </FadeIn>

      {/* Mobile: stacked cards */}
      <FadeIn delay={300}>
        <div className="md:hidden flex flex-col gap-3 mt-8">
          {[...circles].reverse().map((c, i) => (
            <div key={i} className={`rounded-xl border-2 ${c.border} p-4`}>
              <span className="font-body font-bold text-xs uppercase tracking-wider text-slide-dark">{c.label}</span>
              <p className="font-body text-sm text-slide-gray-dark mt-1">{c.sub}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Paragraphs */}
      <FadeIn delay={600}>
        <div className="mt-8 flex flex-col gap-3 max-w-[600px]">
          {paragraphs.map((p, i) => (
            <p key={i} className={`font-body text-sm leading-relaxed ${p.color}`}>
              {p.text}
            </p>
          ))}
        </div>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide17;
