# Ingeniería y roadmap

## Base aprobada

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Motion
- i18next / react-i18next
- Lucide React
- GitHub Actions

## Organización sugerida

```text
src/
├── assets/
├── components/
│   ├── layout/
│   └── ui/
├── config/
├── features/
│   ├── i18n/
│   └── theme/
├── sections/
│   ├── hero/
│   ├── services/
│   ├── projects/
│   ├── stack/
│   ├── about/
│   ├── process/
│   └── contact/
├── styles/
├── App.tsx
├── index.css
└── main.tsx
```

No crear carpetas vacías sin necesidad.

## GitHub Actions

CI mínimo:

```bash
npm ci
npm run lint
npm run build
```

Usar Node 22, caché de npm, permisos mínimos y cancelación de ejecuciones anteriores. No crear deploy hasta definir GitHub Pages, Cloudflare Pages, Vercel, Netlify o servidor propio.

## Commits

Preferir Conventional Commits: `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `chore`, `ci`.

## Roadmap

### Fase 0 — Base

- Configurar Tailwind.
- Limpiar plantilla.
- Integrar tokens.
- Configurar dark/light/system.
- Configurar ES/EN.
- Configurar CI.
- Verificar lint y build.

### Fase 1 — Shell

- Header responsive.
- Navegación por anclas.
- Idioma.
- Tema.
- Menú móvil accesible.
- Componentes Container y Button.
- Footer mínimo.

### Fase 2 — Hero

- Copy ES/EN.
- Composición responsive.
- Identidad BORISPACEX.
- CTA.
- Efecto espacial sutil.
- Reduced motion.

### Fase 3 — Contenido

Servicios, proyectos, stack, experiencia, proceso y contacto.

### Fase 4 — Calidad

Accesibilidad, responsive, imágenes, bundle, metadata, Open Graph, favicon, Lighthouse y cross-browser.

### Fase 5 — Deploy

Elegir alojamiento y después crear workflow de despliegue.
