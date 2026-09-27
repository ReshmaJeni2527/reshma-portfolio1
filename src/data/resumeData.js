// Single source of truth for all portfolio content.
// Every value here comes directly from Reshma M's resume — nothing invented.

export const profile = {
  name: "Reshma M",
  initials: "RM",
  title: "Web Developer | Front-End Developer",
  phone: "+91 8438952199",
  email: "reshmaguru665@gmail.com",
  location: "Tamil Nadu, India",
  summary:
    "MCA graduate with a strong foundation in web development using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS, supported by Python and DBMS fundamentals. Developed academic projects including a billing system and expense tracker, with a focus on practical application development and usability. Seeking an entry-level Web Developer or Front-End Developer role to contribute to user-focused web applications and grow in a collaborative environment.",
};

export const skillGroups = [
  {
    label: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Programming",
    skills: ["Python"],
  },
  {
    label: "Database",
    skills: ["DBMS Fundamentals"],
  },
  {
    label: "Application Development",
    skills: ["Billing Systems", "Expense Tracking"],
  },
  {
    label: "Security Concepts",
    skills: ["Encryption Techniques"],
  },
  {
    label: "Office Tools",
    skills: ["MS Word", "MS Excel", "PowerPoint"],
  },
];

export const strengths = [
  "Quick Learner",
  "Problem Solving",
  "Team Collaboration",
  "Time Management",
  "Communication Skills",
  "Adaptability",
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Nehru Memorial College, Puthanampatti",
    detail: "CGPA: 84.6%",
    period: "Completed 2026",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bon Secours College for Women, Thanjavur",
    detail: "CGPA: 82.3%",
    period: "Graduated 2024",
  },
];

export const projects = [
  {
    name: "Jensi Tailoring Shop",
    description:
      "A responsive tailoring shop website with a custom appointment-booking experience for blouse and dress stitching services.",
    features: ["Service showcase", "Appointment booking", "Responsive design"],
    impact: "Created a user-friendly online presence for showcasing tailoring services and collecting appointment requests.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://jensi-tailoring-shop.vercel.app",
    githubUrl: "https://github.com/ReshmaJeni2527/jensi-tailoring-shop",
  },
  {
    name: "Brew & Bite",
    description:
      "A modern restaurant website for Brew & Bite featuring menu, offers, gallery, contact, and reservation sections.",
    features: ["Menu showcase", "Offers section", "Gallery", "Reservation section"],
    impact: "Built a polished restaurant web experience focused on clear presentation and easy navigation.",
    tech: ["React", "Vite", "CSS"],
    liveUrl: "https://brew-and-bite-eta.vercel.app",
    githubUrl: "https://github.com/ReshmaJeni2527/Brew-and-Bite",
  },
  {
    name: "Competition Billing System",
    description:
      "Developed a billing system to manage products, calculate totals, and generate bills efficiently.",
    features: ["Product management", "Automatic total calculation", "Bill generation"],
    impact: "Improved billing accuracy and reduced manual billing effort.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Smart Expense Tracker",
    description:
      "Designed and developed an expense-tracking application for recording and managing expenses.",
    features: ["Record expenses", "Categorize spending", "Monitor budgets"],
    impact: "Enabled users to record, categorize, and monitor expenses effectively.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    name: "Secure Attribute-Based Data Sharing in Cloud",
    description:
      "Developed a secure cloud-based data-sharing system using encryption techniques.",
    features: ["Attribute-based access", "Encryption techniques", "Cloud data sharing"],
    impact: null,
    tech: ["Python", "Encryption"],
  },
];

export const certifications = [
  {
    title: "School Database Management System Using Python",
    issuer: "LiveWire, Thanjavur",
  },
  {
    title: "Web Development",
    issuer: "Motion Cut (AICTE Approved)",
  },
  {
    title: "Web Development",
    issuer: "Digiplus Academy, Trichy",
  },
  {
    title: "Blockchain and Its Applications",
    issuer: "NPTEL",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
  },
  {
    title: "Distributed Systems",
    issuer: "NPTEL",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
  },
];

export const publication = {
  title:
    "A Survey on Python-Based Data Visualization Techniques and Educational Approaches",
  venue: "Published in IJSREM",
};

export const additionalSkills = [
  "MS Word, MS Excel, PowerPoint",
  "Tamil and English Typewriting",
];

// No LinkedIn / GitHub URLs are present on the resume, so contact links only
// include channels that were actually provided (email, phone).
export const contactLinks = {
  email: profile.email,
  phone: profile.phone,
};

export const resumeFile = "/Reshma_M_Resume.pdf";
