# ŠTENCEL TRANSPORT — nový firemní web

Moderní prezentační web společnosti ŠTENCEL TRANSPORT s. r. o. postavený na Next.js App Routeru, TypeScriptu a čistém CSS.

## Spuštění

```bash
pnpm install
pnpm dev
```

## Kontrola

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Poptávkový formulář

Formulář má klientskou i serverovou validaci, honeypot a časovou ochranu proti automatům. Pro skutečné odesílání nastavte proměnné z `.env.example`. Bez nich API vrací jasnou konfigurační chybu a data se neztratí v předstíraném `mailto:` toku.

## Doména

Produkční metadata používají `https://www.stenceltransport.cz`. DNS se nesmí přepnout, dokud nebude nový web schválen.
