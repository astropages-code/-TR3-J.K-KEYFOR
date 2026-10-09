import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  X, 
  Package, 
  Sparkles,
  Mail, 
  Phone, 
  Instagram
} from 'lucide-react';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Desafios from './sections/Desafios';
import FiqueTranquilo from './sections/FiqueTranquilo';
import KeyforBeneficios from './sections/KeyforBeneficios';
import LideresMercado from './sections/LideresMercado';
import EscolhaIdeal from './sections/EscolhaIdeal';
import Resultados from './sections/Resultados';
import Depoimentos from './sections/Depoimentos';
import TrialGratis from './sections/TrialGratis';

export default function App() {
  const [billingCycle, setBillingCycle] = useState('mensal');

  const painPoints = [
    "Atendimento lento e ineficiente",
    "Perda de clientes por falta de respostas",
    "Vários números de WhatsApp",
    "Time de atendimento desmotivado",
    "Problemas para bater metas",
    "Confusão no time comercial",
    "Cliente com péssimas experiências",
    "Custo elevado com funcionários",
    "Dificuldade em escalar",
    "Entre outros..."
  ];

  const niches1 = [
    "Lojas de Veículos", "Infoprodutores", "Gráficas", "Advogados", 
    "Pousadas/Hotéis", "Clínicas Médicas", "Clínicas de Estética", "Restaurantes",
    "Imobiliárias", "Concessionárias", "Construtoras", "Corretores"
  ];

  const niches2 = [
    "Farmácias", "Supermercados", "Pet Shop", "Loja de Roupas", 
    "E-commerce", "Escolas", "Barbearias", "Academias",
    "Dentistas", "Agências de Marketing", "Contabilidade", "Óticas"
  ];

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
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 bg-clean-dots selection:bg-[#D2F69A] selection:text-[#0F2918]">
      {/* 1 & 2. HEADER E HERO (CLEAN TECH BRANCO COM DOT GRID E BRILHOS SUAVES) */}
      <div className="relative bg-white bg-clean-dots text-gray-900 overflow-hidden">
        <Navbar />
        <Hero />
      </div>

      {/* 3. SEÇÃO DESAFIOS (CARD COM SOBREPOSIÇÃO NA FAIXA INFERIOR) */}
      <Desafios />

      {/* 4. SEÇÃO FIQUE TRANQUILO (FAIXA VERDE + MOCKUP COM PLAY ÚNICO & CAMADAS) */}
      <FiqueTranquilo />

      {/* 5. SEÇÃO BENEFÍCIOS (GRID 3 COLUNAS + 9º CARD CTA) */}
      <KeyforBeneficios />

      {/* 6. LÍDERES DE MERCADO (LOGOS DE 56PX COM HOVER OPACIDADE) */}
      <LideresMercado />

      {/* 7. POR QUE SOMOS A ESCOLHA IDEAL & MÉTRICAS (DONUT CHARTS 220PX + ANÉIS IA) */}
      <EscolhaIdeal />

      {/* 8. CARGOS QUE A IA PODE OCUPAR */}
      <section className="relative py-20 px-6 bg-[#FAFAF9] bg-clean-dots text-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-normal text-[#0F2918] leading-tight">
              Esses são alguns <span className="italic font-serif text-[#165B2E]">cargos que a Keyfor IA pode ocupar</span> no seu negócio:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] flex flex-col items-center">
              <h3 className="text-lg font-bold text-[#0F2918] mb-5">Suporte</h3>
              <div className="w-full space-y-2.5">
                {["Responde dúvidas", "Resolve problemas", "Orienta usuários", "Envia links e instruções"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-[#F4F4F3] text-gray-800 px-4 py-2.5 rounded-full font-medium text-xs shadow-none">
                    <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] flex flex-col items-center">
              <h3 className="text-lg font-bold text-[#0F2918] mb-5">Atendente</h3>
              <div className="w-full space-y-2.5">
                {["Agenda reuniões", "Envia lembretes", "Coleta informações", "Passa para humano"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-[#F4F4F3] text-gray-800 px-4 py-2.5 rounded-full font-medium text-xs shadow-none">
                    <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] flex flex-col items-center">
              <h3 className="text-lg font-bold text-[#0F2918] mb-5">Vendedor</h3>
              <div className="w-full space-y-2.5">
                {["Qualifica leads", "Faz ofertas diretas", "Recupera compras", "Fecha vendas"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-[#F4F4F3] text-gray-800 px-4 py-2.5 rounded-full font-medium text-xs shadow-none">
                    <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="max-w-xl w-full">
              <img 
                src="/assets/phone-mockup.png" 
                alt="Smartphone com Keyfor IA" 
                className="w-full h-auto object-contain mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. MARQUEE DE NICHOS */}
      <section className="relative py-16 overflow-hidden bg-[#FAFAF9] bg-clean-dots text-gray-900 border-y border-gray-200/70">
        <div className="max-w-5xl mx-auto px-6 text-center mb-8">
          <h2 className="text-xl md:text-3xl font-normal text-[#0F2918]">
            Sim, funciona em <span className="italic font-serif text-[#165B2E]">qualquer tipo de negócio</span>:
          </h2>
        </div>

        <div className="flex overflow-hidden py-2 mb-3">
          <div className="animate-marquee flex items-center gap-3">
            {[...niches1, ...niches1].map((niche, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-white text-gray-800 px-5 py-2.5 rounded-full text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-200/80 shrink-0 select-none hover:border-[#165B2E]/40 transition-colors">
                <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
                </div>
                <span>{niche}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden py-2">
          <div className="animate-marquee flex items-center gap-3" style={{ animationDirection: 'reverse' }}>
            {[...niches2, ...niches2].map((niche, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-white text-gray-800 px-5 py-2.5 rounded-full text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-200/80 shrink-0 select-none hover:border-[#165B2E]/40 transition-colors">
                <div className="w-4 h-4 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#0F2918] stroke-[3]" />
                </div>
                <span>{niche}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RESULTADOS (MOCKUP 900PX COM APENAS 1 BOTÃO DE PLAY) */}
      <Resultados />

      {/* 10.1 DEPOIMENTOS (COM EFEITO DE PRESSIONAR NO HOVER) */}
      <Depoimentos />

      {/* 11. BANNER DE TRANSIÇÃO */}
      <section className="relative py-14 px-6 bg-[#FAFAF9] bg-clean-dots">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-normal text-[#0F2918] leading-tight">
              Pronto para <span className="italic font-serif text-[#165B2E]">liderar seu mercado</span>?
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              <strong className="text-[#0F2918] font-semibold">Conforme seu negócio cresce, a Keyfor IA acompanha o ritmo, atendendo a um número cada vez maior de clientes.</strong> E o melhor de tudo: você terá acesso a uma equipe de suporte exclusiva para seu negócio via WhatsApp, <strong className="text-[#0F2918] font-semibold">nossa equipe estará ao seu lado, respondendo suas dúvidas e garantindo que você aproveite ao máximo</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 12. PLANOS & PREÇOS */}
      <section className="relative py-20 px-6 bg-[#FAFAF9] bg-clean-dots text-gray-900" id="planos">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gray-200 bg-white/90 shadow-[0_2px_6px_rgba(0,0,0,0.02)] text-xs font-semibold text-[#165B2E] uppercase tracking-wider mb-3 select-none">
              <span>[</span>
              <span>NÃO PERCA MAIS TEMPO E DINHEIRO!</span>
              <span>💸</span>
              <span>]</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-normal text-[#0F2918] mb-3">
              Selecione o <span className="italic font-serif text-[#165B2E]">plano ideal para o seu negócio</span>:
            </h2>
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
            {/* Plano Essencial */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left">
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

            {/* Plano Profissional (Destaque) */}
            <div className="relative bg-white text-gray-900 rounded-3xl p-8 border-2 border-[#84CC16] shadow-[0_16px_40px_rgba(132,204,22,0.12)] hover:shadow-[0_20px_50px_rgba(132,204,22,0.18)] transition-all text-left">
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

      {/* 13. TRIAL GRÁTIS COM O "7" SÓLIDO #2D5A3D & FAQ */}
      <TrialGratis />

      {/* 14. FOOTER */}
      <footer className="bg-[#FAFAF9] bg-clean-dots text-gray-800 pt-14 pb-10 px-6 border-t border-gray-200/80" id="contato">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-gray-200/70">
          <div className="md:col-span-5">
            <div className="text-xl font-bold tracking-tight mb-2">
              <span className="italic font-serif text-[#165B2E] text-2xl font-normal">Key</span>
              <span className="text-[#0F2918] font-bold text-xl">for</span>
            </div>
            <p className="text-xs font-semibold text-gray-700 mb-1">
              Mais vendas com menos trabalho!
            </p>
            <p className="text-[11px] text-gray-400">
              CNPJ: 45.385.066/0001-85
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Contato</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#0F2918]" />
                </div>
                <a href="mailto:keyforconsultoria@gmail.com" className="hover:text-gray-900 font-medium">keyforconsultoria@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#0F2918]" />
                </div>
                <a href="tel:31999546107" className="hover:text-gray-900 font-medium">(31) 99954-6107</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Instagram</h4>
            <a 
              href="https://instagram.com/keyforoficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:border-[#165B2E]/40 hover:text-gray-900 transition-colors shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-[#D2F69A] flex items-center justify-center shrink-0">
                <Instagram className="w-3 h-3 text-[#0F2918]" />
              </div>
              <span>@keyforoficial</span>
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto pt-5 text-center text-[11px] text-gray-400">
          © Todos os direitos Reservados a Keyfor.
        </div>
      </footer>
    </div>
  );
}
