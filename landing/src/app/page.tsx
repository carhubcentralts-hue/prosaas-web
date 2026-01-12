import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIs from '../components/WhatIs';
import Features from '../components/Features';
import VoiceDemo from '../components/VoiceDemo';
import Integrations from '../components/Integrations';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <Features />
        <VoiceDemo />
        <Integrations />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
