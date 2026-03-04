import SlideWrapper from "@/components/slides/SlideWrapper";
import GoldBarTop from "@/components/slides/GoldBarTop";
import SlideLabel from "@/components/slides/Label";
import SlideTitle from "@/components/slides/SlideTitle";
import Subtitle from "@/components/slides/Subtitle";
import FooterQuote from "@/components/slides/FooterQuote";
import FadeIn from "@/components/slides/FadeIn";

const surfacePains = [
  "Não consigo aumentar o faturamento sem trabalhar mais horas.",
  "Não sei cobrar mais caro — tenho medo de perder cliente.",
  "Meu time não vende como eu vendo.",
];

const deepPains = [
  "Ele está preso. Não tem um negócio — tem um emprego que ele mesmo criou.",
  "Medo de ficar para trás. Vê barbearias modernas abrindo e não sabe competir.",
  "Solidão. Não tem com quem conversar sobre gestão. Se sente impostor.",
];

const Slide06 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="dark" className="justify-start pt-14 lg:pt-16">
    <GoldBarTop />
    <div className="w-full max-w-3xl mx-auto">
      <FadeIn delay={100}>
        <SlideLabel>Diagnóstico profundo</SlideLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <SlideTitle className="mt-3">As 3 Dores Reais</SlideTitle>
      </FadeIn>
      <FadeIn delay={200}>
        <Subtitle className="mt-1">E as 3 que ele nunca diz em voz alta</Subtitle>
      </FadeIn>

      {/* Iceberg */}
      <div className="relative mt-8">
        {/* Above water */}
        <FadeIn delay={300}>
          <div className="mb-2">
            <span className="text-xs font-body text-slide-gray uppercase tracking-wider">O que ele diz</span>
          </div>
          <div className="flex flex-col gap-3">
            {surfacePains.map((pain, i) => (
              <div
                key={i}
                className="bg-slide-dark-card border-l-2 border-slide-gold px-5 py-3 rounded-r-lg"
              >
                <p className="text-slide-white font-body text-sm leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Water line */}
        <FadeIn delay={500}>
          <div className="relative my-6">
            <div className="border-t-2 border-[#3498DB]/30 w-full" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slide-dark px-3 text-[#3498DB]/60 text-[10px] font-body uppercase tracking-widest">
              superfície
            </div>
          </div>
        </FadeIn>

        {/* Below water */}
        <FadeIn delay={700}>
          <div className="mb-2">
            <span className="text-xs font-body text-slide-gray uppercase tracking-wider">O que realmente acontece</span>
          </div>
          <div className="flex flex-col gap-3">
            {deepPains.map((pain, i) => (
              <div
                key={i}
                className="bg-[#0D0D22] border-l-2 border-slide-red/60 px-5 py-4 rounded-r-lg"
              >
                <p className="text-slide-gray font-body text-sm leading-relaxed italic">{pain}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={1000}>
        <FooterQuote className="mt-8">
          A maioria dos concorrentes fala só das dores de cima. Se você falar das de baixo, ele vai sentir que você é o único que realmente entende ele.
        </FooterQuote>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide06;
