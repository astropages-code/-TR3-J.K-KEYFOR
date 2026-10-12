import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

export default function Resultados() {
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

  return (
    <section className="w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 pt-[96px] pb-10 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-[1280px] mx-auto">
        {/* Kicker & Título com Ênfase Editorial e Efeito de Pintura no Scroll */}
        <div className="text-center max-w-3xl mx-auto mb-[48px]">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200/90 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-xs font-semibold text-[#165B2E] uppercase mb-4 select-none">
            <span>RESULTADOS</span>
          </div>

          <div ref={titleRef} className="relative inline-block select-none">
            {/* Camada Base: Cinza claro / baixa opacidade */}
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl text-[#0F2918]/20 leading-[1.25] transition-colors">
              Veja com seus próprios olhos como a Keyfor IA <span className="italic font-serif text-[#165B2E]/25">alavancou as vendas</span> do Ede da Allora Vita:
            </h2>

            {/* Camada Ativa: Cores sólidas originais reveladas progressivamente no scroll */}
            <h2 
              aria-hidden="true"
              className="absolute inset-0 font-normal text-2xl sm:text-3xl md:text-4xl text-[#0F2918] leading-[1.25] pointer-events-none"
              style={{
                clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
                WebkitClipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
                transition: 'clip-path 0.12s ease-out, -webkit-clip-path 0.12s ease-out',
                willChange: 'clip-path'
              }}
            >
              Veja com seus próprios olhos como a Keyfor IA <span className="italic font-serif text-[#165B2E]">alavancou as vendas</span> do Ede da Allora Vita:
            </h2>
          </div>
        </div>

        {/* MOCKUP DE VÍDEO EXPANDIDO (900px) EM CARD BRANCO */}
        <div className="max-w-[900px] mx-auto mb-0">
          <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative">
            {/* Barra superior com 3 pontinhos cinzas */}
            <div className="flex items-center gap-1.5 mb-4 opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            </div>

            {/* Mockup de vídeo interno */}
            <div className="relative aspect-video w-full max-w-[94%] mx-auto bg-[#0F172A] rounded-2xl overflow-hidden border border-gray-200/20 shadow-md flex items-center justify-center group cursor-pointer">
              {/* Marca d'água sutil KEYFOR */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none font-black text-6xl tracking-widest text-white">
                KEYFOR
              </div>

              {/* Botão de Play em Verde-Limão */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-[80px] h-[80px] rounded-full bg-[#D2F69A] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Play className="w-[28px] h-[28px] text-[#0F2918] fill-[#0F2918] ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
