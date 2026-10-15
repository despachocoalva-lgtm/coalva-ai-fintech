import Header from "@/components/Header";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Contabilidad Integral y Cumplimiento Fiscal",
    description: "Gestionamos tus declaraciones mensuales y anuales, contabilidad electrónica y estrategias fiscales conforme a la legislación aplicable para ayudarte a prevenir recargos y multas.",
  },
  {
    title: "Gestión de Nómina e IMSS Automatizada",
    description: "Cálculo y revisión de sueldos y retenciones, movimientos afiliatorios ante el IMSS y emisión de CFDI de nómina, con controles para reducir errores y atender obligaciones laborales.",
  },
  {
    title: "Automatización Financiera e Integración de Sistemas",
    description: "Integramos, según las necesidades de tu empresa, herramientas contables, bancarias y de facturación para reducir tareas manuales, facilitar conciliaciones y elaborar reportes ejecutivos.",
  },
  {
    title: "Auditoría Fiscal y Financiera",
    description: "Revisamos tu situación tributaria para identificar contingencias y áreas de mejora; analizamos información y estados financieros para fortalecer el control y la toma de decisiones.",
  },
];

const differentiators = [
  {
    title: "Atención 100% Digital",
    description: "Atención remota para empresas y PYMES en todo México, sin traslados innecesarios.",
  },
  {
    title: "Tecnología con Supervisión Profesional",
    description: "Aplicamos automatización e inteligencia artificial con revisión humana para mejorar la eficiencia y reducir riesgos de error.",
  },
  {
    title: "Prevención y Cumplimiento Fiscal",
    description: "Acompañamiento preventivo y revisión de obligaciones ante el SAT e IMSS conforme a cada caso.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      <main>
        <section id="inicio" className="max-w-6xl mx-auto px-6 pt-36 pb-20 text-center scroll-mt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Contabilidad Fiscal e Inteligencia Artificial para PYMES y Empresas en México
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Simplificamos tus obligaciones ante el SAT e IMSS, automatizamos tus procesos financieros y apoyamos el crecimiento de tu negocio con servicios contables digitales.
          </p>
          <a
            href="https://wa.me/525545428322?text=Hola%2C%20quiero%20agendar%20una%20asesor%C3%ADa%20gratuita%20con%20COALVA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-200"
          >
            Agendar Asesoría Gratuita
          </a>
        </section>

        <section id="servicios" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios Estratégicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article key={service.title} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="nosotros" className="bg-slate-800 py-16 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">¿Por qué elegir Coalva?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((item) => (
                <div className="p-4" key={item.title}>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TechnologySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
