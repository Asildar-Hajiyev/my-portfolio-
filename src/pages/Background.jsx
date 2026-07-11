import { useEffect, useState } from "react";

function Background() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(34,197,94,.15), transparent 30%), radial-gradient(circle at bottom right, rgba(6,182,212,.15), transparent 35%)",
        }}
      />

      <div
        className="pointer-events-none absolute rounded-full duration-200 ease-out"
        style={{
          height: 500,
          width: 500,
          background:
            "linear-gradient(90deg, rgba(52,211,153,.2), rgba(34,211,238,.2), rgba(14,165,233,.2))",
          filter: "blur(170px)",
          transform: `translate(${mouse.x - 250}px, ${mouse.y - 250}px)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute left-24 top-32 h-5 w-5 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute right-28 top-52 h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
      <div className="absolute bottom-24 left-1/3 h-4 w-4 rounded-full bg-sky-400 animate-bounce" />
      <div className="absolute bottom-40 right-1/4 h-2 w-2 rounded-full bg-white animate-pulse" />
    </div>
  );
}

export default Background;