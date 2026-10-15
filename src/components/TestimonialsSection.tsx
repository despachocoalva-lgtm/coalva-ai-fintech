import { Card } from "@/components/ui/card";
import { ClipboardCheck, Handshake, FileCheck2 } from "lucide-react";

const steps = [
  { icon: Handshake, title: "Conocemos tu negocio", description: "Escuchamos tus necesidades contables, fiscales y financieras antes de proponer un servicio." },
  { icon: ClipboardCheck, title: "Revisamos tu situación", description: "Identificamos obligaciones, procesos y documentación necesarios para definir el alcance del trabajo." },
  { icon: FileCheck2, title: "Acordamos los siguientes pasos", description: "Te explicamos una propuesta de atención y las acciones prioritarias para tu empresa." },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-32 bg-gradient-dark relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold">Así <span className="text-gradient">trabajamos contigo</span></h2>
        <p className="text-lg text-muted-foreground">Atención profesional y un proceso claro desde el primer contacto.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <Card key={step.title} className="p-6 bg-card/50 border-primary/10 hover:border-primary/30 transition-all">
            <step.icon className="w-9 h-9 text-primary mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
export default TestimonialsSection;
