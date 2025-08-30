import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import QuickBooking from '@/components/QuickBooking';
import Services from '@/components/Services';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <QuickBooking />
      <Services />
      <Features />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
