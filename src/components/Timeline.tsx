import { cn } from "@/lib/utils";
import Section from "./Section";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const timelineItems = [
  {
    year: "2023",
    title: "Application Development Senior Analyst",
    company: "Accenture",
    description: (
      <div className="space-y-2">
        <p>Finally, after more than a year I decided to move again and take a leap of faith to look for better opportunities with regards to my career, now, I am currently working as an Application Development Senior Analyst in Accenture.</p>
        <p>My role involves working with a variety of clients with regards to full stack development efforts, conducting thorough code reviews to maintain code quality, and following test-driven development practices to ensure reliability. In addition to my development work, I also take part in Agile project management, acting as an SME with regards to Agile methodologies to help continuously improve delivery process.</p>
      </div>
    ),
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJpgQxCXa_ut0bLFycTpPzoQXnYvgedz1Lg&s?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2021",
    title: "Senior Full Stack Developer & Process Automation Developer",
    company: "DBC Philippines",
    description: (
      <div className="space-y-2">
        <p>After more than a year, I decided to push my career forward again and moved to a new company as a Senior Full Stack and Process Automation Developer.</p>
        <p>In this role, I worked as part of an Agile team specializing in Full Stack Web Development, with our projects centered on streamlining and enhancing conveyancing processes in the real estate industry.</p>
        <p>In parallel with my Full Stack Web Development role, I was also part of a dedicated team that spearheaded the automation of conveyancing processes using Azure services—helping streamline complex workflows and improve operational efficiency in the real estate domain.</p>
      </div>
    ),
    logo: "https://media.glassdoor.com/sqll/5352089/dbc-philippines-squareLogo-1658877747906.png?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2020",
    title: "Software Engineer",
    company: "Cambridge University Press and Assessment",
    description: (
      <div className="space-y-2">
        <p>After more than a year I decided to move to a company wherein I feel that I can be impactful not only within the company but to a wider community, and so I moved and started working as a Software Engineer in Cambridge University Press back in 2020.</p>
        <p>My role mainly includes collaborating with a team of software engineers and deliver tasks with regards to web development, I also participate in team meetings wherein I am a part of a great team of professionals who follows the Agile methodology of project management.</p>
      </div>
    ),
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAjWN1Lk21MLAU12aLVRQ0BI5RvBPdy77hQ&s?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2019",
    title: "Full-Stack Web Developer & SAP Basis Administrator",
    company: "DXC Technology",
    description: (
      <div className="space-y-2">
        <p>Moved to a different company after more than a year of experience and transferred to DXC Technology as a Full-stack web developer and SAP Basis adminitrator.</p>
        <p>My role included spearheading the development of the new Knowledge Management System used by the company's employees which greatly widened my horizons with regards to web development, my role also included the maintenance of the old KMS while the updated version is being developed.</p>
        <p>Another role that I was given in parallel with the full-stack web development role is with regards to SAP Basis administration, wherein I was part of the support team of SAP Basis Admins that resolves various SAP issues of our partner accounts.</p>
      </div>
    ),
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/DXC_Tech.png?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2018",
    title: "Software Engineer",
    company: "Commude Philippines",
    description: (
      <div className="space-y-2">
        <p>After 5 months of internship I was absorbed by the company wherein I am having my internship and I was offered a full-time position of Software Engineer with focus to back-end web development.</p>
        <p>My roles and responsibilities have expanded upon employment as a regular employee. I experienced facilitating stand-up meetings, deploying web applications to the server, I also experienced mentoring and training interns with regards to back-end web development.</p>
      </div>
    ),
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6d17TimSc69vKXnkDP53LO5xgJkLELJFHQ&s?w=200&h=200&fit=crop&q=80"
  },
  {
    year: "2018",
    title: "Software Engineering Intern",
    company: "Commude Philippines",
    description: (
      <div className="space-y-2">
        <p>My very first job experience came from a Japanese company named Commude Philippines, wherein I learned and established my knowledge with regards to Back-End web development especially with regards to the MVC framework.</p>
        <p>I also participate in the company's employees team meetings, and I also had a responsibility of guiding fellow interns with regards to Back-end web development, and testing of developed web applications.</p>
      </div>
    ),
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6d17TimSc69vKXnkDP53LO5xgJkLELJFHQ&s?w=200&h=200&fit=crop&q=80"
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
