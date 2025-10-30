import { ConceptSpotlight } from "@/components/ConceptSpotlight";
import { Footer } from "@/components/Footer";
import { GlossaryList } from "@/components/GlossaryList";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearningPath } from "@/components/LearningPath";
import { ModuleShowcase } from "@/components/ModuleShowcase";
import { ResourceShowcase } from "@/components/ResourceShowcase";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ModuleShowcase />
      <LearningPath />
      <ConceptSpotlight />
      <ResourceShowcase />
      <GlossaryList />
      <Footer />
    </main>
  );
}
