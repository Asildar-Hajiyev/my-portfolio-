import { useContext } from "react";
import { DATA } from "../context/AppContext";


function Skills() {
  const {data} = useContext(DATA)
    return (
    <section id="skills" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[8px] text-cyan-300">
          Bacarıqlar
        </p>
        <h2 className="mb-14 text-4xl md:text-5xl font-black text-white">
          Texniki <span className="text-emerald-400">stack</span>
        </h2>

        <div className="space-y-10">
          {data?.skills?.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300"
                    style={{ backgroundColor: "rgba(255,255,255,.04)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;