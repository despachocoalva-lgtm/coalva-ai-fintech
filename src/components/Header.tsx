import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#inicio" className="text-2xl font-bold text-gradient">
              COALVA
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("tecnologia")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tecnología IA
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-primary text-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
            >
              Agenda tu asesoría gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("tecnologia")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Tecnología IA
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-primary text-foreground font-semibold w-full"
              >
                Agenda tu asesoría
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
