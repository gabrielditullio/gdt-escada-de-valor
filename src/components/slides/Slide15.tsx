import { useState, useEffect } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";
import { ChevronDown } from "lucide-react";

const stations = [
  {
    from: "Desconhecido",
    to: "Contato",
    trigger: "Reels / Anúncio → Baixa isca → Entra na lista",
    emotion: "Curiosidade",
    price: "Grátis",
    color: "#27AE60",
  },
  {
    from: "Contato",
    to: "Comprador",
    trigger: "Email 5 ou retargeting → Compra ebook",
    emotion: "Confiança inicial",
    price: "R$47",
    color: "#3498DB",
  },
  {
    from: "Comprador",
    to: "Aluno",
    trigger: "Emails + webinar → Compra curso",
    emotion: "Comprometimento",
    price: "R$1.497",
    color: "#2C3E8C",
  },
  {
    from: "Aluno",
    to: "Mentorado",
    trigger: "Implementou, bateu teto → Aplica mentoria",
    emotion: "Ambição",
    price: "R$12.000",
    color: "#D4A853",
  },
];

const transitions = [
  {
    title: "0→1: Os 5 emails automáticos",
    content: "Email 1: Entrega do material. Email 2: Maior erro dos donos. Email 3: Caso de sucesso. Email 4: Convite para próximo passo. Email 5: Última chance + escassez.",
  },
  {
    title: "1→2: Página de vendas + bump + upsell",
    content: "Página de vendas do ebook com prova social, order bump (checklist extra), e página de upsell (mini-curso completo).",
  },
  {
    title: "2→3: Webinar de 60 min com oferta",
    content: "Webinar ao vivo ou gravado: 40 min de conteúdo transformador + 20 min de oferta do programa completo com bônus exclusivos.",
  },
  {
    title: "3→4: Funil de aplicação + setter + sessão",
    content: "Página de aplicação qualificadora → setter faz pré-call → sessão estratégica com Guilherme → fechamento.",
  },
];

const Slide15 = ({ isActive }: { isActive?: boolean }) => {
  const [activeStations, setActiveStations] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  useEffect(() => {
    if (!isActive) { setActiveStations(0); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    stations.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStations(i + 1), 600 + i * 600));
    });
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        <FadeIn delay={100}><SlideLabel>A jornada</SlideLabel></FadeIn>
        <FadeIn delay={100}><SlideTitle className="mt-3">De Desconhecido a Cliente Premium</SlideTitle></FadeIn>

        {/* Journey map */}
        <FadeIn delay={300}>
          <div className="mt-8 relative">
            {/* Path line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-slide-gold/30 md:-translate-x-px" />

            <div className="flex flex-col gap-6">
              {stations.map((s, i) => {
                const visible = i < activeStations;
                const isRight = i % 2 === 1;
                return (
                  <div
                    key={i}
                    className="relative transition-all duration-500"
                    style={{ opacity: visible ? 1 : 0.15, transform: visible ? "translateY(0)" : "translateY(12px)" }}
                  >
                    {/* Station dot */}
                    <div
                      className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 z-10 transition-all duration-300"
                      style={{
                        backgroundColor: visible ? s.color : "transparent",
                        borderColor: s.color,
                        boxShadow: visible ? `0 0 12px ${s.color}40` : "none",
                      }}
                    />

                    {/* Content card */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[45%] bg-slide-dark-card rounded-xl p-4 border border-slide-gold-border/20 ${
                        isRight ? "md:ml-[55%]" : "md:mr-[55%]"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-body text-xs font-bold" style={{ color: s.color }}>
                          {s.from} → {s.to}
                        </span>
                        <span className="ml-auto text-slide-gold font-body text-xs font-bold">{s.price}</span>
                      </div>
                      <p className="text-slide-gray font-body text-xs leading-relaxed">{s.trigger}</p>
                      <p className="text-slide-gray/60 font-body text-[10px] mt-1 italic">Gatilho: {s.emotion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Transition accordions */}
        <FadeIn delay={800}>
          <h3 className="text-slide-white font-body font-bold text-sm mt-10 mb-4">Detalhes de cada transição</h3>
          <div className="flex flex-col gap-2 max-w-[600px]">
            {transitions.map((t, i) => (
              <div key={i} className="bg-slide-dark-card rounded-lg border border-slide-gold-border/20 overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="flex items-center justify-between w-full px-4 py-3 text-left"
                >
                  <span className="text-slide-white font-body text-sm font-medium">{t.title}</span>
                  <ChevronDown
                    size={14}
                    className={`text-slide-gray transition-transform ${openAccordion === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openAccordion === i && (
                  <div className="px-4 pb-4 animate-slide-fade-in">
                    <p className="text-slide-gray font-body text-sm leading-relaxed">{t.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide15;
