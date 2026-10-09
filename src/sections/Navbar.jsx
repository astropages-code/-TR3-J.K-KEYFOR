import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 md:top-6 z-50 px-4 sm:px-6 md:px-8 w-full max-w-5xl mx-auto">
      {/* Floating Pill Container */}
      <div className="bg-white/95 backdrop-blur-md rounded-full px-5 sm:px-7 py-3 md:py-3.5 flex items-center justify-between border border-gray-100/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
        {/* Logo à Esquerda */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-[#D2F69A] flex items-center justify-center text-[#0F2918] shadow-xs group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 font-['Inter'] flex items-center">
            <span className="text-[#166534]">Key</span>for
          </span>
        </a>

        {/* Links ao Centro */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-9 text-sm font-medium text-gray-600">
          <a href="#solucoes" className="hover:text-[#0F2918] transition-colors">
            Soluções
          </a>
          <a href="#funcionalidades" className="hover:text-[#0F2918] transition-colors">
            Funcionalidades
          </a>
          <a href="#depoimentos" className="hover:text-[#0F2918] transition-colors">
            Depoimentos
          </a>
          <a href="#planos" className="hover:text-[#0F2918] transition-colors">
            Planos
          </a>
        </nav>

        {/* Botões de Ação à Direita: Login e Teste Agora (formato pílula perfeito, border-radius 9999px e altura uniforme) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button 
            type="button"
            style={{ borderRadius: '9999px' }}
            className="h-10 px-5 sm:px-6 text-xs sm:text-sm font-semibold bg-[#D2F69A] hover:bg-[#c6f387] text-[#0F2918] rounded-full active:scale-95 hover:scale-[0.98] transition-all duration-150 shadow-xs select-none cursor-pointer inline-flex items-center justify-center border border-[#bfe87e]/40 leading-none"
          >
            Login
          </button>
          <a 
            href="#planos"
            style={{ borderRadius: '9999px' }}
            className="h-10 px-5 sm:px-6 text-xs sm:text-sm font-semibold bg-[#D2F69A] hover:bg-[#c6f387] text-[#0F2918] rounded-full active:scale-95 hover:scale-[0.98] transition-all duration-150 shadow-xs select-none cursor-pointer inline-flex items-center justify-center border border-[#bfe87e]/40 leading-none"
          >
            Teste Agora
          </a>

          {/* Botão Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors ml-1 inline-flex items-center justify-center"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex flex-col gap-3 animate-fadeIn">
          <a 
            href="#solucoes" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-700 py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Soluções
          </a>
          <a 
            href="#funcionalidades" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-700 py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Funcionalidades
          </a>
          <a 
            href="#depoimentos" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-700 py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Depoimentos
          </a>
          <a 
            href="#planos" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-700 py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Planos
          </a>

          <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100">
            <button 
              type="button"
              style={{ borderRadius: '9999px' }}
              className="flex-1 h-10 text-xs font-semibold bg-[#D2F69A] hover:bg-[#c6f387] text-[#0F2918] rounded-full active:scale-95 hover:scale-[0.98] transition-all duration-150 inline-flex items-center justify-center border border-[#bfe87e]/40 shadow-xs"
            >
              Login
            </button>
            <a 
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              style={{ borderRadius: '9999px' }}
              className="flex-1 h-10 text-xs font-semibold bg-[#D2F69A] hover:bg-[#c6f387] text-[#0F2918] rounded-full active:scale-95 hover:scale-[0.98] transition-all duration-150 inline-flex items-center justify-center border border-[#bfe87e]/40 shadow-xs"
            >
              Teste Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
