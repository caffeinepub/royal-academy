import React from 'react';
import SectionHeader from './SectionHeader';
import { Mail, MapPin } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

interface ContactProps {
  contactEmail: string;
}

export default function Contact({ contactEmail }: ContactProps) {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'royal-academy'
  );

  return (
    <section id="contact" className="py-24" style={{ background: 'oklch(var(--navy-deep))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="संपर्क करा"
          subtitle="आम्हाला संपर्क करा आणि आपल्या यशाच्या प्रवासाला सुरुवात करा."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div
            className="flex flex-col items-center text-center p-8 border border-white/10 hover:border-gold/40 transition-colors duration-300"
            style={{ borderColor: 'oklch(var(--gold) / 0.15)' }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center mb-4 rounded-full"
              style={{ background: 'oklch(var(--gold) / 0.15)' }}
            >
              <Mail size={24} style={{ color: 'oklch(var(--gold))' }} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white mb-2">ईमेल करा</h3>
            <a
              href={`mailto:${contactEmail || 'info@royalacademy.in'}`}
              className="font-sans text-sm hover:text-gold transition-colors"
              style={{ color: 'oklch(var(--gold) / 0.7)' }}
            >
              {contactEmail || 'info@royalacademy.in'}
            </a>
          </div>

          {/* Instagram */}
          <div
            className="flex flex-col items-center text-center p-8 border hover:border-gold/40 transition-colors duration-300"
            style={{ borderColor: 'oklch(var(--gold) / 0.15)' }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center mb-4 rounded-full"
              style={{ background: 'oklch(var(--gold) / 0.15)' }}
            >
              <SiInstagram size={24} style={{ color: 'oklch(var(--gold))' }} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white mb-2">आम्हाला फॉलो करा</h3>
            <a
              href="https://www.instagram.com/royal_academy_16"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm transition-colors"
              style={{ color: 'oklch(var(--gold) / 0.7)' }}
            >
              @royal_academy_16
            </a>
          </div>

          {/* Location */}
          <div
            className="flex flex-col items-center text-center p-8 border hover:border-gold/40 transition-colors duration-300"
            style={{ borderColor: 'oklch(var(--gold) / 0.15)' }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center mb-4 rounded-full"
              style={{ background: 'oklch(var(--gold) / 0.15)' }}
            >
              <MapPin size={24} style={{ color: 'oklch(var(--gold))' }} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-white mb-2">भेट द्या</h3>
            <p className="font-sans text-sm" style={{ color: 'oklch(var(--gold) / 0.7)' }}>
              रॉयल अकॅडमी कॅम्पस, महाराष्ट्र
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-10"
          style={{ borderColor: 'oklch(var(--gold) / 0.15)' }}
        />

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/academy-logo.dim_200x200.png"
              alt="रॉयल अकॅडमी"
              className="w-8 h-8 object-contain rounded-full"
              style={{ border: '1px solid oklch(var(--gold) / 0.4)' }}
            />
            <span className="font-serif text-white/70 text-sm">
              © {year} रॉयल अकॅडमी. सर्व हक्क राखीव.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/royal_academy_16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SiInstagram size={20} style={{ color: 'oklch(var(--gold) / 0.6)' }} />
            </a>
          </div>

          <p className="font-sans text-xs text-white/40">
            प्रेमाने{' '}
            <span style={{ color: 'oklch(var(--gold))' }}>♥</span>{' '}
            बनवले{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
              style={{ color: 'oklch(var(--gold) / 0.6)' }}
            >
              caffeine.ai
            </a>{' '}
            द्वारे
          </p>
        </div>
      </div>
    </section>
  );
}
