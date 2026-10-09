import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function TrialGratis() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Usam a API oficial do Whatsapp?",
      a: "Sim, trabalhamos tanto com a API Oficial quanto com conexão segura via QR Code, garantindo total estabilidade, segurança e conformidade com as diretrizes do WhatsApp para sua operação."
    },
    {
      q: "O que é a garantia total de 7 dias?",
      a: "Você tem 7 dias inteiros para testar a Keyfor IA no seu negócio sem pagar nada. Se por qualquer motivo não ficar satisfeito, basta solicitar o cancelamento sem burocracia nem taxas ocultas."
    },
    {
      q: "Como funciona o atendimento humano?",
      a: "A IA é treinada para resolver a grande maioria das dúvidas e fechar vendas. Sempre que um cliente solicitar falar com uma pessoa real ou a situação exigir, o sistema transfere a conversa instantaneamente para sua equipe."
    },
    {
      q: "Como posso acompanhar os atendimentos?",
      a: "Você recebe acesso a um painel em tempo real onde pode visualizar todas as conversas ativas, relatórios de conversão, histórico completo e intervenção manual com apenas um clique."
    },
    {
      q: "E se perguntarem algo e o chatbot não souber responder?",
      a: "Nossa IA aprende continuamente. Quando surge uma dúvida não mapeada, ela responde cordialmente que vai verificar com o especialista e aciona seu time para que você intervenha, incorporando a nova resposta à base de conhecimento."
    },
    {
      q: "Não sou bom com tecnologia, consigo usar a Keyfor-IA?",
      a: "Com certeza! Você não precisa programar nem configurar fluxos complexos. Nossa equipe exclusiva faz todo o treinamento, parametrização e entrega o sistema 100% pronto para usar."
    },
    {
      q: "Posso ter meu chip banido ao usar a Keyfor IA?",
      a: "Não se preocupe: a Keyfor utiliza parâmetros inteligentes de aquecimento de chip, intervalos humanizados e boas práticas de envio que protegem sua linha contra bloqueios."
    }
  ];

  return (
    <section className="w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 py-24 px-6 sm:px-10 lg:px-16 relative overflow-hidden" id="faq">
      {/* Marca d'água de fundo adicional no canto esquerdo */}
      <div className="absolute -left-10 top-0 text-[380px] font-black text-gray-200/40 select-none pointer-events-none leading-none z-0 opacity-50">
        7
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Coluna Esquerda: 7 Sólido Destaque + Textos + CTA */}
        <div className="lg:col-span-5 relative">
          <div className="flex items-start gap-5 mb-6">
            {/* 1. NÚMERO 7 EM VERDE ESCURO SÓLIDO (#0F2918) */}
            <span 
              className="font-extrabold text-[120px] sm:text-[140px] md:text-[160px] text-[#0F2918] leading-[0.85] shrink-0 select-none"
              style={{
                textShadow: '4px 4px 0 rgba(15, 41, 24, 0.12)',
                opacity: 1
              }}
            >
              7
            </span>

            <div className="pt-1">
              {/* Kicker */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200/90 bg-white/90 shadow-xs text-xs font-semibold text-[#165B2E] uppercase mb-3 select-none">
                <span className="text-gray-400 font-normal">[</span>
                <span>7 DIAS GRÁTIS</span>
                <span className="text-gray-400 font-normal">]</span>
              </div>

              {/* Título com Ênfase Editorial */}
              <h2 className="font-normal text-[28px] sm:text-[34px] text-[#0F2918] leading-[1.15]">
                Que tal <span className="italic font-serif text-[#165B2E]">experimentar</span> agora mesmo?
              </h2>
            </div>
          </div>

          {/* Subtítulo */}
          <p className="font-normal text-[14px] sm:text-[15px] text-gray-600 leading-[1.6] mb-8">
            Cadastre-se e aproveite 7 dias grátis, isso mesmo, você não precisa pagar nada para testar a plataforma número 1 do mercado em atendimento com IA. Descubra na prática como a plataforma funciona. Sem riscos, só resultados!
          </p>

          {/* Botão CTA Pílula em Verde-Limão */}
          <div>
            <a 
              href="#planos"
              className="inline-flex items-center justify-between gap-4 bg-[#D2F69A] hover:bg-[#c6f387] active:scale-95 hover:scale-[0.98] text-[#0F2918] font-bold text-[14px] px-8 py-3.5 rounded-full transition-all duration-150 shadow-md group border border-[#bfe87e]/40 select-none cursor-pointer"
            >
              <span>Quero testar agora!</span>
              <span className="w-8 h-8 rounded-full bg-[#0F2918] text-[#D2F69A] flex items-center justify-center ml-2 shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </a>
          </div>
        </div>

        {/* Coluna Direita: FAQ Accordion */}
        <div className="lg:col-span-7">
          <h3 className="font-normal text-2xl md:text-3xl text-[#0F2918] mb-6">
            <span className="font-bold text-[#165B2E]">FAQ</span> - Perguntas frequentes
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-gray-100 bg-white rounded-2xl overflow-hidden transition-all duration-200 shadow-xs hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50/80 transition-colors cursor-pointer select-none"
                  >
                    <span className="font-semibold text-xs md:text-sm text-gray-900">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#165B2E] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 md:p-5 pt-0 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
