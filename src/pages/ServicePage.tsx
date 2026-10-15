import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { whatsappLink, trackWhatsAppClick } from "@/lib/whatsappTracking";

type Service = { slug: string; title: string; intro: string; features: { title: string; body: string }[]; question: string; answer: string };
const services: Service[] = [
  {
    "slug": "contabilidad-para-empresas",
    "title": "Contabilidad para PYMES y empresas en México",
    "intro": "Organizamos tu contabilidad para que conozcas tus resultados y cumplas tus obligaciones.",
    "features": [
      {
        "title": "Registro y revisión contable",
        "body": "Organización de CFDI, pólizas y conciliaciones según las necesidades de tu operación."
      },
      {
        "title": "Información financiera útil",
        "body": "Reportes y seguimiento para tomar decisiones con información ordenada."
      }
    ],
    "question": "¿Necesitas poner al día tu contabilidad?",
    "answer": "Revisamos tu situación inicial y definimos el alcance del servicio."
  },
  {
    "slug": "declaraciones-y-asesoria-fiscal",
    "title": "Declaraciones SAT y asesoría fiscal para empresas",
    "intro": "Te acompañamos en el cumplimiento de obligaciones fiscales y en la prevención de contingencias.",
    "features": [
      {
        "title": "Declaraciones y obligaciones",
        "body": "Revisión de información y preparación de declaraciones aplicables a tu régimen fiscal."
      },
      {
        "title": "Diagnóstico preventivo",
        "body": "Identificación de inconsistencias, riesgos y oportunidades permitidas por la ley."
      }
    ],
    "question": "¿Tienes declaraciones pendientes?",
    "answer": "Podemos revisar periodos, obligaciones y documentos antes de proponerte acciones."
  },
  {
    "slug": "nomina-e-imss",
    "title": "Servicio de nómina e IMSS para PYMES",
    "intro": "Apoyo en cálculo de nómina, CFDI y obligaciones de seguridad social con controles de revisión.",
    "features": [
      {
        "title": "Procesamiento de nómina",
        "body": "Cálculo de percepciones, deducciones y timbrado de CFDI de nómina según corresponda."
      },
      {
        "title": "Movimientos y cumplimiento",
        "body": "Apoyo con altas, bajas, modificaciones y revisión de obligaciones relacionadas con IMSS."
      }
    ],
    "question": "¿Tu nómina consume demasiado tiempo?",
    "answer": "Analizamos tu proceso actual y las posibilidades de automatización."
  },
  {
    "slug": "auditoria-fiscal-financiera",
    "title": "Auditoría fiscal y financiera para negocios",
    "intro": "Identifica riesgos, diferencias y oportunidades para fortalecer el control de tu empresa.",
    "features": [
      {
        "title": "Revisión fiscal",
        "body": "Análisis documental y de cumplimiento para identificar posibles contingencias."
      },
      {
        "title": "Revisión financiera",
        "body": "Evaluación de registros y estados financieros para detectar áreas de mejora."
      }
    ],
    "question": "¿Quieres conocer tus riesgos?",
    "answer": "Solicita una revisión inicial para definir el alcance del diagnóstico."
  },
  {
    "slug": "automatizacion-contable",
    "title": "Automatización contable e inteligencia artificial para PYMES",
    "intro": "Reduce actividades repetitivas conectando procesos administrativos, contables y financieros.",
    "features": [
      {
        "title": "Integración de procesos",
        "body": "Evaluamos conexiones entre facturación, bancos, reportes y herramientas administrativas."
      },
      {
        "title": "Automatización con controles",
        "body": "Diseñamos flujos con validaciones y supervisión humana para reducir errores operativos."
      }
    ],
    "question": "¿Qué tarea te gustaría automatizar?",
    "answer": "Revisamos tu proceso y proponemos una solución ajustada a tu negocio."
  }
];
export { services };
const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  useEffect(() => {
    if (!service) return;
    document.title = `${service.title} | COALVA`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", service.intro + " Atención digital en todo México.");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", `https://coalva-ai-fintech.vercel.app/servicios/${service.slug}`);
    return () => {
      document.title = "Despacho Contable y Fiscal en México | COALVA";
      desc?.setAttribute("content", "Servicios de contabilidad para PYMES en México: declaraciones SAT, nómina e IMSS, auditoría fiscal y automatización financiera. Conoce COALVA.");
      canonical?.setAttribute("href", "https://coalva-ai-fintech.vercel.app/");
    };
  }, [service]);
  if (!service) return <div className="min-h-screen bg-background text-foreground p-12"><h1>Servicio no encontrado</h1><Link to="/">Volver al inicio</Link></div>;
  return <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="container mx-auto px-4 lg:px-8 pt-36 pb-20">
      <nav aria-label="Ruta de navegación" className="text-sm text-muted-foreground mb-8"><Link to="/" className="hover:text-primary">Inicio</Link> / Servicios / {service.title}</nav>
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">{service.title}</h1>
        <p className="text-lg lg:text-xl text-muted-foreground mb-8">{service.intro}</p>
        <a href={whatsappLink(service.title)} onClick={() => trackWhatsAppClick(service.slug)} target="_blank" rel="noopener noreferrer" className="inline-flex px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90">Solicitar asesoría gratuita</a>
      </section>
      <section className="grid md:grid-cols-2 gap-6 mb-16" aria-label="Qué incluye el servicio">
        {service.features.map(f => <article key={f.title} className="rounded-2xl bg-card/50 border border-primary/20 p-8"><h2 className="text-2xl font-bold mb-4">{f.title}</h2><p className="text-muted-foreground">{f.body}</p></article>)}
      </section>
      <section className="rounded-2xl border border-primary/20 bg-card/30 p-8 text-center max-w-4xl mx-auto mb-16"><h2 className="text-3xl font-bold mb-4">{service.question}</h2><p className="text-muted-foreground">{service.answer}</p><p className="text-sm text-muted-foreground mt-4">El alcance y los resultados dependen de la información y situación de cada empresa.</p></section>
      <section aria-label="Otros servicios"><h2 className="text-2xl font-bold mb-5">Otros servicios de COALVA</h2><div className="flex flex-wrap gap-3">{services.filter(s => s.slug !== slug).map(s => <Link key={s.slug} className="rounded-xl border border-primary/20 px-4 py-3 text-primary hover:bg-primary/10" to={`/servicios/${s.slug}`}>{s.title}</Link>)}</div></section>
    </main>
    <Footer />
  </div>;
};
export default ServicePage;
