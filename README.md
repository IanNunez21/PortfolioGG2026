# 🍊 Portfolio de Gestión Gerencial — Equipo Pomelo Rosado

Este proyecto es el portfolio digital del equipo **Pomelo Rosado** para la cátedra de **Gestión Gerencial** en la **Universidad Tecnológica Nacional - Facultad Regional Resistencia (UTN FRRe)**, ciclo lectivo **2026**.

El portfolio recopila y presenta las actividades, investigaciones, desafíos grupales y la evolución del aprendizaje individual (Ruta Personal de Aprendizaje) a lo largo de la cursada.

---

## 👥 Integrantes del Equipo

* **Denise Pujalte** — Gestión y diseño
* **Denise Martinez** — Gestión y planificación
* **Zaira Rosin** — Análisis y diseño
* **Ian Nuñez** — Planificación y análisis
* **Amilcar Aguirre** — Análisis estratégico

---

## 🚀 Características y Secciones del Portfolio

* **El Equipo**: Presentación de cada integrante, sus roles dentro de los proyectos y un video introductorio.
* **Rutas Personales de Aprendizaje (RPA)**: Pantalla de detalle individual para cada integrante accesible al hacer clic en su foto. Presenta una interfaz de **globos interactivos** organizados por unidades (I a VII) para visualizar las reflexiones personales y los conceptos adquiridos.
* **Actividades e Investigación**:
  * **Investigación — La Gerencia**: Análisis del rol gerencial, sus funciones, niveles y retos dentro de las organizaciones modernas.
  * **Perfiles de Liderazgo**: Resultados de los test de liderazgo realizados por los miembros del equipo.
* **Desafíos**: Documentación de los desafíos prácticos de la cursada (Desafíos 3 al 7), detallando herramientas utilizadas, resúmenes y bitácoras de trabajo.
* **Mapas Conceptuales**: Visualización interactiva de mapas conceptuales y diagramas clave del proyecto.
* **TPI**: Apartado para el Trabajo Práctico Integrador y sus avances.

---

## 🛠️ Tecnologías y Librerías Utilizadas

El portfolio está construido bajo una arquitectura moderna de desarrollo Web SPA:

* **Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (para un HMR ultrarrápido y compilación optimizada).
* **Estilos**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer.
* **Interactividad y Animaciones**: [Framer Motion](https://www.framer.com/motion/) para las transiciones suaves entre páginas, unidades interactivas y efectos dinámicos.
* **Iconografía**: [Lucide React](https://lucide.dev/) para iconos vectoriales limpios y responsivos.
* **Enrutamiento**: [React Router Dom 7](https://reactrouter.com/) para la navegación declarativa sin recargar la página.

---

## 💻 Desarrollo Local

Para correr el proyecto localmente en tu computadora, asegúrate de tener instalado [Node.js](https://nodejs.org/).

### Clonar el repositorio
```bash
git clone https://github.com/IanNunez21/PortfolioGG2026.git
cd PortfolioGG2026
```

### Usando pnpm (Recomendado)

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```
2. **Iniciar servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
3. **Compilar para producción:**
   ```bash
   pnpm build
   ```

### Usando npm

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
3. **Compilar para producción:**
   ```bash
   npm run build
   ```

La aplicación se levantará localmente en la dirección mostrada en la consola (usualmente `http://localhost:5173`).