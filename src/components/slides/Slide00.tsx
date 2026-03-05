import SlideWrapper from "@/components/slides/SlideWrapper";
import FadeIn from "@/components/slides/FadeIn";

interface Slide00Props {
  isActive?: boolean;
  onNext?: () => void;
}

const Slide00: React.FC<Slide00Props> = ({ isActive, onNext }) => (
  <SlideWrapper theme="dark" className="relative !overflow-hidden !min-h-screen h-screen justify-center bg-slide-black">
    {/* Gold bar top */}
    <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #D4A853, #E8D48B, #D4A853)' }} />

    {/* Main content */}
    <div className="relative z-10 max-w-[600px]">
      <FadeIn delay={300} isActive={isActive}>
        <p
          className="font-body text-slide-gold uppercase"
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3 }}
        >
          Preparado por Gabriel Di Tullio · DT Coproduções
        </p>
      </FadeIn>

      <FadeIn delay={500} isActive={isActive}>
        <p
          className="font-body mt-6"
          style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}
        >
          A Arquitetura Completa para Transformar a
        </p>
      </FadeIn>

      <FadeIn delay={700} isActive={isActive}>
        <h1
          className="font-display text-slide-white"
          style={{ fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 0.95, letterSpacing: 2 }}
        >
          MVP Education
        </h1>
      </FadeIn>

      <FadeIn delay={900} isActive={isActive}>
        <p
          className="font-body"
          style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400, color: 'rgba(255,255,255,0.5)', maxWidth: 500 }}
        >
          em uma Máquina de Aquisição e Ascensão de Clientes
        </p>
      </FadeIn>

      <div className="h-8" />

      <FadeIn delay={1100} isActive={isActive}>
        <p
          className="font-display text-slide-gold"
          style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: 1 }}
        >
          Guilherme Toledo
        </p>
      </FadeIn>
    </div>

    {/* Decorative circles - hidden on mobile */}
    <div className="hidden md:block absolute right-10 lg:right-20 top-1/2 -translate-y-1/2">
      <FadeIn delay={1000} isActive={isActive}>
        <div
          className="relative flex items-center justify-center animate-spin-slow"
          style={{ width: 'clamp(200px, 20vw, 280px)', height: 'clamp(200px, 20vw, 280px)' }}
        >
          <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(212,168,83,0.2)' }} />
          <div className="absolute rounded-full" style={{ inset: 30, border: '1px solid rgba(212,168,83,0.12)' }} />
          <span className="font-display text-slide-gold" style={{ fontSize: 40, opacity: 0.3 }}>BE</span>
        </div>
      </FadeIn>
    </div>

    {/* "Começar" indicator */}
    <FadeIn delay={2000} isActive={isActive}>
      <button
        onClick={onNext}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer bg-transparent border-none outline-none"
      >
        <span
          className="font-body uppercase group-hover:!opacity-100 transition-opacity duration-200"
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, color: 'rgba(255,255,255,0.4)' }}
        >
          Começar apresentação
        </span>
        <div
          className="animate-bounce-arrow group-hover:!opacity-100 transition-opacity duration-200"
          style={{
            width: 12,
            height: 12,
            borderBottom: '2px solid var(--slide-gold)',
            borderRight: '2px solid var(--slide-gold)',
            transform: 'rotate(45deg)',
            opacity: 0.4,
          }}
        />
      </button>
    </FadeIn>

    {/* Footer */}
    <FadeIn delay={1500} isActive={isActive}>
      <div
        className="absolute bottom-0 left-0 w-full flex justify-between items-center px-5 md:px-10 lg:px-16 py-4"
        style={{ background: 'rgba(10,10,10,0.6)', borderTop: '1px solid rgba(212,168,83,0.08)' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }} className="font-body">
          Documento confidencial · Uso interno
        </span>
        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }} className="font-body">
          2026
        </span>
      </div>
    </FadeIn>
  </SlideWrapper>
);

export default Slide00;
