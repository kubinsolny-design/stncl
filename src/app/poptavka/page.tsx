import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Poptávka přepravy", description: "Nezávazná poptávka vnitrostátní nebo mezinárodní přepravy a spedice.", alternates: { canonical: "/poptavka" } };

export default function QuotePage() { return <main id="obsah"><section className="subhero"><div className="container"><span className="eyebrow light">Poptávka přepravy</span><h1>Kam to bude?</h1><p>Pošlete nám základní údaje o trase a zásilce. Dispečer se vám ozve s návrhem řešení.</p></div></section><section className="quote-section page-quote"><div className="container quote-layout"><div><SectionHeading eyebrow="Nezávazná poptávka" title="Řekněte nám, co povezeme." text="Pro rychlé nacenění vyplňte místo nakládky, vykládky, termín a parametry nákladu." light /><div className="quote-direct"><span>Nebo volejte nonstop dispečink</span><a href="tel:+420606712552">+420 606 712 552</a><a href="mailto:dispecink.otice@stenceltransport.cz">dispecink.otice@stenceltransport.cz</a></div></div><QuoteForm /></div></section></main>; }
