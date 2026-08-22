import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import JourneyTimeline from "@/components/JourneyTimeline";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main className="relative z-10 mb-[var(--home-footer-height,0px)] bg-base">
        <Hero />
        <ValueProposition />
        <ExpertiseGrid />
        <JourneyTimeline />
        <Projects />
        <ContactSection />
      </main>
      <Footer stacked />
    </SmoothScroll>
  );
}
