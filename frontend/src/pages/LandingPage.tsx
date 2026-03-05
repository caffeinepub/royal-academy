import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import { useAcademyData, useAllPrograms } from '../hooks/useQueries';

export default function LandingPage() {
  const { data: academyData, isLoading: academyLoading } = useAcademyData();
  const { data: programs = [], isLoading: programsLoading } = useAllPrograms();

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <Hero
          name={academyData?.name ?? 'रॉयल अकॅडमी'}
          tagline={academyData?.tagline ?? 'यशाच्या दिशेने एक पाऊल पुढे'}
        />

        <About
          description={
            academyData?.description ??
            'रॉयल अकॅडमी ही पोलीस आणि प्रशासकीय सेवांसाठी संपूर्ण प्रशिक्षण केंद्र आहे. आमचे ध्येय विद्यार्थ्यांना सर्वोत्तम प्रशिक्षण, मार्गदर्शन आणि मोटिवेशन देण्याचे आहे.'
          }
        />

        <Programs programs={programs} isLoading={programsLoading} />

        <Gallery />

        <Contact contactEmail={academyData?.contactEmail ?? 'info@royalacademy.in'} />
      </main>
    </div>
  );
}
