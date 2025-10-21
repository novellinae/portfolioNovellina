
"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import { SiGooglecolab, SiGoogledocs } from "react-icons/si";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  links?: { label: string; url: string; icon: React.ReactNode | null }[];
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


const hoverAnimation = {
  hover: { scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" },
};

const projects: Project[] = [
  {
    id: 1,
    title: "University Student Feedback Analysis Using Naive Bayes Classification",
    description:
      "Developed an AI-based model using Naive Bayes Classification to analyze and categorize university student feedback into positive, neutral, and negative sentiments. Contributed to data preprocessing, model training, and evaluation using Python (Scikit-learn), achieving an accuracy of 60.71%.",
    image: "/project1.png",
    tags: ["Python", "Scikitlearn", "Data Analysis"],
    links: [
      { label: "Colab", url: "https://colab.research.google.com/drive/1V_jhXYxX-b072mpyBBmNbUhvEONaButQ?usp=sharing", icon: <SiGooglecolab size={16} /> },
      { label: "Read Paper", url: "https://docs.google.com/document/d/1Vh2dD5D-CfIcFta-O9629GL9uKrjolPB/edit?usp=drive_link", icon: <SiGoogledocs size={16} /> },
    ],
  },
  {
    id: 2,
    title: "Edubel: Inclusive Education Platform for Special Needs Students",
    description:
      "Edubel is an inclusive education platform designed to support students with special needs in accessing tailored learning materials with video lessons, audio explanations, diagrams, tables, and simplified text.",
    image: "/project2.png",
    tags: ["HTML", "CSS"],
    links: [{ label: "GitHub", url: "https://github.com/novellinae/Edubel_Slashcom", icon: <Github size={16} /> }],
  },
  {
    id: 3,
    title: "TemanPeduli: Crowd-Funding Apps for Social Causes",
    description:
      "TemanPeduli is a web-based crowdfunding platform designed to make fundraising more inclusive, transparent, and accessible. It features easy campaign creation, automated validation systems, transparent fund reporting, and customizable user profiles.",
    image: "/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Blade"],
    links: [{ label: "GitHub", url: "https://github.com/RioFerdinand/PKMKC-Crowdfunding", icon: <Github size={16} /> }],
  },
  {
    id: 4,
    title: "ReBio: Eco-Enzyme IoT Monitoring Apps",
    description:
      "ReBio is a mobile IoT-based application designed to monitor eco-enzyme production. It integrates sensor data with Firebase backend, tracking fermentation and biogas production in real time.",
    image: "/project4.png",
    tags: ["Dart", "Flutter", "Firebase Auth"],
    links: [{ label: "GitHub", url: "https://github.com/kensunjaya/ReBio", icon: <Github size={16} /> }],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.id}
      className="min-h-full p-6 bg-background text-foreground rounded-lg border-2 border-btn"
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ cursor: "pointer" }}
      whileHover={hoverAnimation}
    >
      {/* Image with individual animation */}
      <motion.div
        className="relative w-full h-64 flex items-center justify-center mb-6 rounded-lg overflow-hidden"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
        }}
      >
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </motion.div>

      {/* Title */}
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-2 font-quantico">{project.title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm bg-[#9561ab] text-white rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed font-mono mb-3">{project.description}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.links?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              className="flex items-center px-3 py-1 bg-foreground text-background gap-1.5 text-base rounded-lg hover:text-third transition-colors border-2 border-btn"
            >
              {link.icon}
              <span className="font-mono">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold mb-8 text-center border-b-4 border-third w-fit font-quantico">
          Projects
        </h2>
      </div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
    