import { useEffect, useState } from "react";

const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Asildar Haciyev'," },
  { indent: 1, text: "role: 'Frontend Developer'," },
  { indent: 1, text: "stack: ['React', 'Tailwind', 'JS']," },
  { indent: 1, text: "focus: 'clean code, clean UI'," },
  { indent: 1, text: "available: true," },
  { indent: 0, text: "};" },
];
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
export default CodeCard