
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PHRASES = [
  "Building modern web experiences.",
  "React • Tailwind • JavaScript",
  "Clean Code. Clean UI.",
];

const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Asildar Haciyev'," },
  { indent: 1, text: "role: 'Frontend Developer'," },
  { indent: 1, text: "stack: ['React', 'Tailwind', 'JS']," },
  { indent: 1, text: "focus: 'clean code, clean UI'," },
  { indent: 1, text: "available: true," },
  { indent: 0, text: "};" },
];

function useTypewriter(
  phrases,
  typeSpeed = 55,
  deleteSpeed = 70,
  pause = 1200,
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typeSpeed,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deleteSpeed,
      );
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause]);

  return text;
}

function useLineReveal(lineCount, delay = 220, startAfter = 400) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(function step() {
      i += 1;
      setVisible(i);
      if (i < lineCount) setTimeout(step, delay);
    }, startAfter);
    return () => clearTimeout(start);
  }, [lineCount, delay, startAfter]);

  return visible;
}

function CodeCard() {
  const visibleLines = useLineReveal(CODE_LINES.length);

  return (
    <div
      className="relative w-full max-w-md rounded-2xl border border-white/10 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(255,255,255,.04)",
        boxShadow: "0 0 60px rgba(6,182,212,.12)",
      }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-300/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs text-gray-500">developer.js</span>
      </div>

      <div className="px-6 py-6 font-mono text-sm leading-7">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ paddingLeft: line.indent * 20 }}>
            <span className="text-gray-500">{i + 1}</span>
            <span className="ml-4 text-gray-200">{line.text}</span>
          </div>
        ))}
        {visibleLines >= CODE_LINES.length && (
          <span className="ml-8 inline-block h-4 w-2 animate-pulse bg-emerald-400 align-middle" />
        )}
      </div>
    </div>
  );
}

function SocialIcon({ href, label, path }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-300"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

function Header() {
  const typed = useTypewriter(PHRASES);

  return (
    <section className="relative z-10 flex min-h-screen items-center px-6 pt-48 pb-20">
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-gray-300"
            style={{ backgroundColor: "rgba(255,255,255,.04)" }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            İşə açığam
          </div>

          <p className="mb-3 text-sm uppercase tracking-[8px] text-cyan-300">
            Frontend Developer
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            <span className="animate-gradient-text block bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              ASILDAR
            </span>
            <span className="block mt-1 text-white">HACIYEV</span>
          </h1>

          <div className="mt-7 text-xl font-semibold text-gray-300 h-8">
            {typed}
            <span className="animate-pulse">|</span>
          </div>

          <p className="mt-6 max-w-md text-gray-400">
            Müasir, sürətli və istifadəçi təcrübəsinə fokuslanmış veb
            interfeyslər qururam.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-4 font-bold text-slate-900 transition-transform duration-300 hover:scale-105"
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 35px #10b981")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              style={{ transition: "all .3s" }}
            >
              Layihələrə bax
            </Link>
            <a
              href="/Asildar-Hajiyev-CV.pdf"
              download="Asildar-Hajiyev-CV.pdf"
              className="rounded-xl border border-cyan-400 px-8 py-4 text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 30px #06b6d4")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              CV yüklə
            </a>
          </div>

          <div className="mt-10 flex gap-3">
            <SocialIcon
              href="https://github.com/Asildar-Hajiyev"
              label="GitHub"
              path="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.76.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
            <SocialIcon
              href="https://linkedin.com/in/asildarhajiyev"
              label="LinkedIn"
              path="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.98h8.9V23H.5V8.98ZM14.9 8.98h-4.28V23h4.28v-7.4c0-1.95.37-3.84 2.79-3.84 2.38 0 2.42 2.23 2.42 3.96V23h4.28v-8.03c0-4.72-1.02-8.36-6.53-8.36-2.65 0-4.43 1.45-5.16 2.83h-.06V8.98H14.9Z"
            />
            <SocialIcon
              href="https://mail.google.com/mail/?view=cm&fs=1&to=haciyev2262@gmail.com&su=Salam&body=Sizinl%C9%99%20%C9%99laq%C9%99%20saxlamaq%20ist%C9%99yir%C9%99m"
              label="Email"
              path="M2 4h20v16H2V4Zm2 2 8 6 8-6"
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}

export default Header;
