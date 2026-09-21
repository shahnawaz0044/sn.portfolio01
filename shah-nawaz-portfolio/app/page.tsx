import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Process />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
