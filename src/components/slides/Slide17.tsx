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

      {/* Desktop: concentric circles with legend below */}
      <FadeIn delay={300}>
        <div className="hidden md:flex flex-col items-center mt-10">
          <div className="relative flex items-center justify-center" style={{ width: 384, height: 384 }}>
            {/* Outer circle */}
            <div className="absolute inset-0 rounded-full border-2 border-slide-gray/40" />
            {/* Middle circle */}
            <div className="absolute rounded-full border-2 border-[#3498DB] bg-[#3498DB]/5" style={{ width: 256, height: 256 }} />
            {/* Inner circle */}
            <div className="absolute rounded-full border-2 border-slide-gold bg-slide-gold/10 flex flex-col items-center justify-center text-center p-3" style={{ width: 144, height: 144 }}>
              <span className="font-body font-bold text-sm uppercase tracking-wider text-slide-dark">SEU</span>
              <span className="font-body text-[10px] text-slide-gray-dark mt-1 leading-tight">Lista de emails<br/>e WhatsApp</span>
            </div>
            {/* Arrows inside diagram */}
            <div className="absolute text-slide-gold animate-pulse-arrow text-lg" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }}>→</div>
            <div className="absolute text-slide-gold animate-pulse-arrow text-lg" style={{ right: 16, top: '50%', transform: 'translateY(-50%) scaleX(-1)' }}>→</div>
          </div>

          {/* Legend below diagram */}
          <div className="flex items-start gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-slide-gray/60 shrink-0" />
              <div>
                <span className="font-body font-bold text-[11px] uppercase tracking-wider text-slide-gray-dark">Não Controlado</span>
                <p className="font-body text-[10px] text-slide-gray-dark leading-tight">Posts orgânicos, buscas, indicações</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-[#3498DB] bg-[#3498DB]/20 shrink-0" />
              <div>
                <span className="font-body font-bold text-[11px] uppercase tracking-wider text-[#3498DB]">Controlado</span>
                <p className="font-body text-[10px] text-slide-gray-dark leading-tight">Anúncios pagos no Instagram/Facebook</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-slide-gold bg-slide-gold/20 shrink-0" />
              <div>
                <span className="font-body font-bold text-[11px] uppercase tracking-wider text-slide-dark">Seu</span>
                <p className="font-body text-[10px] text-slide-gray-dark leading-tight">Lista de emails e WhatsApp</p>
              </div>
            </div>
          </div>
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
