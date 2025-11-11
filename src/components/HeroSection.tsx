import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slideUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Impulsado por Inteligencia Artificial
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-primary/20">
              <span className="text-xs font-medium text-muted-foreground">
                Cobertura nacional
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Menos trabajo.{" "}
              <span className="text-gradient">Más precisión.</span>{" "}
              Resultados inteligentes.
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
              Automatizamos tu contabilidad con inteligencia artificial para que
              tomes decisiones financieras con total confianza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-primary text-foreground font-semibold hover:opacity-90 transition-opacity glow-primary group"
              >
                Solicita una demo gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("tecnologia")}
                className="border-primary/30 hover:bg-primary/10"
              >
                Conoce nuestra tecnología
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Precisión
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Monitoreo
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient">-70%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Tiempo ahorrado
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="relative animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img
                src={heroDashboard}
                alt="Dashboard de contabilidad inteligente con IA"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-glow" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
