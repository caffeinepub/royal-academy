import React, { useState } from 'react';
import type { Program } from '../backend';
import SectionHeader from './SectionHeader';
import { BookOpen, Shield, Scale, Globe, Star } from 'lucide-react';

interface ProgramsProps {
  programs: Program[];
  isLoading?: boolean;
}

const categoryConfig: Record<string, { icon: React.ReactNode; color: string }> = {
  'परीक्षा तयारी': { icon: <BookOpen size={20} />, color: 'oklch(0.62 0.13 70)' },
  'शारीरिक प्रशिक्षण': { icon: <Shield size={20} />, color: 'oklch(0.55 0.15 160)' },
  'कायदा': { icon: <Scale size={20} />, color: 'oklch(0.55 0.15 240)' },
  'सामाजिक विज्ञान': { icon: <Globe size={20} />, color: 'oklch(0.60 0.12 200)' },
  'वैयक्तिक विकास': { icon: <Star size={20} />, color: 'oklch(0.65 0.14 50)' },
  Default: { icon: <BookOpen size={20} />, color: 'oklch(var(--navy))' }
};

function getCategoryConfig(category: string) {
  return categoryConfig[category] || categoryConfig['Default'];
}

export default function Programs({ programs, isLoading }: ProgramsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('सर्व');

  const categories = ['सर्व', ...Array.from(new Set(programs.map((p) => p.category)))];
  const filtered =
    activeCategory === 'सर्व' ? programs : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24" style={{ background: 'oklch(var(--navy-deep))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="आमचे अभ्यासक्रम"
          subtitle="पोलीस भरतीसाठी सर्वसमावेशक प्रशिक्षण कार्यक्रम"
          light
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 font-sans text-xs font-bold tracking-wide transition-all duration-200 border ${
                activeCategory === cat ? 'text-navy-deep' : 'text-white/60 hover:text-white'
              }`}
              style={{
                background: activeCategory === cat ? 'oklch(var(--gold))' : 'transparent',
                borderColor:
                  activeCategory === cat ? 'oklch(var(--gold))' : 'oklch(var(--gold) / 0.3)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="अभ्यासक्रम लोड होत आहेत">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded"
                style={{ background: 'oklch(var(--navy-light) / 0.3)' }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((program, idx) => {
              const config = getCategoryConfig(program.category);
              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 border border-white/10 p-8 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
                  style={{ borderColor: 'oklch(var(--gold) / 0.15)' }}
                >
                  {/* Category icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5 rounded"
                    style={{ background: `${config.color}22`, color: config.color }}
                  >
                    {config.icon}
                  </div>

                  {/* Badge */}
                  <div className="mb-3">
                    <span
                      className="font-sans text-xs font-bold tracking-wide px-3 py-1"
                      style={{
                        background: 'oklch(var(--gold) / 0.15)',
                        color: 'oklch(var(--gold))'
                      }}
                    >
                      {program.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                    {program.title}
                  </h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: 'oklch(var(--gold))' }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && !isLoading && (
          <div className="text-center py-16 text-white/40 font-sans">
            या श्रेणीत कोणतेही अभ्यासक्रम उपलब्ध नाहीत.
          </div>
        )}
      </div>
    </section>
  );
}
