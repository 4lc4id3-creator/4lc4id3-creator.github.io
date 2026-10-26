# Mi Portafolio 👨‍💻

Portafolio web personal construido con **HTML, CSS y JavaScript puro** (sin frameworks).
Estructura basada en el esquema del "portafolio perfecto" para developers.

## 🚀 Ver el sitio

Solo abre `index.html` con doble clic en tu navegador.

## 📝 Editar tu información

Busca y reemplaza los marcadores `[TU INFO]` en `index.html`:

| Marcador                        | Dónde                                                    |
| ------------------------------- | -------------------------------------------------------- |
| `[TU NOMBRE]`                   | Título SEO, logo, hero, footer                           |
| `[TU HABILIDAD PRINCIPAL]`      | Debajo de tu nombre                                      |
| `[TU EMAIL]`                    | Botones de contacto (hero y footer)                      |
| `[TU USUARIO]`                  | Enlaces de GitHub y LinkedIn                             |
| `[TU BIO]`                      | Sección "Sobre mí"                                       |
| Chips de tecnologías            | Sección "Tecnologías" (por categoría)                    |
| Experiencia / proyectos / formación | Duplica los bloques `<article>` según necesites      |

**Imagenes:**
- Tu foto → reemplaza `assets/avatar.svg` o cambia el `src` por tu `.jpg`
- Capturas de proyectos → reemplaza las URLs de `placehold.co` por tus imágenes
- Tu CV → pon tu PDF en `assets/cv.pdf`

## 🎨 Cambiar el color de acento

En `css/styles.css`, línea `--accent:` (`:root`). Un solo valor cambia todo el sitio.

Temas disponibles por defecto: oscuro y claro (botón 🌙 del menú).

## 📂 Estructura

```
mi-portafolio/
├── index.html          # Contenido (todo lo visible) + SEO
├── css/styles.css      # Diseño completo (colores, responsive)
├── js/main.js          # Tema, menú móvil, animaciones sutiles
├── assets/             # Foto, CV, favicon, capturas de proyectos
└── README.md
```

## ✔️ Checklist del "portafolio perfecto" (mouredev)

- **Obligatorio:** nombre, habilidad principal, contacto email, CV pdf,
  proyectos (descripción + tecnologías + imagen + código), habilidades técnicas
  categorizadas, sobre mí, experiencia, formación. ✅
- **Recomendable:** GitHub/LinkedIn, foto, habilidades blandas. ✅
- **Opcional:** dark/light. ✅
- **Desaconsejado:** evitado — texto conciso, sin exceso de animaciones ni
  conocimientos, "menos es más".

## 🌐 Desplegar gratis (GitHub Pages)

1. Crea un repo llamado `tu-usuario.github.io`
2. Sube estos archivos (la raíz debe contener `index.html`)
3. La web queda en `https://tu-usuario.github.io`

Alternativas: Netlify o Vercel (arrastra la carpeta y listo).
