import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span
          className={`block h-px w-16 ${light ? 'bg-gold' : 'bg-gold'}`}
          style={{ background: 'oklch(var(--gold))' }}
        />
        <span
          className="text-xs font-sans tracking-[0.3em] uppercase font-bold"
          style={{ color: 'oklch(var(--gold))' }}
        >
          ✦
        </span>
        <span
          className={`block h-px w-16`}
          style={{ background: 'oklch(var(--gold))' }}
        />
      </div>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-white/70' : 'text-foreground/60'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-5">
        <span className="block h-px w-8" style={{ background: 'oklch(var(--gold))' }} />
        <span className="block w-2 h-2 rounded-full" style={{ background: 'oklch(var(--gold))' }} />
        <span className="block h-px w-8" style={{ background: 'oklch(var(--gold))' }} />
      </div>
    </div>
  );
}
