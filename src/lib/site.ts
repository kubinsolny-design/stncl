export const siteUrl = "https://www.stenceltransport.cz";

export const nav = [
  { href: "/#sluzby", label: "Služby" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kariera", label: "Kariéra" },
  { href: "/kontakty", label: "Kontakty" },
];

export const services = [
  { slug: "vnitrostatni-autodoprava", title: "Vnitrostátní autodoprava", eyebrow: "Česká republika", image: "https://static.wixstatic.com/media/915910_b08789e47e5a42c7a7d08b371896f78c~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85/stencel_transport_mezinarodni_autodoprava.jpg", text: "Silniční přeprava po celé České republice s průběžným dohledem dispečinku." },
  { slug: "mezinarodni-autodoprava", title: "Mezinárodní autodoprava", eyebrow: "Evropská unie", image: "https://static.wixstatic.com/media/915910_644951cfa4034f2797aa418d171a3f5d~mv2_d_4608_3456_s_4_2.jpg/v1/fill/w_1200,h_900,al_c,q_85/DSCN2531_JPG.jpg", text: "Přeprava zásilek do klíčových evropských zemí s anglicky mluvícím dispečinkem." },
  { slug: "spedice", title: "Spedice", eyebrow: "Řešení na míru", image: "https://static.wixstatic.com/media/915910_7862326ff58d4a718d5adf92860905dd~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_1200,h_900,al_c,q_85/DJI_0065.jpg", text: "Zajištění přepravy vlastními vozidly nebo prověřenými smluvními dopravci." },
];

type Branch = { name: string; note: string; email?: string; people: string[][] };

export const branches: Branch[] = [
  { name: "Centrální dispečink Otice", note: "K Rybníčkům 334, 747 81 Otice", email: "dispecink.otice@stenceltransport.cz", people: [
    ["Veronika Wernerová", "+420 606 712 552", "veronika.wernerova@stenceltransport.cz"],
    ["Jiří Meca", "+420 733 612 103", "jiri.meca@stenceltransport.cz"],
    ["Radka Boniatti", "+420 606 720 809", "radka.boniatti@stenceltransport.cz"],
  ]},
  { name: "Dispečink Žimrovice", note: "Spedice Smurfit Westrock Czech — závod Žimrovice", people: [
    ["Pavel Urbánek", "+420 602 740 783", "pavel.urbanek@stenceltransport.cz"],
    ["Kamil Hlaváč", "+420 606 704 440", "kamil.hlavac@stenceltransport.cz"],
  ]},
  { name: "Dispečink Brno / Chrlice", note: "Tovární 766/15, 643 00 Brno–Chrlice", people: [
    ["David Černý", "+420 602 711 728", "david.cerny@stenceltransport.cz"],
    ["Michal Jeniš", "+420 606 760 418", "michal.jenis@stenceltransport.cz"],
  ]},
  { name: "Dispečink Žebrák", note: "Spedice Smurfit Westrock Czech — závod Žebrák", people: [
    ["Radek Mudra", "+420 602 711 635", "radek.mudra@stenceltransport.cz"],
    ["Michal Mudra", "+420 606 764 961", "michal.mudra@stenceltransport.cz"],
  ]},
];

export const telHref = (value: string) => `tel:${value.replace(/\s/g, "")}`;
