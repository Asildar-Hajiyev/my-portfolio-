import { useEffect, useRef, useState } from "react";

const COLORS = ["#34d399", "#22d3ee", "#38bdf8"];

function ClickBubbles() {
  const [bubbles, setBubbles] = useState([]);
  const counter = useRef(0);

  useEffect(() => {
    const onClick = (e) => {
      const count = 6;
      const created = Array.from({ length: count }).map(() => {
        counter.current += 1;
        return {
          id: counter.current,
          x: e.clientX,
          y: e.clientY,
          size: 8 + Math.random() * 14,
          drift: (Math.random() - 0.5) * 120,
          duration: 700 + Math.random() * 500,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
      });

      setBubbles((prev) => [...prev, ...created]);

      created.forEach((b) => {
        setTimeout(() => {
          setBubbles((prev) => prev.filter((item) => item.id !== b.id));
        }, b.duration + 50);
      });
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <style>{`
        @keyframes bubbleRise {
          0% {
            transform: translate(0, 0) scale(0.6);
            opacity: .9;
          }
          100% {
            transform: translate(var(--drift), -140px) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>

      {bubbles.map((b) => (
        <span
          key={b.id}
          style={{
            position: "absolute",
            left: b.x - b.size / 2,
            top: b.y - b.size / 2,
            width: b.size,
            height: b.size,
            borderRadius: "9999px",
            background: `radial-gradient(circle at 30% 30%, ${b.color}, transparent 70%)`,
            border: `1px solid ${b.color}55`,
            "--drift": `${b.drift}px`,
            animation: `bubbleRise ${b.duration}ms ease-out forwards`,
          }}
        />
      ))}
    </div>
  );
}

export default ClickBubbles;