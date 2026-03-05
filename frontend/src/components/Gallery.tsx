import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/assets/generated/gallery-1.dim_800x600.png',
    alt: 'शारीरिक तंदुरुस्ती प्रशिक्षण',
    caption: 'शारीरिक तयारी'
  },
  {
    src: '/assets/generated/gallery-2.dim_800x600.png',
    alt: 'वर्गखोलीत अभ्यास सत्र',
    caption: 'अभ्यास सत्र'
  },
  {
    src: '/assets/generated/gallery-3.dim_800x600.png',
    alt: 'ड्रिल परेड प्रशिक्षण',
    caption: 'ड्रिल प्रशिक्षण'
  },
  {
    src: '/assets/generated/gallery-4.dim_800x600.png',
    alt: 'विद्यार्थ्यांचा समूह फोटो',
    caption: 'आमचे विद्यार्थी'
  }
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
  };

  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="गॅलरी"
          subtitle="रॉयल अकॅडमीतील प्रशिक्षणाची झलक"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              className="group relative overflow-hidden aspect-[4/3] focus:outline-none"
              onClick={() => setLightbox(idx)}
              aria-label={`${img.alt} पहा`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6"
                style={{
                  background:
                    'linear-gradient(to top, oklch(var(--navy-deep) / 0.85) 0%, transparent 60%)'
                }}
              >
                <p className="font-serif text-white text-lg font-medium">{img.caption}</p>
                <div
                  className="mt-2 h-0.5 w-8"
                  style={{ background: 'oklch(var(--gold))' }}
                />
              </div>
              {/* Gold corner accents */}
              <div
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: 'oklch(var(--gold))' }}
              />
              <div
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: 'oklch(var(--gold))' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'oklch(0.08 0.04 255 / 0.95)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p
              className="text-center font-serif text-white/80 mt-4 text-lg"
            >
              {galleryImages[lightbox].caption}
            </p>

            {/* Close */}
            <button
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors"
              style={{ background: 'oklch(var(--gold))' }}
              onClick={() => setLightbox(null)}
              aria-label="बंद करा"
            >
              <X size={18} style={{ color: 'oklch(var(--navy-deep))' }} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors"
              style={{ background: 'oklch(var(--navy-deep) / 0.8)', border: '1px solid oklch(var(--gold) / 0.4)' }}
              onClick={prev}
              aria-label="मागील फोटो"
            >
              <ChevronLeft size={20} style={{ color: 'oklch(var(--gold))' }} />
            </button>

            {/* Next */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors"
              style={{ background: 'oklch(var(--navy-deep) / 0.8)', border: '1px solid oklch(var(--gold) / 0.4)' }}
              onClick={next}
              aria-label="पुढील फोटो"
            >
              <ChevronRight size={20} style={{ color: 'oklch(var(--gold))' }} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
