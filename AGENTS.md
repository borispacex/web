# BORISPACEX Web — Instrucciones para Codex

## Fuente de verdad

Este repositorio contiene la web oficial de **BORISPACEX**. Antes de modificar código:

1. Lee este archivo completo.
2. Lee todos los archivos de `docs/`.
3. Revisa `package.json`, TypeScript, Vite, ESLint y Tailwind.
4. Respeta la identidad visual y las restricciones existentes.
5. No agregues dependencias sin una necesidad concreta.

Prioridad de instrucciones:

1. Solicitud actual del usuario.
2. `AGENTS.md`.
3. Documentación de `docs/`.
4. Convenciones existentes del repositorio.

## Proyecto

- Marca: **BORISPACEX**
- Repositorio: **web**
- Producto: landing page comercial de una sola página.
- Propósito: vender sistemas y soluciones digitales, mostrar proyectos y generar contactos.
- Posicionamiento: **Full Stack Developer · Freelance**
- Concepto verbal: **CODE. BUILD. DEPLOY. EXPLORE.**

BORISPACEX une desarrollo de software y exploración tecnológica. Debe transmitir competencia, confianza, precisión, modernidad y curiosidad.

## Referencia visual

Referencia de calidad, ritmo y experiencia: https://9lives.one/

Estudiar de esa referencia:

- claridad comercial;
- uso del espacio;
- jerarquía tipográfica;
- navegación one-page;
- responsive;
- dark/light;
- español/inglés;
- animaciones sutiles;
- presentación de servicios y portafolio.

No copiar código, textos, assets, logos, ilustraciones, composición exacta ni animaciones idénticas. El resultado debe sentirse como BORISPACEX.

## Stack aprobado

Usa las versiones existentes en `package.json`:

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Motion para React
- i18next
- react-i18next
- Lucide React
- GitHub Actions

No agregar inicialmente React Router, Redux, Zustand, Axios, librerías completas de componentes, GSAP, Three.js, React Hook Form, Zod, CSS-in-JS ni paquetes de dark mode. La web debe mantenerse liviana.

## Requisitos obligatorios

- Responsive y mobile-first.
- Español e inglés.
- Tema dark, light y system.
- Navegación accesible.
- Buen rendimiento.
- SEO básico.
- Accesibilidad.
- GitHub Actions para CI.

## Temas

Implementar `light`, `dark` y `system`.

- Respetar `prefers-color-scheme`.
- Persistir elección explícita en `localStorage`.
- Evitar parpadeo visual al cargar.
- Actualizar `color-scheme`.
- Aplicar el tema en `<html>`.
- Usar tokens semánticos.
- No duplicar componentes por tema.

## Internacionalización

- Español es el idioma predeterminado.
- Inglés es el idioma alternativo.
- No escribir textos visibles directamente en componentes.
- Mantener las mismas claves en ambos idiomas.
- Persistir el idioma elegido.
- Actualizar `lang` en `<html>`.
- Traducir con naturalidad, no palabra por palabra.

## Estructura de la página

La web puede incluir:

1. Header.
2. Hero.
3. Propuesta de valor.
4. Servicios.
5. Proyectos destacados.
6. Stack y capacidades.
7. Sobre mí / experiencia.
8. Proceso de trabajo.
9. Contacto.
10. Footer.

La navegación debe usar anclas accesibles y scroll suave respetando `prefers-reduced-motion`.

## Dirección visual

- Tecnológica.
- Moderna.
- Precisa.
- Profesional.
- Minimalista.
- Espacial.
- Premium.
- Limpia.

La temática espacial debe ser sutil: luna o arco orbital, horizonte atmosférico, profundidad y pequeños puntos de luz. Evitar exceso de estrellas, fondos cargados, planetas caricaturescos, estética gamer, neón excesivo, demasiados gradientes y animaciones constantes. El contenido es el protagonista.

## Logo

Concepto seleccionado: **logo 06**.

- Astronauta minimalista frontal.
- Laptop delante.
- `BX` en la laptop.
- Arco o luna azul detrás.
- Wordmark `BORISPACEX`.

No deformar, rotar, recolorear arbitrariamente ni añadir efectos ajenos. Conservar área de protección y legibilidad. Si faltan assets finales, usar temporalmente un wordmark textual o placeholder; no inventar un nuevo logo.

## Animaciones

Usar Motion con moderación:

- aparición del hero;
- reveal al entrar al viewport;
- menú móvil;
- microinteracciones;
- cambios suaves de tema.

Respetar `prefers-reduced-motion`, evitar animaciones largas y preferir `opacity` y `transform`.

## Responsive

Validar como mínimo 320, 375, 768, 1024, 1280 y 1536 px. Evitar overflow horizontal, textos cortados, botones pequeños, navegación inaccesible y títulos descontrolados. Usar `clamp()` cuando aporte valor.

## Accesibilidad

- HTML semántico.
- Jerarquía correcta de encabezados.
- Foco visible.
- Contraste suficiente.
- Menú móvil operable con teclado.
- Cerrar con Escape cuando corresponda.
- Textos alternativos útiles.
- No depender solo del color.
- Soportar reduced motion.

## Rendimiento

- Evitar dependencias innecesarias.
- Optimizar imágenes.
- Preferir AVIF o WebP.
- Definir dimensiones.
- Lazy-load bajo el primer viewport.
- No autoplay de video pesado.
- No usar 3D en el MVP.
- Revisar bundle después de cambios relevantes.

## SEO

Preparar título, descripción, `lang` dinámico, Open Graph, favicon, canonical cuando exista dominio, HTML semántico, contenido indexable y un único `h1`. No añadir una dependencia para metadata básica.

## Código

- TypeScript estricto.
- Evitar `any`.
- Componentes funcionales.
- Props tipadas.
- Funciones pequeñas.
- Nombres descriptivos.
- Evitar abstracciones prematuras.
- Separar traducciones del componente.
- No desactivar ESLint sin justificar.
- Eliminar código muerto.

Usar exportaciones nombradas para componentes reutilizables. `App` puede conservar exportación por defecto si la plantilla ya lo utiliza.

## CSS y Tailwind

Tailwind para layout, spacing, responsive, flex/grid, tipografía y estados comunes. CSS propio para tokens, temas, keyframes, fondos complejos, máscaras, pseudo-elementos y efectos de marca. No forzar todo dentro de Tailwind si CSS semántico es más claro.

## Validación

Antes de finalizar una tarea, ejecutar según corresponda:

```bash
npm run lint
npm run build
```

Al terminar, resumir cambios, archivos modificados, validaciones ejecutadas y decisiones pendientes.
