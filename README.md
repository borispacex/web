# BORISPACEX Web

Landing page comercial oficial de **BORISPACEX**, enfocada en presentar servicios de desarrollo de software, proyectos y canales de contacto.

> CODE. BUILD. DEPLOY. EXPLORE.

## Características

- Landing page one-page, responsive y mobile-first.
- Contenido disponible en español e inglés.
- Temas light y dark con detección inicial de la preferencia del sistema.
- Preferencias de idioma y tema persistidas localmente.
- Navegación mediante anclas accesibles.
- Animaciones sutiles con soporte para `prefers-reduced-motion`.
- SEO y metadatos sociales básicos.
- CI y despliegue automático mediante GitHub Actions.

## Tecnologías

- React 19
- TypeScript estricto
- Vite 8
- Tailwind CSS 4
- Motion para React
- i18next y react-i18next
- Lucide React
- ESLint

## Requisitos

- Node.js 22 o superior.
- npm, incluido con Node.js.

## Desarrollo local

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/borispacex/web.git
cd web
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local disponible.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo. |
| `npm run lint` | Analiza el código con ESLint. |
| `npm run build` | Comprueba TypeScript y genera la compilación de producción. |
| `npm run preview` | Sirve localmente la compilación generada. |

Antes de entregar cambios se recomienda ejecutar:

```bash
npm run lint
npm run build
```

## Estructura principal

```text
src/
├── components/
│   ├── icons/        # Iconos de marca locales
│   ├── layout/       # Header, footer y acciones flotantes
│   └── ui/           # Componentes reutilizables
├── config/           # Configuración de identidad visual
├── features/
│   ├── i18n/         # Traducciones ES/EN
│   └── theme/        # Gestión de light/dark y preferencia inicial
├── sections/         # Secciones activas de la landing page
└── styles/           # Tokens y estilos globales

public/brand/         # Logo, símbolo, favicon y piezas sociales
docs/                 # Marca, contenido, ingeniería y roadmap
.github/workflows/    # Validación y despliegue
```

## Idiomas y temas

Los textos visibles se mantienen en `src/features/i18n/resources.ts`. Las versiones en español e inglés deben conservar siempre las mismas claves.

Los colores globales se definen mediante tokens semánticos en `src/styles/design-tokens.css`. La primera visita respeta `prefers-color-scheme`; después, la elección explícita del usuario se guarda en `localStorage`.

## Despliegue

Cada actualización de `main` ejecuta la validación y publica el contenido de `dist/` mediante GitHub Actions.

URL prevista:

<https://borispacex.github.io/web/>

Para habilitarlo, selecciona **GitHub Actions** como fuente en:

```text
Settings > Pages > Build and deployment > Source
```

La configuración `base: '/web/'` de `vite.config.ts` corresponde al nombre actual del repositorio.

## Documentación

Las decisiones de producto, identidad y desarrollo están definidas en:

- `AGENTS.md`
- `docs/01_BRAND_SYSTEM.md`
- `docs/02_PRODUCT_AND_CONTENT.md`
- `docs/03_ENGINEERING_AND_ROADMAP.md`

## Contacto

- Email: [borispacex@gmail.com](mailto:borispacex@gmail.com)
- GitHub: [borispacex](https://github.com/borispacex)
- LinkedIn: [Boris Vargas Paucara](https://www.linkedin.com/in/boris-vargas-paucara-b5485a145/)
- WhatsApp: [+591 60514138](https://wa.me/59160514138)
