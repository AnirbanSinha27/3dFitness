import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import CoreValues from '@/app/components/CoreValues';
import Programs from '@/app/components/Programs';
import Gallery from '@/app/components/Gallery';
import Testimonials from '@/app/components/Testimonials';
import Team from '@/app/components/Team';
import CTA from '@/app/components/CTA';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import ShopGuideSection from './components/Shop';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="overflow-hidden">
        <Hero />
        <CoreValues />
        <Programs />
        <Gallery />
        <Testimonials />
        <Team />
        <CTA />
        <ShopGuideSection/>
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}