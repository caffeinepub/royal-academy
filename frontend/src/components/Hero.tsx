import React from 'react';

interface HeroProps {
  name: string;
  tagline: string;
}

export default function Hero({ name, tagline }: HeroProps) {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1920x1080.png"
          alt="रॉयल अकॅडमी पोलीस प्रशिक्षण"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.12 0.07 255 / 0.88) 0%, oklch(0.18 0.06 250 / 0.75) 60%, oklch(0.12 0.07 255 / 0.85) 100%)'
          }}
        />
      </div>

      {/* Decorative border frame */}
      <div
        className="absolute inset-6 md:inset-10 border pointer-events-none hidden md:block"
        style={{ borderColor: 'oklch(var(--gold) / 0.25)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        {/* Crown ornament */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="block h-px w-12 md:w-20" style={{ background: 'oklch(var(--gold))' }} />
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase font-bold"
            style={{ color: 'oklch(var(--gold))' }}
          >
            पोलीस प्रशिक्षण केंद्र
          </span>
          <span className="block h-px w-12 md:w-20" style={{ background: 'oklch(var(--gold))' }} />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
          {name || 'रॉयल अकॅडमी'}
        </h1>

        <div className="flex items-center justify-center gap-3 my-6">
          <span className="block h-px w-8" style={{ background: 'oklch(var(--gold))' }} />
          <span className="block w-2 h-2 rounded-full" style={{ background: 'oklch(var(--gold))' }} />
          <span className="block h-px w-8" style={{ background: 'oklch(var(--gold))' }} />
        </div>

        <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed">
          {tagline || 'यशाच्या दिशेने एक पाऊल पुढे'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll('#programs')}
            className="px-8 py-4 font-sans font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-gold"
            style={{
              background: 'oklch(var(--gold))',
              color: 'oklch(var(--navy-deep))'
            }}
          >
            अभ्यासक्रम पहा
          </button>
          <button
            onClick={() => handleScroll('#about')}
            className="px-8 py-4 font-sans font-bold text-sm tracking-wide uppercase border-2 text-white transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'oklch(var(--gold) / 0.7)' }}
          >
            अधिक जाणून घ्या
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-xs tracking-widest uppercase text-white/50">खाली पहा</span>
        <div className="w-px h-8" style={{ background: 'oklch(var(--gold) / 0.5)' }} />
      </div>
    </section>
  );
}
