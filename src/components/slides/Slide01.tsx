import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";
import { AlertTriangle } from "lucide-react";

const FunnelVisual = () => (
  <div className="flex flex-col items-center gap-2 w-full max-w-[280px] mx-auto">
    <FadeIn delay={700}>
      <span className="text-slide-gold uppercase tracking-[3px] text-xs font-bold font-body mb-2 block text-center">
        Hoje
      </span>
      <div className="relative flex flex-col items-center">
        {/* Top: Desconhecido */}
        <div className="bg-slide-dark-card border border-slide-gold-border rounded-lg px-6 py-3 text-slide-gray text-sm font-body text-center">
          Desconhecido
        </div>

        {/* Forced arrow */}
        <div className="flex flex-col items-center my-2">
          <div className="w-[2px] h-16 border-l-2 border-dashed border-slide-red" />
          <AlertTriangle size={20} className="text-slide-red my-1" />
          <div className="w-[2px] h-16 border-l-2 border-dashed border-slide-red" />
        </div>

        {/* Bottom: R$12.000 */}
        <div className="bg-slide-dark-card border border-slide-gold rounded-lg px-6 py-3 text-slide-gold text-lg font-bold font-body text-center">
          R$12.000
        </div>
      </div>
    </FadeIn>
  </div>
);

const Slide01 = () => (
  <SlideWrapper theme="dark" className="justify-start pt-16 lg:pt-24">
    <GoldBarTop />
    <div className="w-full max-w-5xl mx-auto">
      <FadeIn delay={100}>
        <SlideLabel>Diagnóstico</SlideLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <SlideTitle className="mt-4">A Situação Atual</SlideTitle>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-8">
        {/* Left column - narrative */}
        <div className="flex-1 max-w-[600px]">
          <FadeIn delay={300}>
            <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left">
              Guilherme, hoje o seu negócio funciona assim: você tem uma mentoria excelente de R$12.000 para donos de barbearia. Você tem depoimentos. Você tem resultado real — 8 anos de barbearia, top 16 de São Paulo, 4.7 estrelas.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-slide-gray text-sm md:text-[15px] leading-relaxed font-body text-left mt-4">
              Mas o seu único caminho de vendas é: encontrar uma pessoa que não te conhece e convencer ela a investir R$12.000 de primeira.
            </p>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="bg-slide-dark-card border-l-2 border-slide-gold p-6 rounded-r-lg mt-6">
              <p className="text-slide-white text-sm md:text-[15px] leading-relaxed font-body italic text-left">
                É como pedir alguém em casamento no primeiro encontro. Alguns dizem sim — mas a maioria vai embora.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right column - funnel */}
        <div className="flex-shrink-0 flex items-center justify-center lg:w-[300px]">
          <FunnelVisual />
        </div>
      </div>
    </div>
  </SlideWrapper>
);

export default Slide01;
