import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Features } from "@/components/sections/features";
import { RedTeamDemo } from "@/components/sections/red-team-demo";
import { Architecture } from "@/components/sections/architecture";
import { Customers } from "@/components/sections/customers";
import { Pricing } from "@/components/sections/pricing";
import { EnterpriseCTA } from "@/components/sections/enterprise-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink-950 text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <RedTeamDemo />
      <Architecture />
      <Customers />
      <Pricing />
      <EnterpriseCTA />
      <Footer />
    </main>
  );
}
