import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, FileCheck, TrendingUp, Users } from "lucide-react";

const services = [
  {
    slug: "automatizacion-contable",
    icon: Bot,
    title: "Contabilidad Automatizada",
    description:
      "Exploramos automatizaciones para organizar facturas, facilitar conciliaciones y generar reportes con revisión humana.",
    color: "primary",
  },
  {
    slug: "declaraciones-y-asesoria-fiscal",
    icon: FileCheck,
    title: "Cumplimiento Fiscal",
    description:
      "Revisamos tus obligaciones y te apoyamos en la preparación de declaraciones y el seguimiento fiscal.",
    color: "secondary",
  },
  {
    slug: "auditoria-fiscal-financiera",
    icon: TrendingUp,
    title: "Estrategia Fiscal Inteligente",
    description:
      "Analizamos tu información para identificar riesgos fiscales y oportunidades legales de mejora.",
    color: "primary",
  },
  {
    slug: "contabilidad-para-empresas",
    icon: Users,
    title: "Contabilidad para PYMES",
    description:
      "Atención contable y financiera orientada a las necesidades de tu empresa, con herramientas digitales.",
    color: "secondary",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-gradient-dark relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slideUp">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Todo lo que tu negocio necesita en{" "}
            <span className="text-gradient">un solo lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales de contabilidad diseñadas para crecer con tu
            empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10 group animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-primary hover:text-primary hover:bg-primary/10 group/btn"
              >
                <Link to={`/servicios/${service.slug}`}>Saber más <span className="ml-2">→</span></Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-primary text-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            Descubre cómo podemos ayudarte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
