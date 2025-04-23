
import { cn } from "@/lib/utils";
import Section from "./Section";

const timelineItems = [
  {
    year: "2022 - Present",
    title: "Senior Software Engineer",
    company: "TechInnovate Inc.",
    description:
      "Lead developer for AI-driven analytics platform. Managed a team of 5 engineers using Agile methodologies.",
  },
  {
    year: "2020 - 2022",
    title: "Full Stack Developer & Scrum Master",
    company: "Digital Solutions Co.",
    description:
      "Developed scalable web applications while serving as Scrum Master for cross-functional team.",
  },
  {
    year: "2018 - 2020",
    title: "Software Developer",
    company: "WebTech Systems",
    description:
      "Built RESTful APIs and implemented front-end features for enterprise clients.",
  },
  {
    year: "2017",
    title: "Computer Science Degree",
    company: "Tech University",
    description:
      "Bachelor's degree in Computer Science with focus on software engineering.",
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

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 z-0"></div>

        {/* Timeline items */}
        <div className="space-y-8 md:space-y-0 relative z-10">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={cn(
                  "flex flex-col md:flex-row gap-8 md:gap-0 items-start",
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}
              >
                {/* Year - only show on left for even items on desktop */}
                {index % 2 === 0 && (
                  <div className="hidden md:block w-[45%] text-right pr-8 animate-fade-in-left">
                    <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                  </div>
                )}

                {/* Central dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>

                {/* Year - mobile only */}
                <div className="md:hidden">
                  <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "bg-card border rounded-lg p-6 shadow-sm w-full",
                    index % 2 === 0
                      ? "md:w-[45%] md:pl-8 animate-fade-in-right"
                      : "md:w-[45%] md:pl-8 animate-fade-in-left"
                  )}
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-accent font-medium">{item.company}</p>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Year - only show on right for odd items on desktop */}
                {index % 2 !== 0 && (
                  <div className="hidden md:block w-[45%] pl-8 animate-fade-in-right">
                    <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
