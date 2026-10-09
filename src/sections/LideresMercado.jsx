import React from 'react';

export default function LideresMercado() {
  const logos = [
    { name: 'Melissa', src: '/assets/logos/melissa.png' },
    { name: 'Los Belgas', src: '/assets/logos/los-belgas.png' },
    { name: 'Orcasa Netimóveis', src: '/assets/logos/orcasa.png' },
    { name: 'TG Gazola', src: '/assets/logos/gazola.png' },
    { name: 'Fiat Veloe', src: '/assets/logos/fiat-velore.png' },
    { name: 'Líder Chevrolet', src: '/assets/logos/chevrolet.png' },
  ];

  return (
    <section className="w-full bg-[#FAFAF9] bg-clean-dots py-16 px-6 border-b border-gray-200/60 text-center">
      <div className="max-w-[1280px] mx-auto">
        {/* Título com Ênfase Editorial */}
        <h2 className="font-normal text-2xl md:text-3xl text-[#0F2918] mb-2">
          Escolha um dos <span className="italic font-serif text-[#165B2E]">líderes do mercado</span>:
        </h2>

        {/* Subtítulo */}
        <p className="font-normal text-gray-600 text-sm md:text-base mb-10">
          Enquanto sua concorrência dorme, sua empresa lucra com a <strong className="text-gray-900 font-semibold">Keyfor IA</strong>:
        </p>

        {/* Faixa de Logos */}
        <div className="px-6 md:px-[64px] py-[32px]">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-[48px]">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-[40px] md:h-[48px] lg:h-[56px] w-auto object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 ease-out select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
