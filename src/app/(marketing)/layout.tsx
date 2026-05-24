import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink-950 text-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
