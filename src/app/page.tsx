import Image from "next/image";
// kalo ada error pake 'use client'
// import { useState } from "react";
export default function Home() {
  // usestate const[nama, setName] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {}
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-6xl font-bold mb-4 font-quantico">Hi! I'm Novellina</h1>
        <h2 className="text-lg mb-8 text-center px-4">
          "Transforming data into actionable insights and building impactful solutions through modern technologies."
        </h2>
        {/* <Image
          src="/profile.jpg" // Ganti dengan path gambar profil Anda
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4"
        /> */}
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
    </main>
  );
}
