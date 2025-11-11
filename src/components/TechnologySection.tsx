import { Brain, LineChart, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import aiNetwork from "@/assets/ai-network.png";

const features = [
  {
    icon: LineChart,
    title: "Reportes en tiempo real",
    description: "Visualiza tus métricas financieras actualizadas al instante con dashboards interactivos.",
  },
  {
    icon: Shield,
    title: "Cumplimiento fiscal automatizado",
    description: "Mantente siempre al día con las obligaciones fiscales gracias a nuestra IA predictiva.",
  },
  {
    icon: Zap,
    title: "Análisis predictivo",
    description: "Anticipa flujos de efectivo y optimiza tu planeación financiera con machine learning.",
  },
  {
    icon: Brain,
    title: "Aprendizaje continuo",
    description: "Nuestra IA se adapta a tu negocio, mejorando constantemente su precisión.",
  },
];

const TechnologySection = () => {
  return (
    <section id="tecnologia" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slideUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Tecnología de vanguardia
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Contabilidad impulsada por{" "}
              <span className="text-gradient">inteligencia artificial</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Nuestra plataforma analiza tus movimientos financieros, detecta
              patrones y optimiza tus procesos fiscales con IA de aprendizaje
              continuo.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/20">
              <img
                src={aiNetwork}
                alt="Red de inteligencia artificial procesando datos contables"
                className="w-full h-auto"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-2xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
