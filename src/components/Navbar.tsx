import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-primary">Adriano & Couto</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("escritorio")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              O Escritório
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5521974452474", "_blank")}
              className="bg-accent hover:bg-accent/90"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("escritorio")}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              O Escritório
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Contato
            </button>
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5521974452474", "_blank")}
              className="w-full bg-accent hover:bg-accent/90"
            >
              WhatsApp
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
