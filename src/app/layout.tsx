import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display=Barlow_Condensed({subsets:["latin","latin-ext"],weight:["600","700"],variable:"--font-display",display:"swap"});
const body=Manrope({subsets:["latin","latin-ext"],weight:["400","500","600","700"],variable:"--font-body",display:"swap"});

export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"ŠTENCEL TRANSPORT | Autodoprava a logistika",template:"%s | ŠTENCEL TRANSPORT"},description:"Vnitrostátní a mezinárodní silniční doprava a spedice. Tradice od roku 1993, působnost v EU a dispečink 24/7.",alternates:{canonical:"/"},openGraph:{type:"website",locale:"cs_CZ",url:siteUrl,siteName:"ŠTENCEL TRANSPORT",title:"ŠTENCEL TRANSPORT | Doprava bez zbytečných odboček",description:"Spolehlivá vnitrostátní a mezinárodní přeprava a spedice od roku 1993.",images:[{url:"/opengraph-image",width:1200,height:630,alt:"Štencel Transport"}]},twitter:{card:"summary_large_image"},icons:{icon:"/icon.svg"}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#071a2f"};
const schema={"@context":"https://schema.org","@type":"Organization",name:"ŠTENCEL TRANSPORT s. r. o.",url:siteUrl,foundingDate:"1993",address:{"@type":"PostalAddress",streetAddress:"K Rybníčkům 334",postalCode:"747 81",addressLocality:"Otice",addressCountry:"CZ"},email:"sprava@stenceltransport.cz",telephone:"+420601569003",taxID:"CZ47666307"};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="cs" className={`${display.variable} ${body.variable}`}><body><a className="skip" href="#obsah">Přeskočit na obsah</a><Header/>{children}<Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
