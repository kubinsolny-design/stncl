"use client";
import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [state,setState]=useState<{status:"idle"|"sending"|"success"|"error";message?:string}>({status:"idle"});
  const started = useState(() => Date.now())[0];
  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState({status:"sending"});
    const form=e.currentTarget; const data=Object.fromEntries(new FormData(form));
    try { const res=await fetch("/api/poptavka",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...data,started})}); const json=await res.json(); if(!res.ok) throw new Error(json.message); form.reset(); setState({status:"success",message:json.message}); }
    catch(err){setState({status:"error",message:err instanceof Error?err.message:"Poptávku se nepodařilo odeslat."});}
  }
  return <form className="quote-form" onSubmit={submit} noValidate>
    <div className="honeypot" aria-hidden="true"><label>Web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid"><label>Jméno a firma *<input name="name" autoComplete="name" required minLength={2}/></label><label>E-mail *<input name="email" type="email" autoComplete="email" required/></label><label>Telefon *<input name="phone" type="tel" autoComplete="tel" required/></label><label>Datum nakládky *<input name="date" type="date" required/></label><label>Místo nakládky *<input name="loading" required/></label><label>Místo vykládky *<input name="unloading" required/></label><label>Typ nákladu *<input name="cargo" required/></label><label>Hmotnost<input name="weight" placeholder="např. 12 t"/></label><label className="wide">Rozměry nebo počet palet<input name="dimensions" placeholder="např. 15 EUR palet"/></label><label className="wide">Doplňující informace<textarea name="message" rows={4}/></label></div>
    <label className="consent"><input name="consent" type="checkbox" value="yes" required/><span>Souhlasím se zpracováním uvedených údajů za účelem vyřízení poptávky. *</span></label>
    <div className="form-action"><button className="button" disabled={state.status==="sending"}>{state.status==="sending"?"Odesílám…":"Odeslat poptávku"}</button><p className={`form-status ${state.status}`} role="status" aria-live="polite">{state.message}</p></div>
  </form>;
}
