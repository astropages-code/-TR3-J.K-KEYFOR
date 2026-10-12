import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function Desafios() {
  const [progress, setProgress] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Inicia a pintura quando o título atinge 85% da altura da viewport (entra na tela)
      const start = windowHeight * 0.85;
      // Conclui a pintura quando o título atinge 38% da viewport (terço superior/centro)
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

  const painPointsCol1 = [
    "Atendimento lento e ineficiente",
    "Perda de clientes por falta de respostas",
    "Vários números de WhatsApp",
    "Time de atendimento desmotivado",
    "Problemas para bater metas"
  ];

  const painPointsCol2 = [
    "Confusão no time comercial",
    "Cliente com péssimas experiências",
    "Custo elevado com funcionários",
    "Dificuldade em escalar",
    "Entre outros..."
  ];

  return (
    <section className="bg-[#FAFAF9] bg-clean-dots text-gray-900 pt-16 pb-0 px-6 relative z-20 overflow-visible">
      <div className="max-w-5xl mx-auto overflow-visible">
        {/* Título da Seção com Efeito de Pintura no Scroll (da esquerda para a direita) */}
        <div ref={titleRef} className="text-center mb-10 md:mb-12 relative max-w-4xl mx-auto select-none">
          {/* Camada Base: Cinza claro / baixa opacidade */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight text-[#0F2918]/20 transition-colors">
            Você tem algum desses <span className="italic font-serif text-[#165B2E]/25">desafios</span> na sua empresa?
          </h2>

          {/* Camada Ativa: Preenchimento em cores sólidas revelado progressivamente no scroll */}
          <h2 
            aria-hidden="true"
            className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight text-[#0F2918] pointer-events-none"
            style={{
              clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              WebkitClipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              transition: 'clip-path 0.12s ease-out, -webkit-clip-path 0.12s ease-out',
              willChange: 'clip-path'
            }}
          >
            Você tem algum desses <span className="italic font-serif text-[#165B2E]">desafios</span> na sua empresa?
          </h2>
        </div>

        {/* Card Branco com Efeito de Sobreposição na Seção Inferior (-100px) */}
        <div className="relative z-10 -mb-[100px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white text-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
            {/* Coluna 1 */}
            <div className="space-y-5">
              {painPointsCol1.map((point, index) => (
                <div key={index} className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-[#D2F69A] flex items-center justify-center shrink-0 shadow-xs">
                    <X className="w-4 h-4 text-[#0F2918] stroke-[3]" />
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Coluna 2 */}
            <div className="space-y-5">
              {painPointsCol2.map((point, index) => (
                <div key={index} className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-[#D2F69A] flex items-center justify-center shrink-0 shadow-xs">
                    <X className="w-4 h-4 text-[#0F2918] stroke-[3]" />
                  </div>
                  <span className="text-gray-700 text-xs md:text-sm font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
