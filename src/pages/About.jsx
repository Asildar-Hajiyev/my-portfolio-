function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[8px] text-cyan-300">
          Haqqımda
        </p>
        <h2 className="mb-10 text-4xl md:text-5xl font-black text-white">
          Kim <span className="text-emerald-400">olduğum</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-gray-300">
            Frontend developer olaraq müasir, sürətli və istifadəçi
            təcrübəsinə fokuslanmış veb tətbiqlər qururam. React, Tailwind
            CSS və JavaScript ilə işləyərək təmiz kod və effektiv dizayn
            arasında balans yaratmağa çalışıram.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Öyrənməyə açığam, detallara diqqətliyəm və hər layihədə keyfiyyəti
            önə çəkirəm. Komanda ilə işləmək və problem həll etmək mənim üçün
            sadəcə iş deyil, maraqdır.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "10+", label: "Layihə" },
            { value: "1+", label: "İl təcrübə" },
            { value: "React", label: "Əsas stack" },
            { value: "24/7", label: "Öyrənmə" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 p-6 text-center backdrop-blur-xl"
              style={{ backgroundColor: "rgba(255,255,255,.05)" }}
            >
              <p className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;