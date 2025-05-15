import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AboutPreview from '@/components/home/AboutPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <ServicesSection />
      <AboutPreview />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
} 