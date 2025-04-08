import { Box } from "@radix-ui/themes";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
    </Box>
  );
}