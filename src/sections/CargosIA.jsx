import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export default function CargosIA() {
  const [progress, setProgress] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const titleRef = useRef(null);
  const cardsContainerRef = useRef(null);

  // Efeito de Pintura do Título no Scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Inicia a pintura quando o título atinge 85% da viewport
      const start = windowHeight * 0.85;
      // Conclui a pintura quando o título atinge 38% da viewport
      const end = windowHeight * 0.38;

      const current = rect.top;
      const rawProgress = (start - current) / (start - end);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Observador de Entrada em Cascata dos Cards (Esquerda para a Direita com re-execução ao rolar)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        } else {
          setCardsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (cardsContainerRef.current) {
      observer.observe(cardsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roles = [
    {
      title: "Suporte",
      tasks: [
        "Responde dúvidas", 
        "Resolve problemas", 
        "Orienta usuários", 
        "Envia links e instruções"
      ]
    },
    {
      title: "Atendente",
      tasks: [
        "Agenda reuniões", 
        "Envia lembretes", 
        "Coleta informações", 
        "Passa para humano"
      ]
    },
    {
      title: "Vendedor",
      tasks: [
        "Qualifica leads", 
        "Faz ofertas diretas", 
        "Recupera compras", 
        "Fecha vendas"
      ]
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-[#FAFAF9] bg-clean-dots text-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Título com Efeito de Pintura no Scroll (da esquerda para a direita) */}
        <div ref={titleRef} className="text-center mb-14 relative inline-block w-full select-none">
          {/* Camada Base: Cinza claro / baixa opacidade */}
          <h2 className="text-2xl md:text-4xl font-normal text-[#0F2918]/20 leading-tight transition-colors">
            Esses são alguns <span className="italic font-serif text-[#165B2E]/25">cargos que a Keyfor IA pode ocupar</span> no seu negócio:
          </h2>

          {/* Camada Ativa: Preenchimento em cores sólidas revelado progressivamente no scroll */}
          <h2 
            aria-hidden="true"
            className="absolute inset-0 text-2xl md:text-4xl font-normal text-[#0F2918] leading-tight pointer-events-none"
            style={{
              clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              WebkitClipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              transition: 'clip-path 0.12s ease-out, -webkit-clip-path 0.12s ease-out',
              willChange: 'clip-path'
            }}
          >
            Esses são alguns <span className="italic font-serif text-[#165B2E]">cargos que a Keyfor IA pode ocupar</span> no seu negócio:
          </h2>
        </div>

        {/* Grade de 3 Cards com Entrada em Cascata da Esquerda para a Direita */}
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {roles.map((role, index) => (
            <div
              key={index}
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateX(0)' : 'translateX(-48px)',
                transition: cardsVisible
                  ? `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 160}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 160}ms`
                  : 'opacity 0.2s ease-out, transform 0.2s ease-out'
              }}
              className={`h-full ${cardsVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              {/* Card Branco com Efeito de Pressionar / Afundar no Hover */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:translate-y-[2px] hover:scale-[0.985] active:translate-y-[3px] active:scale-[0.97] active:shadow-none transition-all duration-200 ease-out flex flex-col items-center h-full cursor-pointer select-none">
                <h3 className="text-lg font-bold text-[#0F2918] mb-5">
                  {role.title}
                </h3>
                <div className="w-full space-y-2.5">
                  {role.tasks.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2.5 bg-[#F4F4F3] text-gray-800 px-4 py-2.5 rounded-full font-medium text-xs shadow-none"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card de Destaque - Mockup do Celular */}
        <div className="flex justify-center items-center my-10 md:my-14">
          <div className="w-full max-w-xl md:max-w-2xl rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(15,41,24,0.10),0_10px_20px_rgba(0,0,0,0.04)]">
            <img 
              src="/assets/phone-mockup.png" 
              alt="Smartphone com Keyfor IA" 
              className="w-full h-full object-cover object-center block select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
