import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2" data-testid="link-logo">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
              Dipsa Enterprises
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("octo-wash")}
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            data-testid="nav-octo"
          >
            OCTO WASH
          </button>
          <button 
            onClick={() => scrollToSection("dexta")}
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            data-testid="nav-dexta"
          >
            DEXTA
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            data-testid="nav-contact"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            size="sm" 
            className="font-semibold"
            data-testid="btn-inquire"
          >
            Inquire Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            data-testid="btn-mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          <button 
            onClick={() => scrollToSection("octo-wash")}
            className="text-left text-base font-medium text-slate-600 py-2"
          >
            OCTO WASH
          </button>
          <button 
            onClick={() => scrollToSection("dexta")}
            className="text-left text-base font-medium text-slate-600 py-2"
          >
            DEXTA
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-left text-base font-medium text-slate-600 py-2"
          >
            Contact
          </button>
          <Button onClick={() => scrollToSection("contact")} className="w-full">
            Inquire Now
          </Button>
        </div>
      )}
    </nav>
  );
}
