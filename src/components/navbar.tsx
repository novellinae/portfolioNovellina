export const Navbar = () => {
    return (
        <nav className="w-full py-4 px-8 bg-background text-foreground fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold font-quantico">Novellina</div>
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