import SlideWrapper from "@/components/slides/SlideWrapper";
import FadeIn from "@/components/slides/FadeIn";

const messages = [
  { text: "Trabalho mais que qualquer funcionário meu e ganho quase igual.", color: "#8A8F98" },
  { text: "Se eu parar uma semana, o faturamento desaba.", color: "#9A7F78" },
  { text: "Meu melhor barbeiro tá pensando em sair. Se ele for, leva metade dos clientes.", color: "#B06B5B" },
  { text: "Vi um cara no Instagram faturando R$50 mil por mês e não entendo como.", color: "#C7573E" },
  { text: "Será que marketing digital funciona pra barbearia ou é coisa de coach?", color: "#D94A33" },
  { text: "Investi em reforma mas não sei se foi a melhor decisão.", color: "#E74C3C" },
];

const Slide05 = ({ isActive }: { isActive?: boolean }) => (
  <SlideWrapper theme="dark" className="justify-start pt-16 lg:pt-20 bg-slide-black">
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <FadeIn delay={100}>
        <h2 className="font-body text-slide-gray text-base md:text-lg text-center mb-10">
          O que o Rafael pensa às 2h da manhã
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-4 w-full">
        {messages.map((msg, i) => (
          <FadeIn key={i} delay={300 + i * 500}>
            <div
              className="bg-slide-dark-card rounded-xl px-5 py-4 max-w-[500px] font-body text-slide-white text-sm md:text-[15px] leading-relaxed"
              style={{ borderLeft: `2px solid ${msg.color}` }}
            >
              {msg.text}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={3800}>
        <p className="text-slide-gold font-body text-sm md:text-[15px] text-center mt-10 italic max-w-[500px]">
          Se o Rafael ouve essas frases, ele pensa: "esse cara tá falando de mim."
        </p>
      </FadeIn>
    </div>
  </SlideWrapper>
);

export default Slide05;
