import Asildar from '../assets/IMG_2297.PNG'


const FACTS = [
  { label: "Layihə", value: "15+" },
  { label: "Frontend təcrübəsi", value: "2025-dən" },
  { label: "Təhsil", value: "Magistr" },
  { label: "Öyrənmə", value: "Davamlı" },
];

function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[8px] text-cyan-300">
          Haqqımda
        </p>
        <h2 className="mb-14 text-4xl md:text-5xl font-black text-white">
          Kim <span className="text-emerald-400">olduğum</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          {/* Left: avatar card */}
          <div className="order-2 flex flex-col items-center gap-6 lg:order-1 lg:items-start">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full opacity-60 blur-xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, #34d399, #22d3ee, #38bdf8, #34d399)",
                }}
              />
              <div
                className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/10 sm:h-40 sm:w-40"
                style={{ backgroundColor: "rgba(255,255,255,.05)" }}
              >
                <img
                  src={Asildar}
                  alt="Asildar Haciyev"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-gray-300"
              style={{ backgroundColor: "rgba(255,255,255,.04)" }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Yeni iş imkanlarına açığam
            </div>

            <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-1">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-white/10 px-4 py-3 backdrop-blur-xl"
                  style={{ backgroundColor: "rgba(255,255,255,.04)" }}
                >
                  <p className="text-lg font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {fact.value}
                  </p>
                  <p className="text-xs text-gray-500">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className="order-1 lg:order-2">
            <p className="mb-6 text-2xl font-semibold leading-snug text-white">
              Kompüter Elmləri üzrə{" "}
              <span className="text-emerald-400">akademik təhsilimi</span>{" "}
              real frontend layihələrinə çevirən,{" "}
              <span className="text-cyan-400">öyrənməyə həvəsli</span>{" "}
              developer-əm.
            </p>

            <div className="space-y-4 text-gray-400">
              <p>
                Azərbaycan Texniki Universitetində bakalavr, Bakı Dövlət
                Universitetində (SABAH Groups) isə Kompüter Elmləri və
                Texnologiyaları ixtisası üzrə magistr təhsili almışam.
              </p>
              <p>
                Frontend inkişafına 2025-ci ildə sıfırdan başlamışam. Div
                Academy-nin "Gələcəyi Yazanlar" proqramında frontend kursunu
                bitirərək qazandığım bilgiləri real layihələr üzərində
                möhkəmləndirdim.
              </p>
              <p>
                Boş vaxtlarımda yeni JavaScript kitabxanalarını sınamağı və
                kiçik open-source təcrübələr etməyi sevirəm — öyrənməyi iş
                deyil, davamlı bir vərdiş kimi görürəm.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Problem həlli", "Komanda işi", "Detallara diqqət", "Sürətli öyrənmə", "Məsuliyyət"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-gray-300"
                    style={{ backgroundColor: "rgba(255,255,255,.04)" }}
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;