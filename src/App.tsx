import { Cursor } from "@/components/portfolio/Cursor";
import { Nav, ScrollProgress } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Craft } from "@/components/portfolio/Craft";
import { Work } from "@/components/portfolio/Work";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { useLenis } from "@/hooks/use-lenis";

export function App() {
  useLenis();

  return (
    <main className="relative bg-background text-foreground">
      <PageLoader />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Craft />
      <Work />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
