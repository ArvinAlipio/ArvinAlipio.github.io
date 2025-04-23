
import { Badge } from "@/components/ui/badge";
import Section from "./Section";

const ValueProposition = () => {
  return (
    <Section id="value" className="bg-muted/50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side */}
        <div className="w-full md:w-1/2 space-y-6 animate-fade-in-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Me <span className="gradient-text">Different</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I combine deep technical expertise with leadership skills, bringing a 
            unique perspective that bridges the gap between development and management.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge className="bg-accent hover:bg-accent/90 text-white">Software Engineering</Badge>
            <Badge className="bg-primary hover:bg-primary/90">Agile Leadership</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-500/90 text-white">AI Innovation</Badge>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 animate-fade-in-left">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">Technical Excellence</h3>
            <p className="text-muted-foreground">
              Full-stack development with a focus on scalable, robust solutions.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">Agile Leadership</h3>
            <p className="text-muted-foreground">
              Certified Scrum Master with experience leading multiple teams.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">AI Enthusiast</h3>
            <p className="text-muted-foreground">
              Applying machine learning to solve complex business problems.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">Continuous Learner</h3>
            <p className="text-muted-foreground">
              Always exploring new technologies and methodologies.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ValueProposition;
