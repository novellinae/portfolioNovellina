"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


export const Navbar = () => {
    const navigation = useRouter();
    return (
        <nav className="pt-8 w-full py-2 px-8 bg-primary text-foreground fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="relative w-12 h-12">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain cursor-pointer" onClick={() => navigation.push("/")}/>
                </div>
                <div className="space-x-10 font-mono text-lg ">
                    <a href="#aboutme" className="relative inline-block text-secondary
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:w-0 after:bg-third
                    after:transition-all after:duration-300 
                    hover:after:w-full">About Me</a>
                    <a href="#projects" className="relative inline-block text-secondary
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:w-0 after:bg-third
                    after:transition-all after:duration-300 
                    hover:after:w-full">Projects</a>
                    <a href="#contact" className="relative inline-block text-secondary 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:w-0 after:bg-third
                    after:transition-all after:duration-300 
                    hover:after:w-full">Contact</a>
                </div>
            </div>
        </nav>
    );
} 