import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export default function NichosMercado() {
  const [progress, setProgress] = useState(0);
  const titleRef = useRef(null);

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

  const niches1 = [
    "Lojas de Veículos", "Infoprodutores", "Gráficas", "Advogados", 
    "Pousadas/Hotéis", "Clínicas Médicas", "Clínicas de Estética", "Restaurantes",
    "Imobiliárias", "Concessionárias", "Construtoras", "Corretores"
  ];

  const niches2 = [
    "Farmácias", "Supermercados", "Pet Shop", "Loja de Roupas", 
    "E-commerce", "Escolas", "Barbearias", "Academias",
    "Dentistas", "Agências de Marketing", "Contabilidade", "Óticas"
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-[#FAFAF9] bg-clean-dots text-gray-900 border-y border-gray-200/70">
      <div className="max-w-5xl mx-auto px-6 text-center mb-8">
        {/* Título com Efeito de Pintura no Scroll (da esquerda para a direita) */}
        <div ref={titleRef} className="relative inline-block select-none">
          {/* Camada Base: Cinza claro / baixa opacidade */}
          <h2 className="text-xl md:text-3xl font-normal text-[#0F2918]/20 transition-colors">
            Sim, funciona em <span className="italic font-serif text-[#165B2E]/25">qualquer tipo de negócio</span>:
          </h2>

          {/* Camada Ativa: Cores sólidas originais preenchidas progressivamente no scroll */}
          <h2 
            aria-hidden="true"
            className="absolute inset-0 text-xl md:text-3xl font-normal text-[#0F2918] pointer-events-none"
            style={{
              clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              WebkitClipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              transition: 'clip-path 0.12s ease-out, -webkit-clip-path 0.12s ease-out',
              willChange: 'clip-path'
            }}
          >
            Sim, funciona em <span className="italic font-serif text-[#165B2E]">qualquer tipo de negócio</span>:
          </h2>
        </div>
      </div>

      <div className="flex overflow-hidden py-2 mb-3">
        <div className="animate-marquee flex items-center gap-3">
          {[...niches1, ...niches1].map((niche, idx) => (
            <div key={idx} className="flex items-center gap-2.5 bg-white text-gray-800 px-5 py-2.5 rounded-full text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-200/80 shrink-0 select-none hover:border-[#165B2E]/40 transition-colors">
              <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
              </div>
              <span>{niche}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex overflow-hidden py-2">
        <div className="animate-marquee flex items-center gap-3" style={{ animationDirection: 'reverse' }}>
          {[...niches2, ...niches2].map((niche, idx) => (
            <div key={idx} className="flex items-center gap-2.5 bg-white text-gray-800 px-5 py-2.5 rounded-full text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-200/80 shrink-0 select-none hover:border-[#165B2E]/40 transition-colors">
              <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
              </div>
              <span>{niche}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
