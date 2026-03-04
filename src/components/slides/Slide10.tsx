import { useState } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";
import StairIndicator from "@/components/slides/StairIndicator";
import { Check, ChevronDown } from "lucide-react";

const deliverables = [
  "Ebook/mini-curso (conteúdo + design)",
  "Página de vendas",
  "Checkout com order bump configurado",
  "Página de upsell",
  "Integração com plataforma de pagamento",
];

const Slide10 = () => {
  const [open, setOpen] = useState(false);

  return (
    <SlideWrapper theme="light" className="justify-start pt-14 lg:pt-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <FadeIn delay={100}><SlideLabel>Degrau 2</SlideLabel></FadeIn>
            <FadeIn delay={100}><SlideTitle className="mt-3">O Produto de Entrada</SlideTitle></FadeIn>
          </div>
          <FadeIn delay={100}>
            <StairIndicator activeStep={2} className="mt-2" />
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <span className="inline-block mt-4 px-4 py-1 rounded-full text-sm font-body font-bold text-white" style={{ backgroundColor: "#3498DB" }}>
            R$47 a R$97
          </span>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-slide-gray-dark text-sm md:text-[15px] leading-relaxed font-body text-left mt-4 max-w-[600px]">
            Um ebook ou mini-curso — "O Manual da Barbearia de Elite". O passo-a-passo introdutório do método. Preço baixo: o suficiente para o barbeiro aplicar 2-3 coisas e já ver resultado.
          </p>
        </FadeIn>

        {/* Insight box */}
        <FadeIn delay={400}>
          <div className="bg-slide-dark rounded-xl border-l-2 border-slide-gold p-6 mt-6 max-w-[600px]">
            <h4 className="text-slide-gold font-body font-bold text-sm mb-2">A função secreta deste produto</h4>
            <p className="text-slide-white text-sm leading-relaxed font-body">
              Ele não existe para dar lucro. Existe para transformar um "curioso" em um comprador. Quando alguém tira R$47 do bolso para investir no próprio negócio, essa pessoa se torna diferente. Ela pensa: "eu sou o tipo de pessoa que investe em mim."
            </p>
          </div>
        </FadeIn>

        {/* Math section */}
        <FadeIn delay={500}>
          <h3 className="text-slide-dark font-body font-bold text-sm mt-8 mb-4">A Matemática</h3>
          <div className="bg-slide-white rounded-xl shadow-md p-6 max-w-[500px]">
            {/* Cost bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs font-body mb-1">
                <span className="text-slide-gray-dark">Custo por comprador</span>
                <span className="text-slide-red font-bold">~R$50-80</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-slide-red" style={{ width: "45%" }} />
              </div>
            </div>
            {/* Revenue bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs font-body mb-1">
                <span className="text-slide-gray-dark">Receita média (produto + bump + upsell)</span>
                <span className="text-slide-green font-bold">~R$90-130</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-slide-green" style={{ width: "65%" }} />
              </div>
            </div>
            <div className="border-t border-slide-gold pt-3">
              <p className="text-slide-gold font-body font-bold text-sm text-center">
                O custo de atrair clientes se PAGA SOZINHO
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={600}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 mt-6 text-slide-gray-dark hover:text-slide-dark transition-colors font-body text-sm"
          >
            <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            O que será construído neste degrau
          </button>
          {open && (
            <div className="mt-3 flex flex-col gap-2 animate-slide-fade-in">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-slide-gold flex-shrink-0" />
                  <span className="text-slide-gray-dark font-body text-sm">{d}</span>
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </SlideWrapper>
  );
};

export default Slide10;
