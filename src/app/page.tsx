import { Navbar } from "@/components/navbar";
import AboutMe from "@/components/aboutme";
// import Image from "next/image";
// import { Github, LinkedIn } from "lucide-react";
// kalo ada error pake 'use client'
// import { useState } from "react";
export default function Home() {
  // usestate const[nama, setName] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Navbar */}
      <Navbar />
      {/* {Hero Section} */}
      {/* Home */}
      <section id="home" className="min-h-screen flex items-center justify-between gap-10">
        <div className="min-h-screen flex flex-col items-start justify-center bg-background text-foreground">
          <h1 className="text-6xl font-bold mb-4 font-quantico">["Hi! I'm Novellina"]</h1>
          <h2 className="text-2xl mb-2 font-quantico">["Data Scientist | Analyst | Software Engineer"] </h2>
          <h3 className="text-lg mb-8 text-left font-mono max-w-[400px]">
            [""Transforming data into actionable insights and building impactful solutions through modern technologies.""]
          </h3>
          {/* <Image
            src="/profile.jpg" // Ganti dengan path gambar profil Anda
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mb-4"
          /> */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            {/* <a href="#" className="text-foreground hover:text-color-btn transition-colors"><Github size={28}/></a>
            <a href="#" className="text-foreground hover:text-color-btn transition-colors"><LinkedIn size={28}/></a> */}
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-75 transition"
            >
              View Projects
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-75 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* AboutMe Section */}
      <AboutMe />
      {/* Projects Section */}

      
    </main>
  );
}
