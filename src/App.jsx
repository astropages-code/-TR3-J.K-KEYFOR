import React from 'react';
import { 
  ArrowRight, 
  Check, 
  X, 
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
import CargosIA from './sections/CargosIA';
import NichosMercado from './sections/NichosMercado';
import Resultados from './sections/Resultados';
import Depoimentos from './sections/Depoimentos';
import PlanosPrecos from './sections/PlanosPrecos';
import TrialGratis from './sections/TrialGratis';

export default function App() {


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
      <CargosIA />

      {/* 9. MARQUEE DE NICHOS COM EFEITO DE PINTURA NO SCROLL */}
      <NichosMercado />

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

      {/* 12. PLANOS & PREÇOS COM PINTURA NO SCROLL E EFEITO PRESSIONAR */}
      <PlanosPrecos />

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
