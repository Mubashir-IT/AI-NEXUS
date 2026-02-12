import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/30">
            AI
          </div>
          <span className="font-heading font-bold text-xl text-zinc-900 dark:text-white">Nexus</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <Link href="/features" className={`hover:text-violet-600 transition-colors ${location === '/features' ? 'text-violet-600' : ''}`}>Features</Link>
          <Link href="/solutions" className={`hover:text-violet-600 transition-colors ${location === '/solutions' ? 'text-violet-600' : ''}`}>Solutions</Link>
          <Link href="/pricing" className={`hover:text-violet-600 transition-colors ${location === '/pricing' ? 'text-violet-600' : ''}`}>Pricing</Link>
          <Link href="/docs" className={`hover:text-violet-600 transition-colors ${location === '/docs' ? 'text-violet-600' : ''}`}>Docs</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100">Sign In</Button>
          <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg shadow-lg shadow-violet-500/10">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
