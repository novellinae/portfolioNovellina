import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="pt-8 w-full py-2 px-8 bg-primary text-foreground fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="relative w-12 h-12">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain"/>
                </div>
                <div className="space-x-6">
                    <a href="#home" className="hover:text-color-btn transition-colors">Home</a>
                    <a href="#aboutme" className="hover:text-color-btn transition-colors">About Me</a>
                    <a href="#projects" className="hover:text-color-btn transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-color-btn transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    );
} 