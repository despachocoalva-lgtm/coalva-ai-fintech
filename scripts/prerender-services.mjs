import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const origin = "https://coalva-ai-fintech.vercel.app";
const source = readFileSync("src/pages/ServicePage.tsx", "utf8");
const match = source.match(/const services: Service\[\] = (\[[\s\S]*?\]);\s*export \{ services \}/);
if (!match) throw new Error("No se encontró la configuración de servicios");
const services = JSON.parse(match[1]);
const template = readFileSync("dist/index.html", "utf8");
const escapeHtml = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
for (const s of services) {
  const path = `/servicios/${s.slug}`;
  const url = origin + path;
  const title = `${s.title} | COALVA`;
  const description = `${s.intro} Atención digital en todo México.`;
  const article = `<main class="container mx-auto px-4 lg:px-8 pt-36 pb-20"><nav aria-label="Ruta de navegación"><a href="/">Inicio</a> / Servicios / ${escapeHtml(s.title)}</nav><section class="max-w-4xl mx-auto text-center mb-16"><h1 class="text-4xl lg:text-6xl font-bold mb-6">${escapeHtml(s.title)}</h1><p class="text-lg text-muted-foreground mb-8">${escapeHtml(s.intro)}</p><a href="https://wa.me/525545428322?text=${encodeURIComponent(`Hola, quiero información sobre los servicios de COALVA. Referencia: ${s.title}.`)}">Solicitar asesoría gratuita</a></section><section class="grid md:grid-cols-2 gap-6 mb-16">${s.features.map(f=>`<article class="rounded-2xl bg-card/50 border border-primary/20 p-8"><h2 class="text-2xl font-bold mb-4">${escapeHtml(f.title)}</h2><p>${escapeHtml(f.body)}</p></article>`).join("")}</section><section><h2>${escapeHtml(s.question)}</h2><p>${escapeHtml(s.answer)}</p></section><section><h2>Otros servicios de COALVA</h2>${services.filter(t=>t.slug!==s.slug).map(t=>`<a href="/servicios/${t.slug}">${escapeHtml(t.title)}</a>`).join(" ")}</section></main>`;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<div id="root">[\s\S]*?(?=<script type="module")/, `<div id="root">${article}</div>\n    `);
  const dir = join("dist", "servicios", s.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
}
console.log(`Generadas ${services.length} páginas HTML de servicios para buscadores.`);
