import React from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Mic, 
  Paperclip, 
  MessageSquare, 
  Users, 
  LayoutGrid, 
  Package,
  ArrowRight
} from 'lucide-react';

export default function KeyforBeneficios() {
  const cards = [
    {
      icon: MessageCircle,
      title: "Assistente virtual",
      highlight: "online 24/7",
      description: "Nós vamos criar um atendimento com IA personalizado de acordo com seu negócio que trabalhe incansavelmente e agirá como um humano: que entende sentimentos, contexto, processa demandas complexas, fornece respostas personalizadas e vende para seu cliente."
    },
    {
      icon: Calendar,
      title: "Integração com agenda",
      highlight: "& Redução de custos",
      description: "Nossa IA interage com sua agenda com um fluxo eficiente. Perfeito para todo o tipo de empresa e profissionais. Diga adeus aos altos custos com funcionários. Reduza despesas com salários e encargos."
    },
    {
      icon: Mic,
      title: "IA que escuta e",
      highlight: "grava áudio",
      description: "Com a tecnologia Whisper®, que permite que nossa IA entenda e responda áudios, você terá conversas mais naturais, humanas e eficazes. Somos os primeiros no Brasil com uma IA capaz de ouvir e responder em áudios."
    },
    {
      icon: Paperclip,
      title: "Idiomas e Mídias",
      highlight: "variadas",
      description: "Muito mais do que chatbots tradicionais. Envie mensagens com texto, áudio, vídeo, documentos, perguntas, responda por áudio, gerencie calendários e muito mais. A Keyfor IA se comunica em qualquer idioma."
    },
    {
      icon: MessageSquare,
      title: "Chat Ao vivo &",
      highlight: "Intervenção Manual",
      description: "Veja suas conversas em tempo real. Gerencie conversar em tempo real e intervenha, quando necessário, para garantir o melhor atendimento."
    },
    {
      icon: Users,
      title: "Gestão de Contatos",
      highlight: "e Tags",
      description: "Gerencie seus contatos com facilidade. Crie campanhas personalizadas e exporte relatórios precisos para apoiar suas decisões. Utilize tags para classificar seus atendimentos estrategicamente como 'Lead quente', 'aguardando resposta' e etc."
    },
    {
      icon: LayoutGrid,
      title: "Dashboard & CRM",
      highlight: "Completo",
      description: "Você terá acesso a um CRM completo. Monitore e entenda o desempenho das suas ações de comunicação em tempo real, identificando pontos de melhoria e maximizando seus resultados."
    },
    {
      icon: Package,
      title: "Orçamentos,",
      highlight: "produtos e serviços",
      description: "Nossa IA cuida dos orçamentos da sua empresa! Nós programamos ela para fornecer cotações precisas e instantâneas de estoque, simplificando o processo de vendas. Venda ebooks, infoprodutos, serviços online, reservas e agendamentos, produtos de varejo e mais."
    }
  ];

  return (
    <section className="w-full bg-[#FAFAF9] bg-clean-dots text-gray-900 py-24 px-6 sm:px-10 lg:px-16" id="funcionalidades">
      <div className="max-w-[1280px] mx-auto">
        {/* 1. HEADER CENTRALIZADO COM ITÁLICO EDITORIAL */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-normal text-[30px] sm:text-[38px] text-[#0F2918] leading-[1.25] max-w-[840px] text-center">
            Não somos um chatbot, a Keyfor IA <span className="italic font-serif text-[#165B2E]">atende</span>,{' '}
            <span className="italic font-serif text-[#165B2E]">engaja</span>,{' '}
            <span className="italic font-serif text-[#165B2E]">impressiona</span> e{' '}
            <span className="italic font-serif text-[#165B2E]">vende</span> por você!
          </h2>

          <p className="font-normal text-[15px] text-gray-600 mt-4 max-w-[600px] text-center">
            Entenda como funciona e os benefícios da Keyfor IA:
          </p>
        </div>

        {/* 2. GRID DE 3 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARDS DE 1 A 7 */}
          {cards.slice(0, 7).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 min-h-[250px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Ícone em Verde-Limão */}
                  <div className="w-12 h-12 rounded-2xl bg-[#D2F69A] flex items-center justify-center mb-6 shadow-xs">
                    <IconComponent className="w-5 h-5 text-[#0F2918]" />
                  </div>

                  {/* Título & Subtítulo */}
                  <h3 className="font-bold text-[16px] text-gray-900 leading-[1.3]">
                    {item.title}
                  </h3>
                  <div className="font-semibold text-[14px] text-[#165B2E] mt-1 mb-4">
                    {item.highlight}
                  </div>

                  {/* Descrição */}
                  <p className="font-normal text-[13px] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* CARD 8: CARD CTA CENTRALIZADO NA 3ª LINHA */}
          <div className="relative bg-transparent rounded-none p-4 flex flex-col justify-center items-center text-center">
            {/* Linha conectora verde-limão descendo do card acima */}
            <div className="hidden lg:flex flex-col items-center absolute -top-[44px] left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="w-[1.5px] h-[18px] bg-[#D2F69A]" />
              <div className="w-[10px] h-[10px] rounded-full border-2 border-[#165B2E] bg-[#D2F69A]" />
              <div className="w-[1.5px] h-[18px] bg-[#D2F69A]" />
            </div>

            <h3 className="font-bold text-[24px] sm:text-[26px] text-[#0F2918] leading-[1.25] mb-6 max-w-[320px]">
              E muuuuuuito mais funcionalidades...
            </h3>

            <a
              href="#planos"
              className="inline-flex items-center justify-between gap-4 bg-[#D2F69A] hover:bg-[#c6f387] active:scale-95 hover:scale-[0.98] text-[#0F2918] font-bold text-[14px] pl-8 pr-3 py-3.5 rounded-full shadow-md transition-all duration-150 group border border-[#bfe87e]/40"
            >
              <span>Passar para o próximo nível</span>
              <span className="w-8 h-8 rounded-full bg-[#0F2918] text-[#D2F69A] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </a>
          </div>

          {/* CARD 9: CARD ORÇAMENTOS, PRODUTOS E SERVIÇOS (COLUNA 3, LINHA 3) */}
          {(() => {
            const item = cards[7];
            const IconComponent = item.icon;
            return (
              <div 
                className="bg-white rounded-3xl p-8 min-h-[250px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Ícone */}
                  <div className="w-12 h-12 rounded-2xl bg-[#D2F69A] flex items-center justify-center mb-6 shadow-xs">
                    <IconComponent className="w-5 h-5 text-[#0F2918]" />
                  </div>

                  {/* Título & Subtítulo */}
                  <h3 className="font-bold text-[16px] text-gray-900 leading-[1.3]">
                    {item.title}
                  </h3>
                  <div className="font-semibold text-[14px] text-[#165B2E] mt-1 mb-4">
                    {item.highlight}
                  </div>

                  {/* Descrição */}
                  <p className="font-normal text-[13px] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
