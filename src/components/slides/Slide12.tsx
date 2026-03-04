import { useState } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FooterQuote from "@/components/slides/FooterQuote";
import FadeIn from "@/components/slides/FadeIn";
import StairIndicator from "@/components/slides/StairIndicator";
import { Check, ChevronDown } from "lucide-react";

const comparison = [
  {
    aspect: "Quem chega na sessão",
    today: "Pessoa que nunca ouviu falar",
    ladder: "Já baixou material, comprou ebook, assistiu webinar, talvez fez o curso",
  },
  {
    aspect: "Nível de confiança",
    today: "Zero — precisa convencer do zero",
    ladder: "Alto — já conhece, já confia, já teve resultado",
  },
  {
    aspect: "Taxa de fechamento",
    today: "10% a 20%",
    ladder: "30% a 50%",
  },
  {
    aspect: "Esforço na call",
    today: "Muito alto",
    ladder: "Baixo — a pessoa já quer",
  },
  {
    aspect: "Objeção principal",
    today: '"Não te conheço, por que pagaria R$12k?"',
    ladder: '"Já vi que funciona. Quando começo?"',
  },
];

const deliverables = [
  "Página de aplicação",
  "Script do setter",
  "Script da sessão estratégica",
  "Emails de convite para aplicação",
];

const Slide12 = () => {
  const [open, setOpen] = useState(false);

  return (
    <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
      <GoldBarTop />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <FadeIn delay={100}><SlideLabel>Degrau 4</SlideLabel></FadeIn>
            <FadeIn delay={100}><SlideTitle className="mt-3">A Mentoria</SlideTitle></FadeIn>
          </div>
          <FadeIn delay={100}>
            <StairIndicator activeStep={4} className="mt-2" />
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-body font-bold bg-slide-gold text-slide-black">
              R$12.000
            </span>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-body font-bold border border-slide-green text-slide-green">
              JÁ EXISTE
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left mt-4 max-w-[600px]">
            O produto é o mesmo. O que muda é <strong className="text-slide-white">PARA QUEM</strong> é vendido e <strong className="text-slide-white">COMO</strong> a pessoa chega até aqui.
          </p>
        </FadeIn>

        {/* Comparison — desktop table, mobile cards */}
        <FadeIn delay={400}>
          <h3 className="text-slide-white font-body font-bold text-sm mt-8 mb-4">Hoje vs Com a Escada</h3>

          {/* Desktop table */}
          <div className="hidden md:block rounded-xl overflow-hidden border border-slide-gold-border">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-slide-dark-card">
                  <th className="text-left p-3 text-slide-gray font-medium">Aspecto</th>
                  <th className="text-left p-3 text-slide-red/80 font-medium">Hoje</th>
                  <th className="text-left p-3 text-slide-gold font-medium">Com a Escada</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-t border-slide-gold-border/20">
                    <td className="p-3 text-slide-white font-medium">{row.aspect}</td>
                    <td className="p-3 text-slide-gray" style={{ backgroundColor: "rgba(231,76,60,0.06)" }}>{row.today}</td>
                    <td className="p-3 text-slide-white" style={{ backgroundColor: "rgba(212,168,83,0.06)" }}>{row.ladder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-4">
            <div className="bg-slide-dark-card rounded-xl p-4 border-l-2 border-slide-red">
              <h4 className="text-slide-red font-body font-bold text-xs mb-3">HOJE</h4>
              {comparison.map((row, i) => (
                <div key={i} className="mb-3">
                  <p className="text-slide-gray text-[10px] uppercase tracking-wider">{row.aspect}</p>
                  <p className="text-slide-white text-sm">{row.today}</p>
                </div>
              ))}
            </div>
            <div className="bg-slide-dark-card rounded-xl p-4 border-l-2 border-slide-gold">
              <h4 className="text-slide-gold font-body font-bold text-xs mb-3">COM A ESCADA</h4>
              {comparison.map((row, i) => (
                <div key={i} className="mb-3">
                  <p className="text-slide-gray text-[10px] uppercase tracking-wider">{row.aspect}</p>
                  <p className="text-slide-white text-sm">{row.ladder}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <FooterQuote className="mt-6">
            O problema nunca foi o produto — foi o caminho até ele.
          </FooterQuote>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={700}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 mt-6 text-slide-gray hover:text-slide-white transition-colors font-body text-sm"
          >
            <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            Entregáveis deste degrau
          </button>
          {open && (
            <div className="mt-3 flex flex-col gap-2 animate-slide-fade-in">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-slide-gold flex-shrink-0" />
                  <span className="text-slide-gray font-body text-sm">{d}</span>
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide12;
