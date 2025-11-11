import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aviso de Privacidad | COALVA";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        
        <div className="bg-card p-8 rounded-lg shadow-sm border">
          <h1 className="text-3xl font-bold mb-6">Aviso de Privacidad</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              Última actualización: {new Date().toLocaleDateString('es-MX', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Responsable del Tratamiento</h2>
                <p>
                  COALVA, con domicilio en México, es responsable del tratamiento de sus datos personales.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">2. Datos Personales Recopilados</h2>
                <p>Podemos recopilar la siguiente información personal:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Nombre completo</li>
                  <li>Información de contacto (correo electrónico, teléfono)</li>
                  <li>Información fiscal (RFC, dirección fiscal)</li>
                  <li>Datos financieros (cuando sea necesario para los servicios contratados)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">3. Finalidades del Tratamiento</h2>
                <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Prestar los servicios contables y fiscales contratados</li>
                  <li>Dar cumplimiento a obligaciones fiscales y legales</li>
                  <li>Enviar información relevante sobre nuestros servicios</li>
                  <li>Mejorar nuestros servicios y atención al cliente</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">4. Transferencia de Datos</h2>
                <p>
                  Sus datos podrán ser compartidos con autoridades fiscales y otras entidades cuando sea necesario
                  para cumplir con obligaciones legales o cuando medie su consentimiento expreso.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">5. Derechos ARCO</h2>
                <p>
                  Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales
                  (Derechos ARCO). Para ejercer estos derechos, envíe una solicitud a nuestro correo electrónico:
                  despacho.coalva@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">6. Cambios al Aviso de Privacidad</h2>
                <p>
                  Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio será publicado
                  en nuestro sitio web con la fecha de actualización correspondiente.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">7. Contacto</h2>
                <p>
                  Para cualquier duda o aclaración sobre este aviso de privacidad, puede contactarnos en:
                  <br />
                  Correo: despacho.coalva@gmail.com
                  <br />
                  Teléfono: 55 4542 8322
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
