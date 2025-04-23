
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Section from "./Section";

const Hero = () => {
  return (
    <Section id="hero" className="h-screen flex items-center justify-center relative tech-pattern" fullWidth>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fade-in">
        <p className="text-accent font-medium mb-3">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Jane Doe
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
          Software Engineer & Agile PM
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Building smart systems, leading agile teams, and embracing the future of AI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <a href="#skills">See My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href="#about" className="flex items-center">
              About Me
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-accent" />
      </div>
    </Section>
  );
};

export default Hero;
