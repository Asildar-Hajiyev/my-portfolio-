const PROJECTS = [
  {
    title: "E-commerce Platform",
    description: "React və Tailwind ilə hazırlanmış tam funksional online mağaza.",
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Task Manager App",
    description: "Sürüklə-burax funksiyalı tapşırıq idarəetmə tətbiqi.",
    tags: ["React", "LocalStorage"],
  },
  {
    title: "Portfolio Website",
    description: "Animasiyalı, responsiv şəxsi portfolio saytı.",
    tags: ["React", "Tailwind"],
  },
];

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

        <div className="grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: "rgba(255,255,255,.05)" }}
            >
              <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-sky-500/20" />

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

              <button className="text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300">
                Ətraflı bax →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;