import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Features } from "@/components/sections/features";
import { RedTeamDemo } from "@/components/sections/red-team-demo";
import { Architecture } from "@/components/sections/architecture";
import { Customers } from "@/components/sections/customers";
import { Pricing } from "@/components/sections/pricing";
import { EnterpriseCTA } from "@/components/sections/enterprise-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <RedTeamDemo />
      <Architecture />
      <Customers />
      <Pricing />
      <EnterpriseCTA />
    </>
  );
}
