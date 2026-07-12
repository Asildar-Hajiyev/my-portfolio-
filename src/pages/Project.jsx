import { useContext } from "react";
import { DATA } from "../context/AppContext";

// function getScreenshotUrl(url) {
//   return ;
// }

function Projects() {
  const {data}= useContext(DATA)
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
          {data?.projects?.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: "rgba(255,255,255,.05)" }}
            >
              <img
                src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=600`}
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

             <div className="flex w-full items-center justify-between">
               <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 cursor-pointer"
              >
                Ətraflı bax →
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-400 transition-colors hover:text-cyan-300"
                >
                  GitHub →
                </a>
              )}
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
