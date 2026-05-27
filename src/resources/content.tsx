import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Samanyu",
  lastName: "Gautam",
  name: `Samanyu Gautam`,
  role: "AIML Engineer | SDE Intern Candidate",
  avatar: "/profile_pic/profile_image.png",
  email: "gautamsamanyu3482@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier for IST
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Stay updated with my latest projects and insights</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Samanyu3482",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/samanyu-gautam-cse-ai/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Code. Design. Innovate. Building the future with AI & Web Development</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">6× Hackathon Winner</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          3 International · 1 National
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    6× Hackathon winner (3 intl. · 1 national) building AI-powered full-stack products.{" "}
    CSE-AI student at <Text as="span" size="xl" weight="strong">Chitkara University</Text> with a 9.9 CGPA and Microsoft Azure AI/Data/Fundamentals certifications.{" "}
    Currently seeking <Text as="span" size="xl" weight="strong">SDE / AI-ML internships</Text> for 2026 — open to internships.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Chandigarh, India`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Samanyu Gautam, a B.E. Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at Chitkara University. Passionate about AI, software development, and problem-solving, I enjoy building intelligent web applications that solve real-world challenges through innovation and technology.
        <br /><br />
        My interests lie at the intersection of Artificial Intelligence, Full-Stack Development, Automation, and Scalable Software Systems. From AI-powered finance platforms to intelligent flight optimization systems, I love transforming ideas into impactful digital products while continuously improving my skills in DSA, web development, and machine learning.
      </>
    ),
  },
  work: {
    display: true,
    title: "Hackathon Achievements",
    experiences: [
      {
        company: "HackIndia National Finals 2025",
        timeframe: "🥈 1st Runner-Up",
        role: "AI & Full-Stack Developer",
        achievements: [],
        link: "https://github.com/Samanyu3482/meTTaFlights",
        projectLink: "/work/mettaflights-ai-flight-optimization",
        images: [],
      },
      {
        company: "BGI International Hackathon 2025",
        timeframe: "🥇 Winner",
        role: "AI Engineer & Full-Stack Developer",
        achievements: [],
        link: "https://github.com/Samanyu3482/meTTaFlights",
        projectLink: "/work/mettaflights-ai-flight-optimization",
        images: [],
      },
      {
        company: "Cyber AI International Hackathon",
        timeframe: "🥉 2nd Runner-Up",
        role: "AI Developer",
        achievements: [],
        link: "https://github.com/Samanyu3482/meTTaFlights",
        projectLink: "/work/mettaflights-ai-flight-optimization",
        images: [],
      },
      {
        company: "Build for Bharat National Hackathon",
        timeframe: "🥈 1st Runner-Up",
        role: "Full-Stack Developer",
        achievements: [],
        link: "https://github.com/Samanyu3482/ArthSaarthi",
        projectLink: "/work/arthsaarthi-financial-analysis-platform",
        images: [],
      },
      {
        company: "AI for Sustainability Hackathon",
        timeframe: "🥈 1st Runner-Up",
        role: "Web & AI Developer",
        achievements: [],
        link: "https://github.com/Samanyu3482/Urban-Mind",
        projectLink: "/work/urban-mind-carbon-emission-tracker",
        images: [],
      },
      {
        company: "Finvasia Innovation Hackathon 2026",
        timeframe: "🥈 1st Runner-Up",
        role: "GenAI & Full-Stack Developer",
        achievements: [],
        link: "https://github.com/Samanyu3482/NIVESH-AI",
        projectLink: "/work/nivesh-ai-financial-analysis-platform",
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Chitkara University",
        description: (
          <>
            Bachelor of Engineering (B.E.) — Computer Science Engineering (AI & ML) | Expected Graduation: 2028 | CGPA: 9.9 | Academic Rank: 1
          </>
        ),
        degree: "B.E. CSE — AI & ML",
        startYear: "2024",
        graduation: "2028",
        gpa: "9.9",
        rank: "1st",
      },
      {
        name: "Sainik School Sujanpur Tira",
        description: (
          <>
            Higher Secondary Education, Super Science | Apr 2016 – Apr 2023 | Grade: 85.2%
          </>
        ),
        degree: "Higher Secondary Education, Super Science",
        startYear: "Apr 2016",
        graduation: "Apr 2023",
        grade: "85.2%",
      },
      {
        name: "Sainik School Sujanpur Tira",
        description: (
          <>
            Matriculation, Secondary Education | Mar 2020 – Mar 2021 | Grade: 88.8%
          </>
        ),
        degree: "Matriculation, Secondary Education",
        startYear: "Mar 2020",
        graduation: "Mar 2021",
        grade: "88.8%",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        tags: [
          { name: "Java", icon: "java" },
          { name: "C++", icon: "cplusplus" },
          { name: "Python", icon: "python" },
          { name: "JavaScript", icon: "javascript" },
          { name: "SQL", icon: "document" },
        ],
        images: [],
      },
      {
        title: "Data Structures & Algorithms",
        tags: [
          { name: "DSA (Java)", icon: "java" },
          { name: "Algorithms", icon: "book" },
        ],
        images: [],
      },
      {
        title: "Backend & Frameworks",
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "REST APIs", icon: "globe" },
          { name: "MVC Architecture", icon: "rocket" },
          { name: "MERN", icon: "mongodb" },
          { name: "FastAPI", icon: "fastapi" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        tags: [
          { name: "React", icon: "react" },
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css3" },
          { name: "JavaScript", icon: "javascript" },
          { name: "EJS", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Databases",
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "SQLite", icon: "sqlite" },
        ],
        images: [],
      },
      {
        title: "Tools & Technologies",
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Azure", icon: "azure" },
          { name: "Postman", icon: "postman" },
          { name: "Cloudinary", icon: "globe" },
          { name: "MapTiler", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Core Concepts",
        tags: [
          { name: "Operating System", icon: "rocket" },
          { name: "OOP", icon: "book" },
          { name: "DBMS", icon: "document" },
          { name: "Computer Networks", icon: "globe" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI & Full-Stack projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/gallery/DSC08427.JPG.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/gallery/Screenshot 2025-09-29 at 10.09.47 PM.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/gallery/WhatsApp Image 2026-01-30 at 3.03.36 PM.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/gallery/WhatsApp Image 2026-03-29 at 10.51.30 PM.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/gallery/DSC08458.JPG.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/gallery/Screenshot 2025-09-29 at 10.11.09 PM.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/gallery/Screenshot 2025-09-29 at 10.12.09 PM.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/gallery/IMG_20260421_152122534.jpg.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/gallery/WhatsApp Image 2026-01-30 at 4.40.22 PM.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
