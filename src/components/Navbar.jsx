import { useEffect, useRef, useState } from "react";
import CommandPalette from "../pages/Commandpalette";


const LINKS = [
  { id: "about", label: "Haqqımda" },
  { id: "skills", label: "Bacarıqlar" },
  { id: "projects", label: "Layihələr" },
  { id: "contact", label: "Əlaqə" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("about");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const linkRefs = useRef({});
  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((p) => !p);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const measure = () => {
      const el = linkRefs.current[active];
      const container = containerRef.current;
      if (el && container) {
        const elRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setIndicator({
          left: elRect.left - containerRect.left,
          width: elRect.width,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="fixed top-0 z-[60] h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <nav className="fixed top-6 z-50 flex w-full justify-center px-6">
        <div
          className="flex items-center gap-1 rounded-full border border-white/10 px-2 py-2 backdrop-blur-xl transition-all duration-300"
          style={{
            backgroundColor: scrolled
              ? "rgba(2,6,23,.75)"
              : "rgba(2,6,23,.35)",
            boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,.35)" : "none",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mr-2 flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-sm text-emerald-400"
          >
            <span className="text-gray-500">~/</span>
            asildar
            <span className="animate-pulse text-cyan-300">_</span>
          </a>

          <div ref={containerRef} className="relative hidden items-center gap-1 md:flex">
            <span
              className="absolute top-0 h-full rounded-full transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                background:
                  "linear-gradient(90deg, rgba(52,211,153,.18), rgba(34,211,238,.18))",
              }}
            />
            {LINKS.map((link) => (
              <a
                key={link.id}
                ref={(el) => (linkRefs.current[link.id] = el)}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
                style={{
                  color: active === link.id ? "#67e8f9" : "#d1d5db",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setPaletteOpen(true)}
            className="ml-1 hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-300 md:flex"
          >
            <span className="font-mono">⌘</span>K
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="ml-1 flex flex-col gap-1.5 rounded-full p-3 md:hidden"
            aria-label="Menyu"
          >
            <span
              className="h-0.5 w-5 bg-white transition-transform duration-300"
              style={{
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="h-0.5 w-5 bg-white transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="h-0.5 w-5 bg-white transition-transform duration-300"
              style={{
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed top-24 z-40 mx-6 flex flex-col gap-1 rounded-2xl border border-white/10 p-3 backdrop-blur-xl md:hidden"
          style={{
            left: 0,
            right: 0,
            backgroundColor: "rgba(2,6,23,.9)",
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300"
              style={{
                color: active === link.id ? "#67e8f9" : "#d1d5db",
                backgroundColor:
                  active === link.id ? "rgba(255,255,255,.06)" : "transparent",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}

export default Navbar;