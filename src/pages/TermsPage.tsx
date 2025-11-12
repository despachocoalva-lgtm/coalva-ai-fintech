import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Términos y Condiciones | COALVA";
    // Desplazar al inicio de la página al cargar
    window.scrollTo(0, 0);
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
          <h1 className="text-3xl font-bold mb-6">Términos y Condiciones de Uso</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              Última actualización: {new Date().toLocaleDateString('es-MX', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <section className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar los servicios de COALVA, aceptas cumplir con estos Términos y Condiciones.
                  Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">2. Servicios Ofrecidos</h2>
                <p>
                  COALVA proporciona servicios de asesoría contable y fiscal, incluyendo pero no limitado a:
                  contabilidad automatizada, declaraciones fiscales, asesoría financiera y cumplimiento normativo.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">3. Responsabilidades del Usuario</h2>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Proporcionar información precisa y actualizada.</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
                  <li>Utilizar el servicio de acuerdo con las leyes y regulaciones aplicables.</li>
                  <li>No utilizar el servicio para actividades ilegales o no autorizadas.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">4. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido, logotipos y materiales proporcionados por COALVA son propiedad exclusiva de la empresa
                  y están protegidos por las leyes de propiedad intelectual. Queda estrictamente prohibido su uso sin autorización previa por escrito.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">5. Limitación de Responsabilidad</h2>
                <p>
                  COALVA no será responsable por daños indirectos, incidentales o consecuentes que resulten del uso o
                  la imposibilidad de uso del servicio. En la máxima medida permitida por la ley, nuestra responsabilidad
                  se limitará al monto que haya pagado por el servicio.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">6. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las actualizaciones serán
                  publicadas en esta página con una nueva fecha de "Última actualización". El uso continuado del servicio
                  después de dichos cambios constituirá su consentimiento a tales cambios.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">7. Ley Aplicable y Jurisdicción</h2>
                <p>
                  Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos.
                  Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de la Ciudad de México.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">8. Contacto</h2>
                <p>
                  Para cualquier pregunta sobre estos Términos y Condiciones, por favor contáctanos a través de
                  nuestro formulario de contacto o al correo electrónico <a href="mailto:despacho.coalva@gmail.com" className="text-primary hover:underline">despacho.coalva@gmail.com</a>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
