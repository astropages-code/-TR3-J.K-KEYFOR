import React, { useEffect, useRef, useState } from 'react';

export default function LideresMercado() {
  const [progress, setProgress] = useState(0);
  const titleRef = useRef(null);

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

  const logos = [
    { name: 'Melissa', src: '/assets/logos/melissa.png' },
    { name: 'Los Belgas', src: '/assets/logos/los-belgas.png' },
    { name: 'Orcasa Netimóveis', src: '/assets/logos/orcasa.png' },
    { name: 'TG Gazola', src: '/assets/logos/gazola.png' },
    { name: 'Fiat Veloe', src: '/assets/logos/fiat-velore.png' },
    { name: 'Líder Chevrolet', src: '/assets/logos/chevrolet.png' },
  ];

  // Duplicação exata da lista para um loop contínuo e invisível
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-[#FAFAF9] bg-clean-dots py-16 px-6 border-b border-gray-200/60 text-center overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Título com Efeito de Pintura no Scroll (da esquerda para a direita) */}
        <div ref={titleRef} className="relative inline-block max-w-4xl mx-auto mb-2 select-none">
          {/* Camada Base: Cinza claro / baixa opacidade */}
          <h2 className="font-normal text-2xl md:text-3xl text-[#0F2918]/20 transition-colors">
            Escolha um dos <span className="italic font-serif text-[#165B2E]/25">líderes do mercado</span>:
          </h2>

          {/* Camada Ativa: Preenchimento em cores sólidas revelado progressivamente no scroll */}
          <h2 
            aria-hidden="true"
            className="absolute inset-0 font-normal text-2xl md:text-3xl text-[#0F2918] pointer-events-none"
            style={{
              clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              WebkitClipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              transition: 'clip-path 0.12s ease-out, -webkit-clip-path 0.12s ease-out',
              willChange: 'clip-path'
            }}
          >
            Escolha um dos <span className="italic font-serif text-[#165B2E]">líderes do mercado</span>:
          </h2>
        </div>

        {/* Subtítulo */}
        <p className="font-normal text-gray-600 text-sm md:text-base mb-10">
          Enquanto sua concorrência dorme, sua empresa lucra com a <strong className="text-gray-900 font-semibold">Keyfor IA</strong>:
        </p>

        {/* Faixa de Logos com Marquee Infinito e Máscara de Degradê Lateral */}
        <div 
          className="relative w-full overflow-hidden py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <div 
            className="flex flex-nowrap items-center select-none"
            style={{
              width: 'max-content',
              animation: 'marquee 32s linear infinite',
              willChange: 'transform'
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center shrink-0 px-8 md:px-12"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-[40px] md:h-[48px] lg:h-[56px] w-auto object-contain opacity-60 hover:opacity-100 grayscale transition-opacity duration-300 select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
