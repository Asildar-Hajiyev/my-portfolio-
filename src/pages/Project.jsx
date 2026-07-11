const PROJECTS = [
  {
    id: 1,
    title: "Superfon",
    description: "Div Academy Final Project",
    tags: ["React", "Tailwind", "API", "Node"],
    url: "https://div-superfon-m8vg.vercel.app/",
  },
  {
    id: 2,
    title: "YerTap",
    description: "Aradığınız hər bir yeri asanlıqla tapın",
    tags: ["React"],
    url: "https://yer-tap.vercel.app/",
  },
  {
    id: 3,
    title: "Bigspring",
    description: "Simple page.",
    tags: ["Js", "Tailwind"],
    url: "https://bigspring-five.vercel.app/",
  },
  {
    id: 4,
    title: "Bigspring",
    description: "JavaScript-product-filter",
    tags: ["Js", "Tailwind"],
    url: "https://javascript-product-filter.vercel.app/",
  },
  {
    id: 5,
    title: "Calculator",
    description: "Calculate-discounted",
    tags: ["Js", "Tailwind"],
    url: "https://task-calculate-discounted-product-p.vercel.app/",
  },
  {
    id: 6,
    title: "Tropika",
    description: "Sade single page",
    tags: ["Js", "Tailwind"],
    url: "https://tropika-pied.vercel.app/",
  },
  {
    id: 7,
    title: "Pagination",
    description: "Pagination",
    tags: ["Js", "Tailwind"],
    url: "https://js-pagination-app.vercel.app/",
  },
  {
    id: 8,
    title: "Login-verification",
    description: "Login-verification",
    tags: ["Js", "Tailwind"],
    url: "https://javascript-login-verification2.vercel.app/",
  },
  {
    id: 8,
    title: "Avers",
    description: "Aver daxilinde admin panel qosulmusdur",
    tags: ["Js", "Tailwind"],
    url: "https://avers-page-v3ch.vercel.app/",
  },
  {
    id: 9,
    title: "Avers",
    description: "Aver daxilinde admin panel qosulmusdur",
    tags: ["Js", "Tailwind"],
    url: "https://avers-page-v3ch.vercel.app/",
  },
  {
    id: 10,
    title: "Funksional sayt",
    description: "Add to cart wishlist islekdir",
    tags: ["Js", "Tailwind"],
    url: "https://site1-functionality.vercel.app/",
  },
  {
    id: 11,
    title: "Abb kalkulyator",
    description: "Js Task",
    tags: ["Js", "Tailwind"],
    url: "https://abb-calculator-navy.vercel.app/",
  },
  {
    id: 12,
    title: "Property",
    description: "Kurs Css imtahani",
    tags: ["Js", "Tailwind"],
    url: "https://property-carousel.vercel.app/",
  },
  {
    id: 13,
    title: "Health-center",
    description: "Kurs Css Task",
    tags: ["Html", "Css"],
    url: "https://health-center-task2.vercel.app/",
  },
  {
    id: 14,
    title: "Dento",
    description: "Kurs Css Task",
    tags: ["Html", "Css"],
    url: "https://dento-1.vercel.app/",
  },
  {
    id: 15,
    title: "Ingress",
    description: "Ingress Academy 2023 Final Project",
    tags: ["React", "Tailwind"],
    url: "https://ingress-ac-final-project.vercel.app/",
  },
];
function getScreenshotUrl(url) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;
}

function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[8px] text-cyan-300">
          Layihələr
        </p>
        <h2 className="mb-14 text-4xl md:text-5xl font-black text-white">
          Seçilmiş <span className="text-emerald-400">işlər</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3 ">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: "rgba(255,255,255,.05)" }}
            >
              <img
                src={getScreenshotUrl(project.url)}
                alt={`${project.title} layihəsinin ekran görüntüsü`}
                className="mb-4 h-36 w-full rounded-xl object-cover cursor-pointer"
                loading="lazy"
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs text-cyan-300"
                    style={{ backgroundColor: "rgba(34,211,238,.1)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 cursor-pointer">
                Ətraflı bax →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
