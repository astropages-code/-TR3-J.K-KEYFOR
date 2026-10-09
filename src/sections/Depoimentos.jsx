import React from 'react';
import { Star } from 'lucide-react';

export default function Depoimentos() {
  const testimonials = [
    {
      name: "Ede Santos",
      role: "Diretor da Allora Vita",
      text: "Desde que começamos a utilizar os serviços da Keyfor, nossa empresa deu um salto na comunicação com os clientes. Além disso, o suporte é simplesmente impecável. Sempre que precisamos de algo, a equipe está disponível."
    },
    {
      name: "Ede Santos",
      role: "Diretor da Allora Vita",
      text: "Desde que começamos a utilizar os serviços da Keyfor, nossa empresa deu um salto na comunicação com os clientes. Além disso, o suporte é simplesmente impecável. Sempre que precisamos de algo, a equipe está disponível."
    },
    {
      name: "Ede Santos",
      role: "Diretor da Allora Vita",
      text: "Desde que começamos a utilizar os serviços da Keyfor, nossa empresa deu um salto na comunicação com os clientes. Além disso, o suporte é simplesmente impecável. Sempre que precisamos de algo, a equipe está disponível."
    },
    {
      name: "Ede Santos",
      role: "Diretor da Allora Vita",
      text: "Desde que começamos a utilizar os serviços da Keyfor, nossa empresa deu um salto na comunicação com os clientes. Além disso, o suporte é simplesmente impecável. Sempre que precisamos de algo, a equipe está disponível."
    }
  ];

  return (
    <section className="w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 pt-4 pb-[96px] px-6 sm:px-10 lg:px-[64px]" id="depoimentos">
      <div className="max-w-[1280px] mx-auto">
        {/* Título da Seção com Ênfase Editorial */}
        <div className="text-center mb-12">
          <h3 className="font-normal text-2xl md:text-3xl text-[#0F2918]">
            Quem usa, <span className="italic font-serif text-[#165B2E]">recomenda</span>:
          </h3>
        </div>

        {/* Grid de 4 Cards Brancos com Efeito de Pressionar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between cursor-pointer select-none transition-all duration-200 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:scale-[0.98] hover:translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D2F69A] flex items-center justify-center font-bold text-[#0F2918] text-sm shadow-xs">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-none">{t.name}</h4>
                      <span className="text-xs text-gray-500 mt-0.5 block">{t.role}</span>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
