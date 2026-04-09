# Jcomte23 Portfolio

Sitio web estático del portafolio profesional de Javier Cómbita Téllez. El proyecto está orientado a presentar experiencia, proyectos destacados y servicios de desarrollo de software para una audiencia hispanohablante.

## Stack

- Vite
- HTML
- SCSS
- JavaScript

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
.
├── index.html
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── documents/
│   └── images/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── style.scss
├── package.json
└── README.md
```

## Notas de mantenimiento

- Los assets dentro de `public/` se referencian desde la raíz del sitio, por ejemplo `/images/photo3.png`.
- El menú móvil y el scroll suave se controlan desde `src/js/main.js`.
- Los estilos globales del sitio viven en `src/scss/style.scss`.
- Antes de publicar cambios conviene ejecutar `npm run build` para validar el bundle de producción.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta [LICENSE](./LICENSE) para más detalles.
