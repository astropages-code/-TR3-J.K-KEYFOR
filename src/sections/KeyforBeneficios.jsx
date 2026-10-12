import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Mic, 
  Paperclip, 
  MessageSquare, 
  Users, 
  LayoutGrid, 
  Package,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function KeyforBeneficios() {
  const cards = [
    {
      icon: MessageCircle,
      title: "Assistente virtual",
      highlight: "online 24/7",
      description: "Nós vamos criar um atendimento com IA personalizado de acordo com seu negócio que trabalhe incansavelmente e agirá como um humano: que entende sentimentos, contexto, processa demandas complexas, fornece respostas personalizadas e vende para seu cliente."
    },
    {
      icon: Calendar,
      title: "Integração com agenda",
      highlight: "& Redução de custos",
      description: "Nossa IA interage com sua agenda com um fluxo eficiente. Perfeito para todo o tipo de empresa e profissionais. Diga adeus aos altos custos com funcionários. Reduza despesas com salários e encargos."
    },
    {
      icon: Mic,
      title: "IA que escuta e",
      highlight: "grava áudio",
      description: "Com a tecnologia Whisper®, que permite que nossa IA entenda e responda áudios, você terá conversas mais naturais, humanas e eficazes. Somos os primeiros no Brasil com uma IA capaz de ouvir e responder em áudios."
    },
    {
      icon: Paperclip,
      title: "Idiomas e Mídias",
      highlight: "variadas",
      description: "Muito mais do que chatbots tradicionais. Envie mensagens com texto, áudio, vídeo, documentos, perguntas, responda por áudio, gerencie calendários e muito mais. A Keyfor IA se comunica em qualquer idioma."
    },
    {
      icon: MessageSquare,
      title: "Chat Ao vivo &",
      highlight: "Intervenção Manual",
      description: "Veja suas conversas em tempo real. Gerencie conversar em tempo real e intervenha, quando necessário, para garantir o melhor atendimento."
    },
    {
      icon: Users,
      title: "Gestão de Contatos",
      highlight: "e Tags",
      description: "Gerencie seus contatos com facilidade. Crie campanhas personalizadas e exporte relatórios precisos para apoiar suas decisões. Utilize tags para classificar seus atendimentos estrategicamente como 'Lead quente', 'aguardando resposta' e etc."
    },
    {
      icon: LayoutGrid,
      title: "Dashboard & CRM",
      highlight: "Completo",
      description: "Você terá acesso a um CRM completo. Monitore e entenda o desempenho das suas ações de comunicação em tempo real, identificando pontos de melhoria e maximizando seus resultados."
    },
    {
      icon: Package,
      title: "Orçamentos,",
      highlight: "produtos e serviços",
      description: "Nossa IA cuida dos orçamentos da sua empresa! Nós programamos ela para fornecer cotações precisas e instantâneas de estoque, simplificando o processo de vendas. Venda ebooks, infoprodutos, serviços online, reservas e agendamentos, produtos de varejo e mais."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManuallyStopped, setIsManuallyStopped] = useState(false);
  const carouselRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft } = carouselRef.current;
    const cardWidth = carouselRef.current.children[0]?.clientWidth || 350;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), cards.length - 1));
  };

  const scrollToIndex = (index, isManual = false) => {
    if (isManual) {
      setIsManuallyStopped(true);
    }
    if (!carouselRef.current) return;
    const clamped = Math.min(Math.max(index, 0), cards.length - 1);
    const cardWidth = carouselRef.current.children[0]?.clientWidth || 350;
    const gap = 24;
    carouselRef.current.scrollTo({
      left: clamped * (cardWidth + gap),
      behavior: 'smooth'
    });
    setActiveIndex(clamped);
  };

  // Autoplay contínuo a cada 4.5s com pausa no hover e cancelamento em interação manual
  useEffect(() => {
    if (isPaused || isManuallyStopped) {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % cards.length;
        if (carouselRef.current) {
          const cardWidth = carouselRef.current.children[0]?.clientWidth || 350;
          const gap = 24;
          carouselRef.current.scrollTo({
            left: next * (cardWidth + gap),
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPaused, isManuallyStopped, cards.length]);

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden" 
      id="funcionalidades"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* 1. HEADER CENTRALIZADO COM ITÁLICO EDITORIAL */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h2 className="font-normal text-[30px] sm:text-[38px] text-[#0F2918] leading-[1.25] max-w-[840px] text-center">
            Não somos um chatbot, a Keyfor IA <span className="italic font-serif text-[#165B2E]">atende</span>,{' '}
            <span className="italic font-serif text-[#165B2E]">engaja</span>,{' '}
            <span className="italic font-serif text-[#165B2E]">impressiona</span> e{' '}
            <span className="italic font-serif text-[#165B2E]">vende</span> por você!
          </h2>

          <p className="font-normal text-[15px] text-gray-600 mt-4 max-w-[600px] text-center">
            Entenda como funciona e os benefícios da Keyfor IA:
          </p>
        </div>

        {/* 2. CONTAINER DO CARROSSEL COM SETAS DE NAVEGAÇÃO */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative group max-w-6xl mx-auto"
        >
          {/* Seta Esquerda */}
          <button 
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1, true)}
            disabled={activeIndex === 0}
            aria-label="Card anterior"
            className="absolute -left-2 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#0F2918] hover:bg-[#D2F69A] hover:border-[#bfe87e]/60 active:scale-95 transition-all duration-150 disabled:opacity-25 disabled:pointer-events-none cursor-pointer select-none"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Seta Direita */}
          <button 
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1, true)}
            disabled={activeIndex === cards.length - 1}
            aria-label="Próximo card"
            className="absolute -right-2 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#0F2918] hover:bg-[#D2F69A] hover:border-[#bfe87e]/60 active:scale-95 transition-all duration-150 disabled:opacity-25 disabled:pointer-events-none cursor-pointer select-none"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Trilho de Cards em Linha Única */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="w-[300px] sm:w-[350px] md:w-[370px] shrink-0 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between snap-start text-left select-none"
                >
                  <div>
                    {/* Ícone em Verde-Limão */}
                    <div className="w-12 h-12 rounded-2xl bg-[#D2F69A] flex items-center justify-center mb-6 shadow-xs">
                      <IconComponent className="w-5 h-5 text-[#0F2918]" />
                    </div>

                    {/* Título & Destaque */}
                    <h3 className="font-bold text-[16px] text-gray-900 leading-[1.3]">
                      {item.title}
                    </h3>
                    <div className="font-semibold text-[14px] text-[#165B2E] mt-1 mb-4">
                      {item.highlight}
                    </div>

                    {/* Descrição */}
                    <p className="font-normal text-[13px] text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. INDICADOR DE POSIÇÃO (8 TRAÇOS COM DESTAQUE SUAVE EM VERDE-LIMÃO) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i, true)}
                aria-label={`Ir para o card ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer select-none ${
                  activeIndex === i 
                    ? 'w-7 sm:w-8 bg-[#84CC16] shadow-xs' 
                    : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 4. BLOCO DE TRANSIÇÃO CENTRALIZADO ABAIXO DO CARROSSEL */}
        <div className="mt-16 sm:mt-20 text-center flex flex-col items-center">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-[30px] text-[#0F2918] leading-[1.25] mb-6 max-w-md text-center">
            E muuuuuuito mais funcionalidades...
          </h3>

          <a
            href="#planos"
            style={{ borderRadius: '9999px' }}
            className="inline-flex items-center justify-between gap-4 bg-[#D2F69A] hover:bg-[#c6f387] active:scale-95 hover:scale-[0.98] text-[#0F2918] font-bold text-sm sm:text-[15px] pl-8 pr-3 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-150 group border border-[#bfe87e]/50 select-none cursor-pointer"
          >
            <span>Passar para o próximo nível</span>
            <span className="w-8 h-8 rounded-full bg-[#0F2918] text-[#D2F69A] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
