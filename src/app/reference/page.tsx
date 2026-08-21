import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Reference a partneři",
  description: "Partneři, technologie a zázemí, o které se opírají dopravní a logistické služby ŠTENCEL TRANSPORT.",
  alternates: { canonical: "/reference" },
};

const partners = [
  "SATUM",
  "ČESMAD BOHEMIA",
  "Smurfit Westrock",
  "ComArr",
  "Volvo Trucks",
  "DAF",
  "Linde Material Handling",
  "Ford Trucks",
  "TSG",
  "Kögel",
  "CN SERVIS",
  "Schmitz Cargobull",
  "Truck Trade",
  "Eurowag",
  "Centrum tachografů",
  "Autosklo-Slezsko",
];

export default function ReferencesPage() {
  return <main id="obsah">
    <section className="subhero reference-subhero">
      <div className="container">
        <span className="eyebrow light">Reference a partneři</span>
        <h1>Silná síť.<br />Spolehlivá cesta.</h1>
        <p>Dlouhodobou kvalitu dopravy stavíme také na spolupráci s prověřenými oborovými, technologickými a servisními partnery.</p>
      </div>
    </section>

    <section className="section references-section">
      <div className="container">
        <SectionHeading eyebrow="Spolupráce" title="Partneři, o které se můžeme opřít." text="Od vozidel a návěsové techniky přes servis a telematiku až po pojištění a oborové zázemí." />
        <div className="partner-wall">
          <Image src="/images/partneri-reference.png" width={1902} height={697} sizes="(max-width: 900px) calc(100vw - 32px), 1180px" alt="Přehled partnerů společnosti Štencel Transport" />
        </div>
        <ul className="partner-tags" aria-label="Seznam partnerů">
          {partners.map(partner => <li key={partner}>{partner}</li>)}
        </ul>
      </div>
    </section>

    <section className="service-cta reference-cta">
      <div className="container">
        <div><span className="eyebrow light">Společná trasa</span><h2>Hledáte spolehlivého dopravce?</h2></div>
        <div><Link href="/poptavka" className="button">Zadat poptávku <Icon name="arrow" /></Link><Link href="/kontakty">Kontaktovat dispečink</Link></div>
      </div>
    </section>
  </main>;
}

