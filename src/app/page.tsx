import CTASection from "@/components/CTASection";
import FAQ from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-[#1A002B] via-[#3C005A] to-[#FF006E]">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
