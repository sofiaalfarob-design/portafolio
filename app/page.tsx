import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperimentsSection from "@/components/ExperimentsSection";
import SkillsSection from "@/components/SkillsSection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ExperimentsSection />
      <SkillsSection />
      <WhyWorkWithMe />
      <CTASection />
      <Footer />
    </main>
  );
}
