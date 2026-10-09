import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function FiqueTranquilo() {
  return (
    <section className="w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 relative z-10">
      {/* 1. FAIXA SUPERIOR INTEGRADA (com espaço para o card sobreposto) */}
      <div className="w-full pt-[180px] pb-12 px-8 md:px-16 border-b border-gray-200/60 relative z-1">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-2">
          {/* Coluna Esquerda (40%) */}
          <div className="md:col-span-5">
            <h2 className="font-normal text-[32px] md:text-[36px] text-[#0F2918] leading-[1.2]">
              Se sim, <span className="italic font-serif text-[#165B2E]">fique tranquilo!</span>
            </h2>
          </div>

          {/* Coluna Direita (60%) */}
          <div className="md:col-span-7">
            <p className="font-normal text-[14px] text-gray-600 leading-[1.6]">
              De acordo com a conceituada <strong className="font-bold text-[#0F2918]">Harvard Business Review</strong>, responder seu cliente em até 5 minutos aumenta <strong className="font-bold text-[#165B2E]">47%</strong> de chance de concluir sua venda, e responder em até <strong className="font-bold text-[#165B2E]">1 minuto</strong>, aumenta a chance em <strong className="font-bold text-[#165B2E]">400%</strong> na conversão.
            </p>
          </div>
        </div>
      </div>

      {/* 2. CARD PRINCIPAL BRANCO */}
      <div className="py-16 md:py-20 px-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* 3 & 4. MOCKUP DE VÍDEO EM CAMADAS */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-video flex items-center justify-center p-3 md:p-5">
                {/* Camada 0: janela com 3 pontinhos */}
                <div className="absolute inset-0 bg-gray-50/80 rounded-2xl border border-gray-200/60 p-4 flex flex-col justify-start z-0 pointer-events-none">
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-gray-300" />
                    <div className="w-[8px] h-[8px] rounded-full bg-gray-300" />
                    <div className="w-[8px] h-[8px] rounded-full bg-gray-300" />
                  </div>
                </div>

                {/* Camada 1: tela de vídeo */}
                <div className="relative z-10 w-full h-full bg-[#0F172A] rounded-xl border border-gray-200/20 overflow-hidden flex items-center justify-center shadow-md group cursor-pointer">
                  {/* Camada 2: Botão de Play em Verde-Limão */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[76px] h-[76px] rounded-full bg-[#D2F69A] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <Play className="w-[26px] h-[26px] text-[#0F2918] fill-[#0F2918] ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. CONTEÚDO À DIREITA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="font-bold text-[28px] md:text-[32px] text-[#0F2918] leading-[1.2]">
                Conheça por dentro <span className="italic font-serif text-[#165B2E]">a maior ferramenta de automação</span> com IA do mercado!
              </h3>

              <p className="font-normal text-[14px] text-gray-600 leading-[1.6] mt-4">
                Chegou o momento de superar seus concorrentes e aumentar seu lucro com agilidade e eficiência!
              </p>

              {/* BOTÃO CTA PÍLULA VERDE-LIMÃO */}
              <div className="mt-8">
                <a
                  href="#planos"
                  className="inline-flex items-center justify-between bg-[#D2F69A] hover:bg-[#c6f387] active:scale-95 hover:scale-[0.98] text-[#0F2918] font-bold text-[14px] leading-none px-7 py-3.5 rounded-full transition-all duration-150 shadow-md group cursor-pointer select-none border border-[#bfe87e]/40"
                >
                  <span>Quero testar agora!</span>
                  <span className="w-8 h-8 rounded-full bg-[#0F2918] text-[#D2F69A] flex items-center justify-center ml-4 shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
