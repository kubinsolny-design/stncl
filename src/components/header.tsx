"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "./icons";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" aria-label="Štencel Transport – úvod"><Image src="https://static.wixstatic.com/media/6900c2_ea40469a7992475aa64a1068d30c1c46~mv2.png/v1/fill/w_598,h_216,al_c,q_90/6900c2_ea40469a7992475aa64a1068d30c1c46~mv2.png" width={188} height={68} alt="Štencel Transport" priority /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-menu" aria-label={open ? "Zavřít menu" : "Otevřít menu"}><Icon name={open ? "close" : "menu"} /></button>
      <nav id="main-menu" className={open ? "nav open" : "nav"} aria-label="Hlavní navigace">
        {nav.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/poptavka" className="button button-small" onClick={() => setOpen(false)}>Poptat přepravu <Icon name="arrow" /></Link>
      </nav>
    </div>
  </header>;
}
