import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'मुख्यपृष्ठ', href: '#home' },
  { label: 'आमच्याबद्दल', href: '#about' },
  { label: 'अभ्यासक्रम', href: '#programs' },
  { label: 'गॅलरी', href: '#gallery' },
  { label: 'संपर्क', href: '#contact' }
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-navy py-2' : 'py-4'
      }`}
      style={{
        background: scrolled
          ? 'oklch(var(--navy-deep))'
          : 'linear-gradient(to bottom, rgba(20,25,70,0.85) 0%, transparent 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="रॉयल अकॅडमी मुख्यपृष्ठ"
        >
          <img
            src="/assets/generated/academy-logo.dim_200x200.png"
            alt="रॉयल अकॅडमी चिन्ह"
            className="w-10 h-10 object-contain rounded-full border-2 transition-transform group-hover:scale-105"
            style={{ borderColor: 'oklch(var(--gold))' }}
          />
          <span className="font-serif text-xl font-semibold text-white tracking-wide hidden sm:block">
            रॉयल अकॅडमी
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 font-sans text-sm font-medium text-white/80 hover:text-white tracking-wide transition-colors relative group focus:outline-none"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                style={{ background: 'oklch(var(--gold))' }}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="मेनू उघडा/बंद करा"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{ background: 'oklch(var(--navy-deep))' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 font-sans text-sm font-medium text-white/80 hover:text-white tracking-wide transition-colors border-b focus:outline-none"
              style={{ borderColor: 'oklch(var(--gold) / 0.2)' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
