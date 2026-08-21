const emailRx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:Request) {
  try {
    const body=await request.json();
    if(body.website) return Response.json({message:"Poptávka přijata."});
    if(!body.started || Date.now()-Number(body.started)<2500) return Response.json({message:"Formulář byl odeslán příliš rychle."},{status:400});
    const required=["name","email","phone","date","loading","unloading","cargo"];
    if(required.some(k=>typeof body[k]!=="string"||!body[k].trim())||body.consent!=="yes"||!emailRx.test(body.email)) return Response.json({message:"Zkontrolujte prosím povinná pole a e-mail."},{status:400});
    const key=process.env.RESEND_API_KEY, to=process.env.CONTACT_TO_EMAIL, from=process.env.CONTACT_FROM_EMAIL;
    if(!key||!to||!from) return Response.json({message:"Odesílání zatím není nakonfigurováno. Zavolejte prosím dispečink na +420 606 712 552."},{status:503});
    const clean=(v:unknown)=>String(v??"").slice(0,2000).replace(/[<>]/g,"");
    const text=["Nová poptávka přepravy",...Object.entries(body).filter(([k])=>!["website","started","consent"].includes(k)).map(([k,v])=>`${k}: ${clean(v)}`)].join("\n");
    const sent=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:clean(body.email),subject:`Poptávka přepravy – ${clean(body.name)}`,text})});
    if(!sent.ok) throw new Error("E-mail service error");
    return Response.json({message:"Děkujeme. Poptávku jsme přijali a ozveme se vám."});
  } catch { return Response.json({message:"Poptávku se nepodařilo odeslat. Zkuste to znovu nebo zavolejte dispečink."},{status:500}); }
}
