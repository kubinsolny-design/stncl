import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { services } from "@/lib/site";

const details = {
  "vnitrostatni-autodoprava": { intro: "Přeprava zboží po celé České republice s přímým dohledem dispečinku.", scope: ["Celorepublikové pokrytí", "Pravidelné i jednorázové přepravy", "GPS monitoring vozidel", "Proškolení řidiči s dlouholetou praxí"], contact: "dispecink.otice@stenceltransport.cz" },
  "mezinarodni-autodoprava": { intro: "Silniční přeprava do klíčových evropských zemí s komunikací v češtině i angličtině.", scope: ["Působnost v zemích Evropské unie", "Anglicky mluvící personál dispečinku", "GPS monitoring vozidel", "Možnost individuálního připojištění hodnotných zásilek"], contact: "dispecink.otice@stenceltransport.cz" },
  spedice: { intro: "Flexibilní zajištění přepravy vlastními vozidly nebo ve spolupráci se smluvními dopravci.", scope: ["Zajištění přepravy po celé Evropě", "Vlastní i smluvní dopravci", "Řešení kapacity podle konkrétní zásilky", "Průběžná komunikace s dispečinkem"], contact: "radka.boniatti@stenceltransport.cz" },
} as const;

type Slug = keyof typeof details;
export function generateStaticParams() { return Object.keys(details).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = services.find(item => item.slug === slug); if (!service) return {}; return { title: service.title, description: `${details[slug as Slug].intro} Poptávka přepravy online.`, alternates: { canonical: `/${slug}` } }; }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in details)) notFound();
  const detail = details[slug as Slug];
  const service = services.find(item => item.slug === slug)!;
  return <main id="obsah">
    <section className="service-hero"><Image src={service.image} alt={service.title} fill priority sizes="100vw" /><div className="hero-overlay" /><div className="container"><span className="eyebrow light">{service.eyebrow}</span><h1>{service.title}</h1><p>{detail.intro}</p><Link href="/poptavka" className="button">Poptat přepravu <Icon name="arrow" /></Link></div></section>
    <section className="section"><div className="container service-detail"><div><span className="eyebrow">Rozsah služby</span><h2>Řešení postavené na vaší trase.</h2><p>Každou poptávku posuzujeme individuálně podle cíle, termínu, charakteru nákladu a dostupné kapacity.</p></div><ul>{detail.scope.map(item => <li key={item}><Icon name="shield" />{item}</li>)}</ul></div></section>
    <section className="dark-section service-flow"><div className="container"><div><span>01</span><h3>Poptávka</h3><p>Zadáte trasu, termín a parametry zásilky.</p></div><div><span>02</span><h3>Plán přepravy</h3><p>Navrhneme vůz, kapacitu a časový rámec.</p></div><div><span>03</span><h3>Realizace</h3><p>Dispečink sleduje průběh a drží s vámi kontakt.</p></div></div></section>
    <section className="section faq"><div className="container"><div className="section-heading"><span className="eyebrow">Časté otázky</span><h2>Co potřebujete vědět.</h2></div><details><summary>Jak rychle obdržím nabídku?</summary><p>Záleží na trase, termínu a typu nákladu. Po obdržení úplných podkladů se vám dispečer ozve v nejbližším možném termínu.</p></details><details><summary>Lze sledovat průběh přepravy?</summary><p>Vozidla využívají GPS monitoring. Konkrétní způsob informování si domluvíte s dispečerem.</p></details><details><summary>Jaké údaje potřebujete pro nacenění?</summary><p>Místo a datum nakládky, místo vykládky, typ nákladu, hmotnost a rozměry nebo počet palet.</p></details></div></section>
    <section className="service-cta"><div className="container"><div><span className="eyebrow light">Máte trasu?</span><h2>My najdeme cestu.</h2></div><div><Link href="/poptavka" className="button">Zadat poptávku <Icon name="arrow" /></Link><a href={`mailto:${detail.contact}`}>{detail.contact}</a></div></div></section>
  </main>;
}
