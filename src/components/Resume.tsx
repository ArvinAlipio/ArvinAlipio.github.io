import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Section from "./Section";

const Resume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/ArvinAlipio_Resume.pdf';
    link.download = 'Arvin_Alipio_Resume.pdf'; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="resume" className="bg-accent/5">
      <div className="relative mx-auto max-w-3xl">
        {/* Decoration */}
        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-accent"></div>
        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-accent"></div>
        
        {/* Content */}
        <div className="bg-card border rounded-lg shadow-lg p-8 md:p-12 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Download My Resume</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a comprehensive overview of my experience, skills, and qualifications in a downloadable PDF format.
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
          
          <div className="mt-8 pt-8 border-t grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-3xl font-bold text-accent">7+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent">100+</h3>
              <p className="text-sm text-muted-foreground">Sprints Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent">15+</h3>
              <p className="text-sm text-muted-foreground">Handled Projects</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
