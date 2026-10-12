import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Package, Sparkles } from 'lucide-react';

export default function PlanosPrecos() {
  const [billingCycle, setBillingCycle] = useState('mensal');
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

  const essentialFeatures = [
    "WhatsApp com Assistente IA humanizado",
    "Tokens ilimitados",
    "Treinamentos exclusivos",
    "Suporte exclusivo dedicado",
    "Programador exclusivo pro seu negócio",
    "Integrações com plataformas",
    "IA compreende e envia mensagens de áudio",
    "Follow Up por inatividade parametrizado",
    "Campanhas/disparos em massa",
    "Atendentes ilimitados",
    "Transferência para humano",
    "Tags e rótulos nas conversas",
    "Lista de contatos ilimitados",
    "Envio de qualquer tipo de mídia",
    "IA conversa em qualquer idioma"
  ];

  const proFeatures = [
    "Gerenciador de WhatsApp com múltiplos usuários",
    "CRM completo (Layout Kanban)",
    "Dashboard com visualização de desempenho",
    "Calendário para agendamento de tarefas",
    "Agendamento automático mensagens de confirmação de visita",
    "Agendamento automático de mensagens de retorno",
    "Mensagens rápidas automáticas",
    "Cards com valor da compra por cliente",
    "Criação de notas e tarefas",
    "Criação de lembretes automáticos",
    "Criação de Etapas do Funil",
    "Criação de Filtros: Por usuário, Tags, Mensagens não lida, Sem respostas do cliente, Sem respostas do atendente"
  ];

  return (
    <section className="relative py-20 px-6 bg-[#FAFAF9] bg-clean-dots text-gray-900" id="planos">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200/90 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-xs font-semibold text-[#165B2E] uppercase tracking-wider select-none">
              <span>NÃO PERCA MAIS TEMPO E DINHEIRO!</span>
            </div>
          </div>

          {/* Título com Efeito de Pintura no Scroll */}
          <div ref={titleRef} className="relative inline-block max-w-4xl mx-auto mb-3 select-none">
            {/* Camada Base: Cinza claro / baixa opacidade */}
            <h2 className="text-2xl md:text-4xl font-normal text-[#0F2918]/20 transition-colors">
              Selecione o <span className="italic font-serif text-[#165B2E]/25">plano ideal para o seu negócio</span>:
            </h2>

            {/* Camada Ativa: Cores sólidas reveladas progressivamente no scroll */}
            <h2 
              aria-hidden="true"
              className="absolute inset-0 text-2xl md:text-4xl font-normal text-[#0F2918] pointer-events-none"
              style={{
                clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
                WebkitClipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
                transition: 'clip-path 0.12s ease-out, -webkit-clip-path 0.12s ease-out',
                willChange: 'clip-path'
              }}
            >
              Selecione o <span className="italic font-serif text-[#165B2E]">plano ideal para o seu negócio</span>:
            </h2>
          </div>

          <p className="text-gray-600 text-xs md:text-sm max-w-lg mx-auto">
            Temos planos para todos os tamanhos de empresa. E fique tranquilo, você não precisa apertar nenhum botão, fazemos tudo por você!
          </p>

          <div className="mt-6 inline-flex items-center bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <button 
              onClick={() => setBillingCycle('mensal')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${billingCycle === 'mensal' ? 'bg-[#D2F69A] text-[#0F2918] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Mensal
            </button>
            <button 
              onClick={() => setBillingCycle('anual')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${billingCycle === 'anual' ? 'bg-[#D2F69A] text-[#0F2918] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              <span>Anual</span>
              <span className="text-[9px] bg-[#0F2918] text-[#D2F69A] font-black px-1.5 py-0.5 rounded-full">20% OFF</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          {/* Plano Essencial com Efeito de Pressionar no Hover */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:translate-y-[2px] hover:scale-[0.985] active:translate-y-[3px] active:scale-[0.97] active:shadow-none transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] text-left cursor-pointer">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#FAFAF9] border border-gray-200 flex items-center justify-center text-[#165B2E]">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F2918]">Plano Essencial</h3>
                <span className="text-[11px] text-gray-500">Automatização com IA</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#0F2918]">
                  {billingCycle === 'mensal' ? 'R$ 497,00' : 'R$ 397,00'}
                </span>
                <span className="text-xs text-gray-500">/mês</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {essentialFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                  <Check className="w-3.5 h-3.5 text-[#165B2E] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contato"
              style={{ borderRadius: '9999px' }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#F4F4F3] hover:bg-[#EBEBEA] text-[#0F2918] font-bold py-3.5 rounded-full transition-all active:scale-95 hover:scale-[0.99] border border-gray-200 shadow-sm group text-xs md:text-sm cursor-pointer"
            >
              <span>Assinar agora!</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Plano Profissional (Destaque) com Efeito de Pressionar no Hover */}
          <div className="relative bg-white text-gray-900 rounded-3xl p-8 border-2 border-[#84CC16] shadow-[0_16px_40px_rgba(132,204,22,0.12)] hover:shadow-[0_4px_16px_rgba(132,204,22,0.06)] hover:translate-y-[2px] hover:scale-[0.985] active:translate-y-[3px] active:scale-[0.97] active:shadow-none transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] text-left cursor-pointer">
            <div className="absolute -top-3.5 right-6 bg-[#D2F69A] text-[#0F2918] text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow border border-[#bfe87e]/60">
              ★ Recomendado
            </div>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-[#D2F69A] flex items-center justify-center text-[#0F2918]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F2918]">Plano Profissional</h3>
                <span className="text-[11px] text-gray-500">Automatização + Gerenciador com CRM</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#0F2918]">
                  {billingCycle === 'mensal' ? 'R$ 697,00' : 'R$ 557,00'}
                </span>
                <span className="text-xs text-gray-500">/mês</span>
              </div>
            </div>

            <div className="text-[11px] font-bold text-[#0F2918] uppercase tracking-wider mb-3">
              Tudo do Plano Essencial, mais:
            </div>

            <ul className="space-y-3 mb-8">
              {proFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <Check className="w-3.5 h-3.5 text-[#165B2E] shrink-0 mt-0.5 stroke-[3]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contato"
              style={{ borderRadius: '9999px' }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#D2F69A] hover:bg-[#c6f387] text-[#0F2918] font-bold py-3.5 rounded-full transition-all active:scale-95 hover:scale-[0.99] border border-[#bfe87e]/60 shadow-[0_4px_16px_rgba(210,246,154,0.4)] group text-xs md:text-sm cursor-pointer"
            >
              <span>Assinar agora!</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
