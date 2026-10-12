import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10 md:pt-14 pb-20 md:pb-28 overflow-hidden text-center" id="solucoes">
      {/* Background Decorativo: Brilhos Ambientais nos Cantos */}
      <div 
        className="absolute -top-32 -left-32 w-80 md:w-96 h-80 md:h-96 rounded-full blur-3xl pointer-events-none -z-10 opacity-70"
        style={{ background: 'radial-gradient(circle, rgba(210, 246, 154, 0.45) 0%, rgba(210, 246, 154, 0) 70%)' }}
      />
      <div 
        className="absolute -top-32 -right-32 w-80 md:w-96 h-80 md:h-96 rounded-full blur-3xl pointer-events-none -z-10 opacity-70"
        style={{ background: 'radial-gradient(circle, rgba(134, 239, 172, 0.35) 0%, rgba(134, 239, 172, 0) 70%)' }}
      />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[350px] rounded-full blur-3xl pointer-events-none -z-10 opacity-40"
        style={{ background: 'radial-gradient(ellipse, rgba(236, 253, 243, 0.8) 0%, rgba(255, 255, 255, 0) 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Kicker Pill no Topo (Estilo Pill com Borda Suave da Referência) */}
        <div 
          style={{ animationDelay: '100ms' }}
          className="animate-reveal-down inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-200/90 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-xs md:text-[13px] font-semibold text-[#165B2E] tracking-wide uppercase mb-6 md:mb-8 select-none"
        >
          <span className="text-gray-400 font-normal">[</span>
          <span>MAIS VENDAS COM MENOS TRABALHO</span>
          <span>💚</span>
          <span className="text-gray-400 font-normal">]</span>
        </div>

        {/* Título Principal com Tipografia Editorial / Itálico Sofisticado */}
        <h1 
          style={{ animationDelay: '250ms' }}
          className="animate-reveal-down text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-normal text-[#0F2918] leading-[1.16] tracking-tight mb-6 max-w-4xl mx-auto"
        >
          <span className="italic font-serif">Aumente</span> seu faturamento em 47% com um atendimento de IA <span className="italic font-serif text-[#165B2E]">humanizado</span> que nunca tira férias..
        </h1>

        {/* Subtítulo Clean e Respirado */}
        <p 
          style={{ animationDelay: '400ms' }}
          className="animate-reveal-down text-gray-600 text-sm md:text-base lg:text-[17px] leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
        >
          Chega de perder vendas! Tenha um funcionário que trabalhe e venda 24 horas por dia e 7 dias por semana pra você. Nossa Inteligência Artificial transforma conversas em lucros.
        </p>

        {/* Linha de Tags / Chips Arredondados (entrando uma após a outra da esquerda para a direita) */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5 mb-8 max-w-2xl mx-auto">
          {[
            "Atendimento 24/7", 
            "WhatsApp Oficial", 
            "Tokens Ilimitados", 
            "Disparos em Massa", 
            "Recuperação de Vendas"
          ].map((tag, i) => (
            <span 
              key={i}
              style={{ animationDelay: `${550 + i * 100}ms` }}
              className="animate-reveal-down px-4 py-1.5 rounded-full text-xs md:text-[13px] font-medium text-gray-700 bg-white/90 border border-gray-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:border-[#165B2E]/40 hover:text-[#0F2918] transition-colors select-none"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botão de Ação Primário: Teste grátis por 7 dias (formato pílula perfeito, border-radius 9999px) */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div 
            style={{ animationDelay: '1100ms' }}
            className="animate-reveal-down inline-flex"
          >
            <a 
              href="#planos"
              style={{ borderRadius: '9999px' }}
              className="group h-12 md:h-[50px] px-8 inline-flex items-center justify-center gap-3.5 bg-[#D2F69A] hover:bg-[#c6f387] active:scale-95 hover:scale-[0.98] text-[#0F2918] font-bold rounded-full transition-all duration-150 shadow-[0_4px_20px_rgba(210,246,154,0.45)] text-sm md:text-base border border-[#bfe87e]/50 cursor-pointer select-none leading-none"
            >
              <span className="leading-none">Teste grátis por 7 dias</span>
              <span className="w-7 h-7 rounded-full bg-[#0F2918] text-[#D2F69A] inline-flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </a>
          </div>
        </div>

        {/* 3 Cards na Base da Hero com Ícone de Raio e Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div 
            style={{ animationDelay: '1250ms' }}
            className="animate-reveal-down h-full"
          >
            <div className="bg-white rounded-3xl p-6 md:p-7 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-200 text-left h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#0F2918] fill-current" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-[15px]">Integração WhatsApp</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D2F69A] text-[#0F2918]">
                  Novo
                </span>
              </div>
              <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed">
                Conecte sua conta em segundos de forma segura e atenda múltiplos clientes em tempo real.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            style={{ animationDelay: '1350ms' }}
            className="animate-reveal-down h-full"
          >
            <div className="bg-white rounded-3xl p-6 md:p-7 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-200 text-left h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#0F2918] fill-current" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-[15px]">Conversão & Vendas</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D2F69A] text-[#0F2918]">
                  Destaque
                </span>
              </div>
              <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed">
                IA treinada para tirar dúvidas complexas, quebrar objeções e fechar pedidos no automático.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            style={{ animationDelay: '1450ms' }}
            className="animate-reveal-down h-full"
          >
            <div className="bg-white rounded-3xl p-6 md:p-7 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-200 text-left h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#0F2918] fill-current" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-[15px]">Atendimento 24/7</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D2F69A] text-[#0F2918]">
                  24 Horas
                </span>
              </div>
              <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed">
                Seu cliente atendido em menos de 3 segundos, seja de madrugada, fins de semana ou feriados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
