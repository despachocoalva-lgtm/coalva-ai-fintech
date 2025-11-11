import { CheckCircle2, Lock, TrendingUp, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: UserCheck,
    title: "IA con revisión humana",
    description:
      "Lo mejor de ambos mundos: velocidad y precisión de la IA, supervisada por contadores certificados.",
  },
  {
    icon: TrendingUp,
    title: "Reportes financieros precisos",
    description:
      "Dashboards en tiempo real con análisis profundo de tu situación financiera y proyecciones inteligentes.",
  },
  {
    icon: Lock,
    title: "Seguridad nivel empresarial",
    description:
      "Tus datos protegidos con encriptación de grado bancario y cumplimiento de estándares internacionales.",
  },
  {
    icon: CheckCircle2,
    title: "Asesoría continua personalizada",
    description:
      "Soporte estratégico cuando lo necesites, con recomendaciones adaptadas a tu industria y objetivos.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slideUp">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            La combinación perfecta entre{" "}
            <span className="text-gradient">tecnología y experiencia humana</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Automatizamos lo complejo, potenciamos lo humano.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 group text-center animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 lg:p-12 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                10 años
              </div>
              <div className="text-muted-foreground">
                De experiencia contable
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                99.8%
              </div>
              <div className="text-muted-foreground">
                Satisfacción del cliente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
