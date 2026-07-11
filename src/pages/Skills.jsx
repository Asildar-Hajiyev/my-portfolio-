const SKILLS = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "HTML / CSS", level: 95 },
  { name: "Git / GitHub", level: 80 },
  { name: "Next.js", level: 70 },
];

function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-28">
      <div className="relative mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[8px] text-cyan-300">
          Bacarıqlar
        </p>
        <h2 className="mb-14 text-4xl md:text-5xl font-black text-white">
          Texniki <span className="text-emerald-400">stack</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-semibold text-white">{skill.name}</span>
                <span className="text-cyan-300">{skill.level}%</span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,.08)" }}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;