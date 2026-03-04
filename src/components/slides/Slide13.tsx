import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import FadeIn from "@/components/slides/FadeIn";
import StairIndicator from "@/components/slides/StairIndicator";
import { Crown, Clock, Video } from "lucide-react";

const Slide13 = () => (
  <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
    <GoldBarTop />
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <FadeIn delay={100}><SlideLabel>Degrau 5</SlideLabel></FadeIn>
          <FadeIn delay={100}><SlideTitle className="mt-3">O Grupo de Alto Nível</SlideTitle></FadeIn>
        </div>
        <FadeIn delay={100}>
          <StairIndicator activeStep={5} className="mt-2" />
        </FadeIn>
      </div>

      <FadeIn delay={200}>
        <div className="flex gap-2 mt-4 flex-wrap">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-body font-bold border border-slide-gold bg-slide-black text-slide-gold">
            R$25.000 a R$50.000
          </span>
          <span className="inline-block px-4 py-1 rounded-full text-sm font-body font-bold border border-slide-gray text-slide-gray">
            FUTURO
          </span>
        </div>
      </FadeIn>

      {/* Exclusive club card */}
      <FadeIn delay={400}>
        <div className="mt-8 bg-slide-black border border-slide-gold rounded-2xl p-8 max-w-[600px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slide-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-slide-gold/10 border border-slide-gold flex items-center justify-center">
              <Crown size={24} className="text-slide-gold" />
            </div>
            <div>
              <h3 className="text-slide-white font-body font-bold text-lg">Grupo de Elite</h3>
              <p className="text-slide-gray font-body text-xs">10 a 20 donos de barbearia</p>
            </div>
          </div>

          <p className="text-slide-gray text-sm leading-relaxed font-body">
            Um grupo exclusivo de donos de barbearia que já faturam alto (R$30.000+/mês). Encontros presenciais, acesso direto ao Guilherme, visitas a barbearias de referência.
          </p>

          {/* Timeline box */}
          <div className="mt-6 bg-slide-dark-card rounded-xl p-5 border-l-2 border-slide-gold">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-slide-gold" />
              <span className="text-slide-gold font-body font-bold text-xs uppercase tracking-wider">Quando construir</span>
            </div>
            <p className="text-slide-gray text-sm font-body">
              12 a 18 meses, quando houver base de alunos com resultados documentados.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-5 bg-slide-dark-card rounded-xl p-5 border-l-2 border-slide-green">
            <div className="flex items-center gap-2 mb-2">
              <Video size={14} className="text-slide-green" />
              <span className="text-slide-green font-body font-bold text-xs uppercase tracking-wider">Por agora</span>
            </div>
            <p className="text-slide-gray text-sm font-body">
              Começar a gravar depoimentos em vídeo dos melhores alunos.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide13;
