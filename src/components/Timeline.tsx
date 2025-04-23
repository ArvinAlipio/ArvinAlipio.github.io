
import { cn } from "@/lib/utils";
import Section from "./Section";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const timelineItems = [
  {
    year: "2022 - Present",
    title: "Senior Software Engineer",
    company: "TechInnovate Inc.",
    description:
      "Lead developer for AI-driven analytics platform. Managed a team of 5 engineers using Agile methodologies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    logo: "TI"
  },
  {
    year: "2020 - 2022",
    title: "Full Stack Developer & Scrum Master",
    company: "Digital Solutions Co.",
    description:
      "Developed scalable web applications while serving as Scrum Master for cross-functional team.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    logo: "DS"
  },
  {
    year: "2018 - 2020",
    title: "Software Developer",
    company: "WebTech Systems",
    description:
      "Built RESTful APIs and implemented front-end features for enterprise clients.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    logo: "WS"
  },
  {
    year: "2017",
    title: "Computer Science Degree",
    company: "Tech University",
    description:
      "Bachelor's degree in Computer Science with focus on software engineering.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    logo: "TU"
  },
];

const Timeline = () => {
  return (
    <Section id="timeline" className="bg-muted/50">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          My <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional growth as a software engineer and agile project manager.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#001f54]/20 -translate-x-1/2 z-0"></div>

        {/* Timeline items */}
        <div className="space-y-16 md:space-y-24 relative z-10">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Year */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 md:static md:translate-x-0 mb-4 md:mb-0 md:flex-1 md:text-right">
                  <span className="inline-block bg-[#001f54] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                    {item.year}
                  </span>
                </div>

                {/* Central dot & logo */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <Avatar className="w-12 h-12 border-4 border-background shadow-md bg-[#001f54] text-white">
                    <AvatarFallback>{item.logo}</AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-card border rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#001f54]">{item.title}</h3>
                      <p className="text-accent font-medium mb-2">{item.company}</p>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
