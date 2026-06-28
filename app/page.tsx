import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { PremiumSection } from "@/components/premium-section";
import { DigitalAssistantSection } from "@/components/digital-assistant-section";
import { HowItWorks } from "@/components/how-it-works";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <PremiumSection />
        <DigitalAssistantSection />
        <HowItWorks />
        <AboutSection />
        <GallerySection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
