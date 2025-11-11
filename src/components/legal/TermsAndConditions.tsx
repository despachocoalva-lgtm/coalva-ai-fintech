import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const TermsAndConditions = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-muted-foreground hover:text-primary text-sm p-0 h-auto">
          Términos y Condiciones
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Términos y Condiciones de Uso</DialogTitle>
          <DialogDescription className="space-y-4 text-left">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString('es-MX', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <section className="space-y-4">
              <h3 className="font-semibold text-foreground">1. Aceptación de los Términos</h3>
              <p>
                Al acceder y utilizar los servicios de COALVA, aceptas cumplir con estos Términos y Condiciones.
                Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio.
              </p>

              <h3 className="font-semibold text-foreground mt-6">2. Servicios Ofrecidos</h3>
              <p>
                COALVA proporciona servicios de asesoría contable y fiscal, incluyendo pero no limitado a:
                contabilidad automatizada, declaraciones fiscales, asesoría financiera y cumplimiento normativo.
              </p>

              <h3 className="font-semibold text-foreground mt-6">3. Responsabilidades del Usuario</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proporcionar información precisa y actualizada.</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
                <li>Utilizar el servicio de acuerdo con las leyes y regulaciones aplicables.</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-6">4. Limitación de Responsabilidad</h3>
              <p>
                COALVA no será responsable por daños indirectos, incidentales o consecuentes que resulten del uso o
                la imposibilidad de uso del servicio.
              </p>

              <h3 className="font-semibold text-foreground mt-6">5. Modificaciones</h3>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones
                entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>

              <h3 className="font-semibold text-foreground mt-6">6. Contacto</h3>
              <p>
                Para cualquier pregunta sobre estos Términos y Condiciones, por favor contáctanos a través de
                nuestro formulario de contacto o al correo electrónico: contacto@coalva.com
              </p>
            </section>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
