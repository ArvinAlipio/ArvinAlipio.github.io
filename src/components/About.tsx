import { Button } from "@/components/ui/button";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Image */}
        <div className="w-full md:w-2/5 animate-fade-in-left relative">
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 rounded-2xl border-2 border-accent/20 transform rotate-6"></div>
            <div className="h-full w-full bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-2xl overflow-hidden">
              <div className="h-full w-full flex items-center justify-center text-accent">
                <img 
                  src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/466079797_8916545358366563_5519284089125003679_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=wrVaah5vXOIQ7kNvwEwS68s&_nc_oc=AdnJBYFcerAWLUNt_9nKQ8jkrXc7sJoILexY6Dukf9CAcBmRS1e4GK-NuxtDxGmZtVk&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=vqOH-Gs-Tuh2DAzc5QEkjw&oh=00_AfHpS7KdribhjEYfA2T8iB5GLGGNzwtsSmrEcVPaAtlYog&oe=680F3D1D" 
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Code snippet decoration */}
          <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-md shadow-lg border rotate-3 hidden md:block">
            <pre className="text-xs text-muted-foreground">
              <code>{'while(!success) {\n  trySomethingNew();\n}'}</code>
            </pre>
          </div>
        </div>

        {/* About Text */}
        <div className="w-full md:w-3/5 animate-fade-in-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="space-y-4 text-lg">
            <p>
              I'm a passionate Software Engineer and Agile Project Management 
              Practitioner with over 8 years of experience building robust applications 
              and leading development teams.
            </p>
            
            <p>
              My mission is to create elegant, user-centered software solutions 
              that solve real-world problems. I believe in the power of technology 
              to transform businesses and improve people's lives, especially through 
              the thoughtful application of AI.
            </p>
            
            <p>
              When I'm not coding or managing sprints, you'll find me exploring 
              emerging technologies, contributing to open source, or mentoring 
              junior developers. I'm driven by curiosity, continuous improvement, 
              and a desire to make a positive impact.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#skills">My Expertise</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
