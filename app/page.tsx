import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { CodeShowcase } from "@/components/code-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureCards />
      <CodeShowcase />
    </main>
  )
}
