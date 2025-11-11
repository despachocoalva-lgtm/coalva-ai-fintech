import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora Financiera",
    company: "TechStart MX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "COALVA transformó completamente nuestra gestión contable. Lo que antes nos tomaba semanas, ahora se resuelve en minutos. La IA es increíblemente precisa.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "CEO",
    company: "Innovatech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content:
      "La combinación de tecnología y asesoría humana es perfecta. Tenemos reportes en tiempo real y un equipo experto disponible cuando lo necesitamos.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Emprendedora",
    company: "Verde Natural",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "Como emprendedora, necesitaba concentrarme en mi negocio, no en la contabilidad. COALVA me dio esa tranquilidad y me ayudó a optimizar mis finanzas.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slideUp">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas de todos los tamaños confían en COALVA para su gestión contable
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
