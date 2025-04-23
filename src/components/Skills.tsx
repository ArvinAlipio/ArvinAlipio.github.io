
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Section from "./Section";

const skillsData = {
  technical: [
    "Full-Stack Development",
    "React / Vue.js / Angular",
    "Node.js / Express",
    "Python / Djangod",
    "RESTful APIs",
    "AWS / Azure / GCP",
    "Docker / Kubernetes",
    "CI/CD Pipelines",
    "Microservices Architecture",
    "Database Design (SQL/NoSQL)",
    "AI/ML Integration",
    "Performance Optimization",
  ],
  agile: [
    "Scrum Master Certified",
    "Agile Transformation",
    "Sprint Planning",
    "Backlog Management",
    "Team Leadership",
    "Stakeholder Management",
    "JIRA / Confluence",
    "Kanban",
    "SAFe Framework",
    "User Story Mapping",
    "Retrospectives Facilitation",
    "Continuous Improvement",
  ],
  services: [
    "Web Application Development",
    "API Design & Integration",
    "Technology Consultation",
    "Cloud Migration",
    "DevOps Implementation",
    "Agile Coaching",
    "Software Architecture",
    "Performance Optimization",
    "Technical Leadership",
    "Code Review & Mentoring",
    "System Integration",
    "AI Solution Design",
  ],
};

const Skills = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Skills & <span className="gradient-text">Services</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My expertise spans technical development, agile methodologies, and consulting services.
        </p>
      </div>

      <Tabs defaultValue="technical" className="w-full animate-fade-in">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="agile">Agile</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="technical" className="mt-0">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData.technical.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                  <Check size={18} className="text-accent flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="agile" className="mt-0">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center">Agile Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData.agile.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                  <Check size={18} className="text-accent flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="services" className="mt-0">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center">Services Offered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-2">
                  <Check size={18} className="text-accent flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
};

export default Skills;
