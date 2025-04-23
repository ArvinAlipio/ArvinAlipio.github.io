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
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2020 - 2022",
    title: "Full Stack Developer & Scrum Master",
    company: "Digital Solutions Co.",
    description:
      "Developed scalable web applications while serving as Scrum Master for cross-functional team.",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2018",
    title: "Software Engineering Intern",
    company: "Commude Philippines",
    description:
      "Built RESTful APIs and implemented front-end features for enterprise clients.",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2018",
    title: "Computer Science Degree",
    company: "Mapua University",
    description: (
      <div className="space-y-2">
        <p>Bachelor's degree in Computer Science with focus on software engineering.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Full Academic Scholarship Awardee (2nd and 3rd term, S.Y. 2015 - 2016)</li>
          <li className="ml-4">- Had an average grade of not less than 1.25 for the previous quarter</li>
          <li>Half Academic Scholarship Awardee (4th term, S.Y. 2015 - 2016)</li>
          <li className="ml-4">- Had an average grade of not less than 1.75 for the previous quarter</li>
        </ul>
      </div>
    ),
    logo: "https://pbs.twimg.com/profile_images/1651793415242420224/dpijBolq_400x400.png"
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
                  {/* <span className="inline-block bg-[#001f54] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                    {item.year}
                  </span> */}
                </div>

                {/* Central dot & logo */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <Avatar className="w-20 h-20 border-4 border-background shadow-lg">
                    <AvatarImage src={item.logo} alt={item.company} />
                    <AvatarFallback>{item.company.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-card border rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-[#001f54]">{item.title}</h3>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-accent font-medium">{item.year}</span>
                      </div>
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
