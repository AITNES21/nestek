# NESTEK — web

Sitio corporativo. Astro, salida estática, sin JavaScript en cliente.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # servir dist/ localmente
npm run check    # comprobación de tipos
```

## Estructura

```
src/
├── data/
│   ├── site.ts        Datos de contacto, nav, tagline
│   ├── services.ts    ← LOS SERVICIOS SE EDITAN AQUÍ
│   └── projects.ts    ← EL PORTFOLIO SE EDITA AQUÍ
├── layouts/
│   ├── Base.astro     Shell HTML, SEO, JSON-LD
│   └── Legal.astro    Páginas legales
├── components/        Header, Footer
├── pages/
│   ├── index.astro
│   ├── servicios/
│   │   ├── index.astro
│   │   └── [slug].astro   Una página por servicio, generada desde services.ts
│   ├── trabajos.astro
│   ├── nosotros.astro
│   ├── contacto.astro
│   └── aviso-legal · privacidad · cookies
└── styles/global.css  Tokens de diseño y utilidades
```

**Para añadir un servicio:** una entrada en `src/data/services.ts`. La página, el listado y el menú del pie se generan solos.

## Regla de posicionamiento

> El titular **no menciona "web"**.

La web anterior decía *"Diseño y Desarrollo Web Profesional"* y por eso llegaban peticiones de 300 €. Lo que el titular promete es lo que el cliente pide. El orden de `services.ts` es deliberado: software y CRM primero, aplicaciones web al final.

## Pendiente antes de publicar

- [ ] **`src/data/projects.ts`** — completar los `TODO`. Pedir permiso por escrito al cliente antes de publicar su nombre. Describir el **problema resuelto**, no la tecnología.
- [ ] **`src/pages/nosotros.astro`** — nombres reales, cargos, bio y fotos. Una web B2B sin caras resta credibilidad.
- [ ] **`FORMSPREE_ID`** — crear el formulario en formspree.io y añadirlo como secret del repo. Sin él, el formulario se oculta y quedan email y teléfono.
- [ ] Revisar textos legales con asesor (los heredados son de la web anterior).

## Despliegue

GitHub Actions → GitHub Pages en cada push a `main` (`.github/workflows/deploy.yml`).
Requiere: **Settings → Pages → Source: GitHub Actions**, y el secret `FORMSPREE_ID`.

El `CNAME` (`www.nestek.es`) está en `public/`, así que se copia a `dist/` en cada build.
