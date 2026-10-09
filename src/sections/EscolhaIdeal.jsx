import React from 'react';

export default function EscolhaIdeal() {
  return (
    <section className="relative w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 py-[96px] px-6 sm:px-10 lg:px-[64px] overflow-hidden" id="metricas">
      {/* Detalhes sutis em verde claro nos cantos */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 rounded-full bg-[#D2F69A]/20 blur-3xl pointer-events-none select-none" />
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full bg-[#D2F69A]/20 blur-3xl pointer-events-none select-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* 2. CÍRCULO "IA" NO TOPO COM VERDE-LIMÃO */}
        <div className="flex justify-center mb-[64px]">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center">
            {/* Anel Externo */}
            <div className="absolute inset-0 rounded-full border border-[#84CC16]/20 pointer-events-none" />

            {/* Anel do Meio */}
            <div className="absolute w-[140px] h-[140px] rounded-full border border-[#84CC16]/35 pointer-events-none" />

            {/* Círculo Interno em Verde-Limão */}
            <div className="relative w-[100px] h-[100px] rounded-full bg-[#D2F69A] flex items-center justify-center shadow-md">
              <span className="font-bold text-[24px] text-[#0F2918] tracking-wider">
                IA
              </span>
            </div>
          </div>
        </div>

        {/* 3. GRID 2 COLUNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[80px] items-center mb-[80px]">
          {/* TÍTULO COM ITÁLICO EDITORIAL */}
          <div className="lg:col-span-5">
            <h2 className="font-normal text-[32px] sm:text-[36px] md:text-[40px] text-[#0F2918] leading-[1.2]">
              Por que somos a <span className="italic font-serif text-[#165B2E]">escolha ideal</span> de nossos clientes?
            </h2>
          </div>

          {/* PARÁGRAFOS */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-normal text-[15px] text-gray-600 leading-[1.7]">
              <strong className="font-bold text-[#0F2918]">Somos pioneiros no uso de IA para humanizar de forma automática e</strong>{' '}
              <strong className="font-bold text-[#0F2918]">otimizar conversas no WhatsApp no Brasil</strong>. E o melhor é que você não vai precisar{' '}
              <strong className="font-bold text-[#0F2918]">apertar nenhum botão</strong> ou criar{' '}
              <strong className="font-bold text-[#0F2918]">fluxos exaustivos de bot</strong>. Você terá uma{' '}
              <strong className="font-bold text-[#0F2918]">equipe exclusiva</strong> para fazer todo o processo pra você.
            </p>

            <p className="font-normal text-[15px] text-gray-600 leading-[1.7]">
              <strong className="font-bold text-[#0F2918]">Em menos de 48 horas</strong> nós vamos fazer seu WhatsApp se transformar em uma{' '}
              <strong className="font-bold text-[#0F2918]">máquina de vendas</strong>!
            </p>
          </div>
        </div>

        {/* DONUTS DE PORCENTAGEM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Círculo 1: 47% */}
          <div className="flex flex-col items-center">
            <span className="font-normal text-[14px] text-gray-600 mb-4">
              A <strong className="font-bold text-[#0F2918]">Keyfor IA</strong> <strong className="font-bold text-[#0F2918]">aumenta</strong>
            </span>

            <div className="relative w-[220px] h-[220px] flex items-center justify-center my-2">
              <svg width="220" height="220" viewBox="0 0 220 220" className="-rotate-90">
                <circle cx="110" cy="110" r="100" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                <circle
                  cx="110"
                  cy="110"
                  r="100"
                  fill="none"
                  stroke="#84CC16"
                  strokeWidth="12"
                  strokeDasharray="295.3 628.3"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-[42px] text-[#0F2918] tracking-tight">
                  47%
                </span>
              </div>
            </div>

            <span className="font-normal text-[14px] text-gray-600 mt-4">
              na taxa de <strong className="font-bold text-[#0F2918]">conversão</strong> em suas vendas.
            </span>
          </div>

          {/* Círculo 2: 62% */}
          <div className="flex flex-col items-center">
            <span className="font-normal text-[14px] text-gray-600 mb-4">
              A <strong className="font-bold text-[#0F2918]">Keyfor IA</strong> <strong className="font-bold text-[#0F2918]">economiza</strong>
            </span>

            <div className="relative w-[220px] h-[220px] flex items-center justify-center my-2">
              <svg width="220" height="220" viewBox="0 0 220 220" className="-rotate-90">
                <circle cx="110" cy="110" r="100" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                <circle
                  cx="110"
                  cy="110"
                  r="100"
                  fill="none"
                  stroke="#84CC16"
                  strokeWidth="12"
                  strokeDasharray="389.5 628.3"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-[42px] text-[#0F2918] tracking-tight">
                  62%
                </span>
              </div>
            </div>

            <span className="font-normal text-[14px] text-gray-600 mt-4">
              de <strong className="font-bold text-[#0F2918]">redução</strong> de custos operacionais.
            </span>
          </div>

          {/* Círculo 3: 94% */}
          <div className="flex flex-col items-center">
            <span className="font-normal text-[14px] text-gray-600 mb-4">
              A <strong className="font-bold text-[#0F2918]">Keyfor IA</strong> <strong className="font-bold text-[#0F2918]">resolve</strong>
            </span>

            <div className="relative w-[220px] h-[220px] flex items-center justify-center my-2">
              <svg width="220" height="220" viewBox="0 0 220 220" className="-rotate-90">
                <circle cx="110" cy="110" r="100" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                <circle
                  cx="110"
                  cy="110"
                  r="100"
                  fill="none"
                  stroke="#84CC16"
                  strokeWidth="12"
                  strokeDasharray="590.6 628.3"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-[42px] text-[#0F2918] tracking-tight">
                  94%
                </span>
              </div>
            </div>

            <span className="font-normal text-[14px] text-gray-600 mt-4">
              dos <strong className="font-bold text-[#0F2918]">atendimentos</strong>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
