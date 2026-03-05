const slides = [
  {
    title: "Capa",
    content: [
      { type: "sub", text: "Preparado por Gabriel Di Tullio · DT Coproduções" },
      { type: "p", text: "A Arquitetura Completa para Transformar a" },
      { type: "h", text: "MVP Education" },
      { type: "p", text: "em uma Máquina de Aquisição e Ascensão de Clientes" },
      { type: "sub", text: "Guilherme Toledo" },
      { type: "p", text: "Documento confidencial · Uso interno · 2026" },
    ],
  },
  {
    title: "A Situação Atual",
    label: "Diagnóstico",
    content: [
      { type: "p", text: "Guilherme, hoje o seu negócio funciona assim: você tem uma mentoria excelente de R$12.000 para donos de barbearia. Você tem depoimentos. Você tem resultado real — 8 anos de barbearia, top 16 de São Paulo, 4.7 estrelas." },
      { type: "p", text: "Mas o seu único caminho de vendas é: encontrar uma pessoa que não te conhece e convencer ela a investir R$12.000 de primeira." },
      { type: "quote", text: "É como pedir alguém em casamento no primeiro encontro. Alguns dizem sim — mas a maioria vai embora." },
      { type: "sub", text: "Funil atual: Desconhecido → (salto direto) → R$12.000" },
    ],
  },
  {
    title: "O Problema Invisível",
    label: "O problema real",
    content: [
      { type: "p", text: "O problema não é falta de qualidade. Não é falta de resultado. O problema é estrutural." },
      { type: "p", text: "Cada pessoa que fala com você e não fecha agora... desaparece para sempre. Você não tem como falar com ela de novo. Não tem uma lista de emails, não tem um caminho onde ela vai aquecendo até estar pronta." },
      { type: "quote", text: "Cada \"não agora\" vira \"nunca mais\". E você fica dependendo de sempre encontrar gente nova, do zero, toda semana." },
      { type: "sub", text: "0 contatos disponíveis para recontatar" },
    ],
  },
  {
    title: "O que os Negócios que Mais Crescem Fazem Diferente",
    label: "A diferença",
    content: [
      { type: "h3", text: "Como funciona hoje" },
      { type: "p", text: "Um salto gigante. De desconhecido para R$12.000. Sem degraus intermediários." },
      { type: "h3", text: "Como deveria funcionar" },
      { type: "p", text: "Uma escada com degraus. Cada um entrega valor. Cada um prepara para o próximo. No topo: a oferta premium." },
      { type: "sub", text: "Degraus: Grátis → R$47 → R$997 → R$12k → R$25k+ → R$97/mês" },
      { type: "quote", text: "\"O que eu vou te mostrar agora é essa escada montada especificamente para o seu negócio.\"" },
    ],
  },
  {
    title: "Conheça o Rafael",
    label: "Cliente dos sonhos",
    content: [
      { type: "p", text: "Rafael — O seu cliente ideal" },
      { type: "list", items: ["Idade: 22-38 anos", "Faturamento: R$8k-25k/mês", "Rotina: 10-14h/dia na cadeira", "Origem: Ex-funcionário, abriu o próprio"] },
      { type: "p", text: "Ele não é o cliente médio — é o melhor. O cara que, se você resolver o problema dele, te indica para 10 amigos." },
    ],
  },
  {
    title: "O que o Rafael pensa às 2h da manhã",
    content: [
      { type: "list", items: [
        "Trabalho mais que qualquer funcionário meu e ganho quase igual.",
        "Se eu parar uma semana, o faturamento desaba.",
        "Meu melhor barbeiro tá pensando em sair. Se ele for, leva metade dos clientes.",
        "Vi um cara no Instagram faturando R$50 mil por mês e não entendo como.",
        "Será que marketing digital funciona pra barbearia ou é coisa de coach?",
        "Investi em reforma mas não sei se foi a melhor decisão.",
      ]},
      { type: "quote", text: "Se o Rafael ouve essas frases, ele pensa: \"esse cara tá falando de mim.\"" },
    ],
  },
  {
    title: "As 3 Dores Reais",
    label: "Diagnóstico profundo",
    content: [
      { type: "h3", text: "O que ele diz (superfície)" },
      { type: "list", items: [
        "Não consigo aumentar o faturamento sem trabalhar mais horas.",
        "Não sei cobrar mais caro — tenho medo de perder cliente.",
        "Meu time não vende como eu vendo.",
      ]},
      { type: "h3", text: "O que realmente acontece (profundo)" },
      { type: "list", items: [
        "Ele está preso. Não tem um negócio — tem um emprego que ele mesmo criou.",
        "Medo de ficar para trás. Vê barbearias modernas abrindo e não sabe competir.",
        "Solidão. Não tem com quem conversar sobre gestão. Se sente impostor.",
      ]},
      { type: "quote", text: "A maioria dos concorrentes fala só das dores de cima. Se você falar das de baixo, ele vai sentir que você é o único que realmente entende ele." },
    ],
  },
  {
    title: "O que o Rafael Quer de Verdade",
    label: "Desejos reais",
    content: [
      { type: "h3", text: "O que ele pede" },
      { type: "list", items: ["Faturar mais", "Ter equipe boa", "Abrir segunda unidade"] },
      { type: "h3", text: "O que ele realmente quer" },
      { type: "list", items: [
        "Reconhecimento — Ser visto como referência, não como 'mais um barbeiro'",
        "Liberdade — Poder faltar um dia sem que tudo desmorone",
        "Segurança — Saber que o negócio sustenta a família mesmo em mês fraco",
      ]},
    ],
  },
  {
    title: "A Escada do Seu Negócio",
    label: "Método",
    content: [
      { type: "p", text: "O mapa completo de como um dono de barbearia que nunca ouviu falar de você se torna o seu melhor cliente." },
      { type: "list", items: [
        "1. Isca — Grátis",
        "2. Entrada — R$47-97",
        "3. Curso — R$997-1.997",
        "4. Mentoria — R$12.000",
        "5. Alto Nível — R$25-50k",
        "Comunidade — R$97/mês (receita recorrente)",
      ]},
    ],
  },
  {
    title: "A Isca",
    label: "Degrau 1",
    content: [
      { type: "sub", text: "Grátis" },
      { type: "p", text: "Um conteúdo gratuito tão bom que o dono de barbearia pensa \"se o grátis é assim, imagina o pago.\" Em troca, ele deixa o email e o WhatsApp." },
      { type: "quote", text: "Hoje, cada pessoa que não fecha a mentoria desaparece para sempre. Com a isca, essas pessoas entram na sua lista. Você pode falar com elas amanhã, semana que vem, mês que vem." },
      { type: "h3", text: "3 Opções de Formato" },
      { type: "list", items: [
        "Quiz Diagnóstico — 10 perguntas → score da barbearia (Conversão: 35-50%) [Recomendado]",
        "Aula Gratuita em Vídeo — 15-20 min, 3 insights práticos (Conversão: 25-35%)",
        "Checklist em PDF — 21 pontos, aplicável no mesmo dia (Conversão: 20-30%)",
      ]},
      { type: "h3", text: "Entregáveis" },
      { type: "list", items: ["Landing page com promessa e formulário", "Material gratuito (quiz, vídeo ou PDF)", "Sequência de 5 emails automáticos pós-cadastro"] },
      { type: "quote", text: "Hoje você pesca com arpão — um por um, na força bruta. Com a isca, você joga a rede." },
    ],
  },
  {
    title: "O Produto de Entrada",
    label: "Degrau 2",
    content: [
      { type: "sub", text: "R$47 a R$97" },
      { type: "p", text: "Um ebook ou mini-curso — \"O Manual da Barbearia de Elite\". O passo-a-passo introdutório do método. Preço baixo: o suficiente para o barbeiro aplicar 2-3 coisas e já ver resultado." },
      { type: "h3", text: "A função secreta deste produto" },
      { type: "p", text: "Ele não existe para dar lucro. Existe para transformar um \"curioso\" em um comprador. Quando alguém tira R$47 do bolso para investir no próprio negócio, essa pessoa se torna diferente. Ela pensa: \"eu sou o tipo de pessoa que investe em mim.\"" },
      { type: "h3", text: "A Matemática" },
      { type: "list", items: ["Custo por comprador: ~R$50-80", "Receita média (produto + bump + upsell): ~R$90-130", "O custo de atrair clientes se PAGA SOZINHO"] },
      { type: "h3", text: "Entregáveis" },
      { type: "list", items: ["Ebook/mini-curso (conteúdo + design)", "Página de vendas", "Checkout com order bump configurado", "Página de upsell", "Integração com plataforma de pagamento"] },
    ],
  },
  {
    title: "O Programa Completo",
    label: "Degrau 3",
    content: [
      { type: "sub", text: "R$997 a R$1.997" },
      { type: "p", text: "O curso online completo — \"Barbearia de Elite\". Todo o método sistematizado em 8 módulos de vídeo, com planilhas, templates, ferramentas, e acesso a um grupo." },
      { type: "h3", text: "8 Módulos" },
      { type: "list", items: ["1. Mentalidade de Dono", "2. Números que Importam", "3. Precificação Estratégica", "4. Time de Elite", "5. Marketing Local", "6. Experiência Premium", "7. Escala", "8. Plano de Ação 90 Dias"] },
      { type: "h3", text: "Empilhamento de Valor" },
      { type: "list", items: [
        "Programa completo (8 módulos) — R$2.997",
        "Planilha de Gestão Financeira — R$497",
        "Script de Vendas Premium — R$297",
        "Template de Marketing Local — R$397",
        "Comunidade (6 meses) — R$582",
        "[Bônus] Masterclass Contratação — R$497",
        "[Bônus] Checklist 2ª Unidade — R$297",
      ]},
      { type: "p", text: "VALOR TOTAL: R$5.564 → PREÇO HOJE: R$1.497 (ou 12x de R$149)" },
      { type: "h3", text: "Entregáveis" },
      { type: "list", items: ["Curso gravado (8 módulos)", "Materiais de apoio e planilhas", "Plataforma de acesso", "Webinar de lançamento", "Página de vendas completa", "Sequência de emails de lançamento"] },
    ],
  },
  {
    title: "A Mentoria",
    label: "Degrau 4",
    content: [
      { type: "sub", text: "R$12.000 — JÁ EXISTE" },
      { type: "p", text: "O produto é o mesmo. O que muda é PARA QUEM é vendido e COMO a pessoa chega até aqui." },
      { type: "h3", text: "Hoje vs Com a Escada" },
      { type: "list", items: [
        "Quem chega na sessão: Hoje → Pessoa que nunca ouviu falar | Com a Escada → Já baixou material, comprou ebook, assistiu webinar, talvez fez o curso",
        "Nível de confiança: Hoje → Zero | Com a Escada → Alto — já conhece, já confia, já teve resultado",
        "Taxa de fechamento: Hoje → 10% a 20% | Com a Escada → 30% a 50%",
        "Esforço na call: Hoje → Muito alto | Com a Escada → Baixo — a pessoa já quer",
        "Objeção principal: Hoje → \"Não te conheço, por que pagaria R$12k?\" | Com a Escada → \"Já vi que funciona. Quando começo?\"",
      ]},
      { type: "quote", text: "O problema nunca foi o produto — foi o caminho até ele." },
      { type: "h3", text: "Entregáveis" },
      { type: "list", items: ["Página de aplicação", "Script do setter", "Script da sessão estratégica", "Emails de convite para aplicação"] },
    ],
  },
  {
    title: "O Grupo de Alto Nível",
    label: "Degrau 5",
    content: [
      { type: "sub", text: "R$25.000 a R$50.000 — FUTURO" },
      { type: "p", text: "Um grupo exclusivo de donos de barbearia que já faturam alto (R$30.000+/mês). Encontros presenciais, acesso direto ao Guilherme, visitas a barbearias de referência." },
      { type: "p", text: "10 a 20 donos de barbearia." },
      { type: "h3", text: "Quando construir" },
      { type: "p", text: "12 a 18 meses, quando houver base de alunos com resultados documentados." },
      { type: "h3", text: "Por agora" },
      { type: "p", text: "Começar a gravar depoimentos em vídeo dos melhores alunos." },
    ],
  },
  {
    title: "A Comunidade Mensal",
    label: "Degrau 6",
    content: [
      { type: "sub", text: "R$97/mês — Receita Recorrente" },
      { type: "p", text: "Grupo fechado onde donos de barbearia pagam R$97/mês para conteúdo exclusivo, lives mensais, templates, e rede de contatos." },
      { type: "h3", text: "A Matemática da Recorrência" },
      { type: "list", items: ["100 membros × R$97 = R$9.700/mês", "300 membros × R$97 = R$29.100/mês", "500 membros × R$97 = R$48.500/mês"] },
      { type: "p", text: "Entra TODO MÊS, independente de lançamento, independente de sessão estratégica." },
      { type: "quote", text: "Toda semana que passa sem uma comunidade rodando, você está deixando dinheiro na mesa." },
      { type: "h3", text: "Entregáveis" },
      { type: "list", items: ["Grupo configurado (plataforma)", "Calendário de conteúdo mensal", "Página de vendas da comunidade", "Automação de onboarding", "Cobrança recorrente configurada"] },
    ],
  },
  {
    title: "De Desconhecido a Cliente Premium",
    label: "A jornada",
    content: [
      { type: "h3", text: "Estações da Jornada" },
      { type: "list", items: [
        "Desconhecido → Contato: Reels / Anúncio → Baixa isca → Entra na lista (Grátis) — Gatilho: Curiosidade",
        "Contato → Comprador: Email 5 ou retargeting → Compra ebook (R$47) — Gatilho: Confiança inicial",
        "Comprador → Aluno: Emails + webinar → Compra curso (R$1.497) — Gatilho: Comprometimento",
        "Aluno → Mentorado: Implementou, bateu teto → Aplica mentoria (R$12.000) — Gatilho: Ambição",
      ]},
      { type: "h3", text: "Detalhes de cada transição" },
      { type: "list", items: [
        "0→1: Os 5 emails automáticos — Email 1: Entrega do material. Email 2: Maior erro dos donos. Email 3: Caso de sucesso. Email 4: Convite para próximo passo. Email 5: Última chance + escassez.",
        "1→2: Página de vendas + bump + upsell — Página de vendas do ebook com prova social, order bump (checklist extra), e página de upsell (mini-curso completo).",
        "2→3: Webinar de 60 min com oferta — Webinar ao vivo ou gravado: 40 min de conteúdo transformador + 20 min de oferta do programa completo com bônus exclusivos.",
        "3→4: Funil de aplicação + setter + sessão — Página de aplicação qualificadora → setter faz pré-call → sessão estratégica com Guilherme → fechamento.",
      ]},
    ],
  },
  {
    title: "A História que Vende Sozinha",
    label: "O personagem",
    content: [
      { type: "h3", text: "Timeline" },
      { type: "list", items: [
        "2017 — 18 anos. Zona Leste de São Paulo. Abre a barbearia do zero.",
        "Ponto baixo — Quase fecha. Sem grana, sem conexão, sem formação.",
        "Virada — Descobre que o segredo não era cortar melhor, era GERIR melhor.",
        "Crescimento — Faz faculdade de administração enquanto opera o negócio.",
        "Hoje — Top 16 de São Paulo. 4.7 estrelas. MVP Education. Mentoria de R$12k.",
      ]},
      { type: "p", text: "Isso não é marketing — isso é verdade. E verdade vende mais que qualquer técnica." },
      { type: "h3", text: "Manifesto" },
      { type: "p", text: "Nós acreditamos que todo barbeiro que teve a coragem de abrir seu próprio negócio merece saber como fazer esse negócio dar certo." },
      { type: "p", text: "Não com teoria de MBA. Com o sistema que funciona na barbearia real, na rua real, com o cliente real." },
      { type: "p", text: "Nós somos a geração de barbeiros que não aceita mais trabalhar 14 horas por dia pra ganhar menos que o funcionário de shopping." },
      { type: "h3", text: "A Linha na Areia" },
      { type: "quote", text: "Barbearia não é hobby. Não é trampo. É EMPRESA. Se você trata como empresa, ela te paga como empresa. Se trata como bico, ela te paga como bico." },
      { type: "p", text: "Essa frase polariza. Os medianos se afastam. Os ambiciosos se aproximam. Isso é intencional." },
    ],
  },
  {
    title: "Os 3 Tipos de Público",
    label: "De onde vêm os clientes",
    content: [
      { type: "list", items: [
        "NÃO CONTROLADO — Posts orgânicos, buscas no Google, indicações. Orgânico: posts todo dia, sempre manda para a isca.",
        "CONTROLADO — Anúncios pagos no Instagram/Facebook. R$50-100/dia em anúncios direcionando para a isca.",
        "SEU — Lista de emails e WhatsApp. O mais valioso. Pode contatar a qualquer momento, sem pagar nada. Cada contato vale ~R$1/mês.",
      ]},
    ],
  },
  {
    title: "O Motor Gratuito",
    label: "Conteúdo",
    content: [
      { type: "h3", text: "Calendário Semanal" },
      { type: "list", items: [
        "Seg — Dica rápida",
        "Ter — História",
        "Qua — Bastidores",
        "Qui — Depoimento",
        "Sex — Educativo",
        "Sáb — Lifestyle",
        "Dom — Descanso",
      ]},
      { type: "h3", text: "Exemplos de Ganchos" },
      { type: "list", items: [
        "3 motivos pelos quais sua barbearia não cresce (e não tem nada a ver com o seu corte)",
        "O erro de R$5.000 que todo dono de barbearia comete no primeiro ano",
        "Como cobrar R$80 no corte sem perder um cliente",
        "Seu melhor barbeiro vai sair. Quando isso acontecer, você tá preparado?",
        "Por que barbearias na mesma rua faturam 5x diferente",
        "A planilha que mudou minha barbearia (e que você pode copiar grátis)",
      ]},
      { type: "quote", text: "Cada vídeo termina com: \"Quer o checklist grátis? Link na bio.\"" },
    ],
  },
  {
    title: "Roadmap de Implementação",
    label: "O plano",
    content: [
      { type: "p", text: "Cada fase desbloqueia a seguinte." },
      { type: "h3", text: "Fase 1 — A Fundação (Semanas 1-4)" },
      { type: "list", items: ["Nomear método", "Criar lead magnet", "Landing page", "5 emails automáticos", "Ferramenta de email"] },
      { type: "h3", text: "Fase 2 — Produto de Entrada (Semanas 4-8)" },
      { type: "list", items: ["Ebook/mini-curso", "Funil de vendas", "Anúncios pagos", "Conteúdo orgânico"] },
      { type: "h3", text: "Fase 3 — Programa Completo (Semanas 8-16)" },
      { type: "list", items: ["8 módulos do curso", "Webinar de lançamento", "Vender para base existente"] },
      { type: "h3", text: "Fase 4 — Mentoria Otimizada (Semanas 12-20)" },
      { type: "list", items: ["Funil de aplicação", "Vender para qualificados", "Documentar resultados"] },
      { type: "h3", text: "Fase 5 — Recorrência e Escala (Mês 5+)" },
      { type: "list", items: ["Comunidade mensal", "Escalar tráfego", "Emails diários"] },
    ],
  },
  {
    title: "Cenário Conservador",
    label: "Os números",
    content: [
      { type: "p", text: "Premissas realistas, não promessas." },
      { type: "h3", text: "Premissas" },
      { type: "list", items: [
        "Investimento em anúncios: R$3.000/mês (R$100/dia)",
        "Custo por lead: R$6",
        "Leads por mês: 500",
        "Compradores frontend (5%): 25/mês",
      ]},
      { type: "h3", text: "Projeção Mensal no Mês 12" },
      { type: "list", items: [
        "Produto de Entrada + Bumps: R$2.250",
        "Curso Barbearia de Elite: R$7.500-12.000",
        "Mentoria: R$12.000-24.000",
        "Comunidade (~150 membros): R$14.550",
      ]},
      { type: "p", text: "TOTAL MENSAL: R$36.000 — R$53.000" },
      { type: "p", text: "TOTAL ANUAL: R$350.000 — R$550.000" },
      { type: "p", text: "Esses números são conservadores. Não é cenário de sonho — é o que acontece quando cada peça da escada funciona." },
    ],
  },
  {
    title: "Próximos Passos",
    label: "Decisão",
    content: [
      { type: "h3", text: "Opção 1: Continuar como está" },
      { type: "p", text: "Depender só da sessão estratégica. Funciona, mas o crescimento é lento e depende 100% do seu tempo." },
      { type: "h3", text: "Opção 2: Montar sozinho" },
      { type: "p", text: "É possível. Vai levar mais tempo, vai ter mais erro, mas é possível. Tudo que está nesse documento pode ser pesquisado e implementado." },
      { type: "h3", text: "Opção 3: A gente monta junto [Recomendado]" },
      { type: "p", text: "Eu pego essa arquitetura inteira e transformo em realidade. Você foca no que faz de melhor: ensinar barbeiros a construir negócios de verdade. Eu cuido da engenharia por trás." },
      { type: "sub", text: "DT Coproduções" },
      { type: "h", text: "De barbeiro a empresário." },
      { type: "p", text: "Gabriel Di Tullio" },
    ],
  },
];

