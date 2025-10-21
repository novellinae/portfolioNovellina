import { Navbar } from "@/components/navbar";
import AboutMe from "@/components/aboutme"; 
import Projects from "@/components/projects";
import { Github, Linkedin } from "lucide-react";


// import Image from "next/image";
// import { Github, LinkedIn } from "lucide-react";
// kalo ada error pake 'use client'
// import { useState } from "react";
export default function Home() {
  // usestate const[nama, setName] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-20 lg:px-40 py-10 bg-primary text-secondary">
      {/* Navbar */}
      <Navbar />  
      {/* {Hero Section} */}
      {/* Home */}
      <section id="home" className="min-h-screen flex items-center justify-between gap-10">
        <div className="min-h-screen flex flex-col items-start justify-center bg-background text-foreground">
          <h1 className="text-6xl font-bold mb-4 font-quantico">{"Hi! I'm Novellina"}</h1>
          <h2 className="text-2xl mb-2 font-quantico">{"Data Scientist | Analyst | Software Engineer"}</h2>
          <h3 className="text-lg mb-8 text-left font-mono max-w-[400px]">
            {"Transforming data into actionable insights and building impactful solutions through modern technologies."}
          </h3>
          {/* <Image
            src="/profile.jpg" // Ganti dengan path gambar profil Anda
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mb-4"
          /> */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#projects"
                className="px-4 py-2 bg-third text-foreground rounded hover:bg-opacity-75 transition border-2 border-third mt-6"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1Ury5pfqxP72XhbmnS3lYkwB_qyrgenRa/view?usp=drive_link"
                className="px-4 py-2 bg-third text-foreground rounded hover:bg-opacity-75 transition border-2 border-third mt-6"
              >
                Download CV
              </a>
            </div>
            
            <div className="flex items-center md:justify-start gap-4 mt-8 ">
              <a href="https://github.com/novellinae" className="text-foreground hover:text-color-btn transition-colors"><Github size={28}/></a>
              <a href="https://www.linkedin.com/in/novellina-edyawati" className="text-foreground hover:text-color-btn transition-colors"><Linkedin size={28}/></a>
            </div>
          </div>
        </div>
      </section>

      {/* AboutMe Section */}
      <AboutMe />
      {/* Projects Section */}
      <Projects/>
      {/* Contact Section */}
      {/* <Contact /> */}
      {/* Footer */}
      <footer className="w-full grid grid-cols-3 items-center py-4 mt-10 text-sm text-secondary font-sans">
        <div></div>
        <span className="text-gray-400 text-sm  text-center">
          &copy; {new Date().getFullYear()} Novellina Edyawati. All rights reserved.
        </span>
        <div className="flex items-center justify-end gap-4">
          <a href="https://github.com/novellinae" className="text-foreground hover:text-color-btn transition-colors"><Github size={28}/></a>
          <a href="https://www.linkedin.com/in/novellina-edyawati" className="text-foreground hover:text-color-btn transition-colors"><Linkedin size={28}/></a>
        </div>    
      </footer>
            
    </main>
  );
}
