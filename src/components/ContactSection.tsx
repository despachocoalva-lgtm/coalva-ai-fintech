import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
 

const ContactSection = () => {
  const handleWhatsApp = () => {
    const phone = "525545428322"; // WhatsApp number (Mexico +52)
    const message = encodeURIComponent(
      "Hola, me gustaría obtener más información sobre los servicios de COALVA."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };


  return (
    <section id="contacto" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slideUp">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Hablemos de tu{" "}
            <span className="text-gradient">contabilidad inteligente</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Agenda una asesoría gratuita y descubre cómo podemos transformar tu
            gestión financiera
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fadeIn">
            {/* Contact Cards */}
            <Card className="p-6 bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <a
                    href="tel:+525545428322"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +52 55 4542 8322
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:despacho.coalva@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    despacho.coalva@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Cobertura nacional
                    <br />
                    Lun - Jue: 9:00 - 17:00
                    <br />
                    Vie: 9:00 - 15:00
                  </p>
                </div>
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chatea con un asesor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