const renderBlock = (block: { type: string; text?: string; items?: string[] }, i: number) => {
  switch (block.type) {
    case "h":
      return <h2 key={i} className="text-2xl font-bold my-3">{block.text}</h2>;
    case "h3":
      return <h3 key={i} className="text-lg font-bold mt-4 mb-2">{block.text}</h3>;
    case "sub":
      return <p key={i} className="text-sm text-gray-500 my-1">{block.text}</p>;
    case "quote":
      return <blockquote key={i} className="border-l-4 border-gray-300 pl-4 my-3 italic text-gray-700">{block.text}</blockquote>;
    case "list":
      return (
        <ul key={i} className="list-disc pl-6 my-2 space-y-1">
          {block.items?.map((item, j) => <li key={j} className="text-sm leading-relaxed">{item}</li>)}
        </ul>
      );
    default:
      return <p key={i} className="text-sm leading-relaxed my-2">{block.text}</p>;
  }
};

const Export = () => (
  <div className="min-h-screen bg-white text-black p-8 max-w-3xl mx-auto font-sans">
    <h1 className="text-3xl font-bold mb-2">MVP Education — Escada de Valor</h1>
    <p className="text-sm text-gray-500 mb-8">Documento de exportação · Todos os 22 slides</p>

    {slides.map((slide, i) => (
      <section key={i} className="mb-8">
        {i > 0 && <hr className="border-gray-300 mb-6" />}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
          SLIDE {String(i + 1).padStart(2, "0")}
        </p>
        {slide.label && <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{slide.label}</p>}
        <h2 className="text-xl font-bold mb-3">{slide.title}</h2>
        {slide.content.map((block, j) => renderBlock(block, j))}
      </section>
    ))}

    <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
      Documento confidencial · DT Coproduções · 2026
    </footer>
  </div>
);

export default Export;
