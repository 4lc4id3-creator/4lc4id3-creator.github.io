/* ============================================================
   MI PORTAFOLIO — JavaScript
   Solo lo necesario: tema claro/oscuro, menú móvil,
   animación sutil de aparición y año automático del footer.
   ============================================================ */

// ---------- Toggle Dark/Light (checklist "Opcional": Dark/Light) ----------
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
    localStorage.setItem("theme", theme);
}

// Tema guardado del usuario, o oscuro por defecto
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});

// ---------- Menú móvil ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

// Cierra el menú al hacer clic en un enlace (mejor experiencia móvil)
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

// ---------- Animación sutil de aparición al hacer scroll ----------
// Añade la clase "reveal" a las secciones sin tocar el HTML
const sections = document.querySelectorAll(".section, .site-footer");

sections.forEach((section) => section.classList.add("reveal"));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // solo una vez, sin exceso
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

// ---------- Copiar email al portapapeles ----------
// Funciona incluso abriendo index.html con doble clic (protocolo file://)
document.querySelectorAll(".copy-email").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const email = btn.dataset.email.trim();
        const original = btn.textContent;

        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Plan B para contextos sin Clipboard API
            const temp = document.createElement("textarea");
            temp.value = email;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand("copy");
            temp.remove();
        }

        btn.textContent = "✅ ¡Copiado!";
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = original;
            btn.disabled = false;
        }, 2000);
    });
});

// ---------- Año automático en el footer ----------
document.getElementById("year").textContent = new Date().getFullYear();
