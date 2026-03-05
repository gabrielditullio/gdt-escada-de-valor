import SlideWrapper from "@/components/slides/SlideWrapper";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";

const paragraphs = [
  { color: "text-slide-gray-dark", text: "Orgânico: posts todo dia, sempre manda para a isca." },
  { color: "text-[#3498DB]", text: "Pago: R$50-100/dia em anúncios direcionando para a isca." },
  { color: "text-slide-gold", text: "Seu: o mais valioso. Pode contatar a qualquer momento, sem pagar nada. Cada contato vale ~R$1/mês." },
];

const Slide17 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="light" className="justify-start pt-14 lg:pt-16">
    <div className="w-full max-w-4xl mx-auto">
      <FadeIn delay={100}><SlideLabel>De onde vêm os clientes</SlideLabel></FadeIn>
      <FadeIn delay={100}><SlideTitle className="mt-3">Os 3 Tipos de Público</SlideTitle></FadeIn>

      {/* Desktop: concentric circles with labels outside */}
      <FadeIn delay={300}>
        <div className="hidden md:flex items-center justify-center mt-10 relative" style={{ minHeight: 420 }}>
          {/* Outer circle - NÃO CONTROLADO */}
          <div className="absolute rounded-full border-2 border-slide-gray/40 w-96 h-96 flex items-center justify-center" />
          <div className="absolute font-body font-bold text-[11px] uppercase tracking-wider text-slide-gray-dark" style={{ top: 0, left: '50%', transform: 'translateX(-50%) translateY(-24px)' }}>
            Não Controlado
          </div>
          <div className="absolute font-body text-[10px] text-slide-gray-dark" style={{ top: 0, left: '50%', transform: 'translateX(-50%) translateY(-8px)' }}>
            Posts orgânicos, buscas, indicações
          </div>

          {/* Middle circle - CONTROLADO */}
          <div className="absolute rounded-full border-2 border-[#3498DB] bg-[#3498DB]/5 w-64 h-64 flex items-center justify-center" />
          <div className="absolute font-body font-bold text-[11px] uppercase tracking-wider text-[#3498DB]" style={{ top: '50%', right: 'calc(50% + 140px)', transform: 'translateY(-50%)' }}>
            Controlado
          </div>
          <div className="absolute font-body text-[10px] text-slide-gray-dark text-right" style={{ top: '50%', right: 'calc(50% + 140px)', transform: 'translateY(6px)', maxWidth: 140 }}>
            Anúncios pagos no Instagram/Facebook
          </div>

          {/* Inner circle - SEU */}
          <div className="absolute rounded-full border-2 border-slide-gold bg-slide-gold/10 w-36 h-36 flex flex-col items-center justify-center text-center p-3">
            <span className="font-body font-bold text-sm uppercase tracking-wider text-slide-dark">SEU</span>
            <span className="font-body text-[10px] text-slide-gray-dark mt-1 leading-tight">Lista de emails<br/>e WhatsApp</span>
          </div>

          {/* Animated arrows */}
          <div className="absolute text-slide-gold animate-pulse-arrow text-lg" style={{ right: 'calc(50% - 220px)', top: '50%', transform: 'translateY(-50%)' }}>→</div>
          <div className="absolute text-slide-gold animate-pulse-arrow text-lg" style={{ left: 'calc(50% - 220px)', top: '50%', transform: 'translateY(-50%) scaleX(-1)' }}>→</div>
        </div>
      </FadeIn>

      {/* Mobile: stacked cards */}
      <FadeIn delay={300}>
        <div className="md:hidden flex flex-col gap-3 mt-8">
          {[
            { label: "NÃO CONTROLADO", sub: "Posts orgânicos, buscas no Google, indicações", border: "border-slide-gray/40" },
            { label: "CONTROLADO", sub: "Anúncios pagos no Instagram/Facebook", border: "border-[#3498DB]" },
            { label: "SEU", sub: "Lista de emails e WhatsApp", border: "border-slide-gold" },
          ].map((c, i) => (
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
