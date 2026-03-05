import React from 'react';
import SectionHeader from './SectionHeader';

interface AboutProps {
  description: string;
}

const stats = [
  { value: '५००+', label: 'विद्यार्थी नोंदणीकृत' },
  { value: '२०+', label: 'तज्ञ प्रशिक्षक' },
  { value: '९५%', label: 'यश दर' },
  { value: '१०+', label: 'वर्षांचा अनुभव' }
];

export default function About({ description }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="आमच्याबद्दल"
          subtitle="पोलीस सेवेसाठी सर्वोत्तम प्रशिक्षण केंद्र"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="font-sans text-lg leading-relaxed text-foreground/70 mb-6">
              {description ||
                'रॉयल अकॅडमी ही पोलीस आणि प्रशासकीय सेवांसाठी संपूर्ण प्रशिक्षण केंद्र आहे. आमचे ध्येय विद्यार्थ्यांना सर्वोत्तम प्रशिक्षण, मार्गदर्शन आणि मोटिवेशन देण्याचे आहे.'}
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground/60 mb-8">
              आम्ही केवळ शैक्षणिक उत्कृष्टतेच नव्हे, तर चारित्र्य, शिस्त आणि नेतृत्वगुण
              विकसित करण्यावर भर देतो. आमचे अनुभवी प्रशिक्षक आणि आधुनिक सुविधा प्रत्येक
              विद्यार्थ्याला त्यांचे ध्येय साध्य करण्यास मदत करतात.
            </p>
            <div
              className="border-l-4 pl-6 py-2"
              style={{ borderColor: 'oklch(var(--gold))' }}
            >
              <p className="font-serif italic text-xl text-navy leading-relaxed">
                "कठोर परिश्रम, शिस्त आणि समर्पण — हेच यशाचे रहस्य आहे."
              </p>
              <p
                className="font-sans text-sm mt-2 font-bold tracking-wide uppercase"
                style={{ color: 'oklch(var(--gold))' }}
              >
                — रॉयल अकॅडमी ब्रीदवाक्य
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-white border shadow-xs hover:shadow-gold transition-shadow duration-300"
                style={{ borderColor: 'oklch(var(--gold) / 0.2)' }}
              >
                <div
                  className="font-serif text-4xl font-bold mb-2"
                  style={{ color: 'oklch(var(--navy))' }}
                >
                  {stat.value}
                </div>
                <div className="font-sans text-sm tracking-wide uppercase text-foreground/50 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
