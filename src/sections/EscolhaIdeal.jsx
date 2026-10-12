import React from 'react';
import { TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

export default function EscolhaIdeal() {
  return (
    <section className="relative w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 py-20 md:py-28 px-6 sm:px-10 lg:px-12 overflow-hidden" id="metricas">
      {/* Detalhes sutis em verde claro nos cantos */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 rounded-full bg-[#D2F69A]/20 blur-3xl pointer-events-none select-none" />
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full bg-[#D2F69A]/20 blur-3xl pointer-events-none select-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* COLUNA ESQUERDA: Texto e Proposta de Valor */}
          <div className="lg:col-span-5 text-left">
            {/* Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200/90 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-xs font-semibold text-[#165B2E] tracking-wide mb-6 select-none">
              <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
              <span>Performance comprovada</span>
            </div>

            {/* Título com Ênfase Editorial */}
            <h2 className="font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#0F2918] leading-[1.18] tracking-tight mb-6">
              Por que somos a <span className="italic font-serif text-[#165B2E]">escolha ideal</span> de nossos clientes?
            </h2>

            {/* Parágrafos de Apoio */}
            <div className="space-y-4 text-gray-600 text-sm md:text-[15px] leading-relaxed mb-8">
              <p>
                <strong className="font-bold text-[#0F2918]">Somos pioneiros no uso de IA para humanizar de forma automática e otimizar conversas no WhatsApp no Brasil.</strong> E o melhor é que você não vai precisar <strong className="font-bold text-[#0F2918]">apertar nenhum botão</strong> ou criar <strong className="font-bold text-[#0F2918]">fluxos exaustivos de bot</strong>. Você terá uma <strong className="font-bold text-[#0F2918]">equipe exclusiva</strong> para fazer todo o processo pra você.
              </p>

              <p>
                <strong className="font-bold text-[#0F2918]">Em menos de 48 horas</strong> nós vamos fazer seu WhatsApp se transformar em uma <strong className="font-bold text-[#0F2918]">máquina de vendas</strong>!
              </p>
            </div>

            {/* Linha de Apoio Sutil */}
            <div className="pt-5 border-t border-gray-200/70 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shrink-0" />
              <span className="text-xs text-gray-500 font-medium">Resultados médios obtidos nos primeiros 30 dias de operação ativa.</span>
            </div>
          </div>

          {/* COLUNA DIREITA: Cards Bento Grid com Porcentagens */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {/* Card 1: 47% (Topo - Largura Total) */}
              <div className="sm:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 text-left">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-5 h-5 rounded-md bg-[#D2F69A] flex items-center justify-center text-[#0F2918] shrink-0">
                    <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">
                    Aumento na taxa de conversão
                  </span>
                </div>

                <div className="text-5xl sm:text-6xl font-normal font-serif italic text-[#0F2918] tracking-tight mb-2">
                  47%
                </div>

                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Aumento direto na taxa de conversão em suas vendas no WhatsApp.
                </p>
              </div>

              {/* Card 2: 62% (Inferior Esquerdo) */}
              <div className="sm:col-span-1 bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-5 h-5 rounded-md bg-[#D2F69A] flex items-center justify-center text-[#0F2918] shrink-0">
                      <Zap className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      Redução de custos
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-normal font-serif italic text-[#0F2918] tracking-tight mb-2">
                    62%
                  </div>
                </div>

                <p className="text-xs text-gray-500 font-medium leading-relaxed mt-2">
                  De redução comprovada nos custos operacionais de atendimento.
                </p>
              </div>

              {/* Card 3: 94% (Inferior Direito) */}
              <div className="sm:col-span-1 bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-5 h-5 rounded-md bg-[#D2F69A] flex items-center justify-center text-[#0F2918] shrink-0">
                      <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      Resolução de chamados
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-normal font-serif italic text-[#0F2918] tracking-tight mb-2">
                    94%
                  </div>
                </div>

                <p className="text-xs text-gray-500 font-medium leading-relaxed mt-2">
                  Dos atendimentos finalizados com sucesso sem exigir ação humana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
