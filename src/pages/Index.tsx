
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import ValueProposition from "@/components/ValueProposition";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <About />
        <Timeline />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
