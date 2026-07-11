import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { id: "about", label: "Haqqımda", hint: "Kim olduğum" },
  { id: "skills", label: "Bacarıqlar", hint: "Texniki stack" },
  { id: "projects", label: "Layihələr", hint: "Seçilmiş işlər" },
  { id: "contact", label: "Əlaqə", hint: "Mesaj göndər" },
];

function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const inputRef = useRef(null);

  const filtered = ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setHighlight(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    setHighlight(0);
  }, [query]);

  const goTo = (id) => {
    onClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % Math.max(filtered.length, 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + filtered.length) % Math.max(filtered.length, 1));
    }
    if (e.key === "Enter" && filtered[highlight]) {
      goTo(filtered[highlight].id);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-start justify-center px-6 pt-32"
      style={{ backgroundColor: "rgba(2,6,23,.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10"
        style={{
          backgroundColor: "rgba(8,15,30,.95)",
          boxShadow: "0 20px 60px rgba(0,0,0,.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <span className="font-mono text-cyan-400">/</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Bölmə axtar..."
            className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
          />
          <kbd className="rounded-md border border-white/10 px-2 py-1 text-xs text-gray-500">
            esc
          </kbd>
        </div>

        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-gray-500">
              Nəticə tapılmadı
            </p>
          )}
          {filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              onMouseEnter={() => setHighlight(i)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors duration-150"
              style={{
                backgroundColor:
                  highlight === i ? "rgba(255,255,255,.06)" : "transparent",
              }}
            >
              <span>
                <span
                  className="block text-sm font-medium"
                  style={{ color: highlight === i ? "#67e8f9" : "#ffffff" }}
                >
                  {item.label}
                </span>
                <span className="block text-xs text-gray-500">{item.hint}</span>
              </span>
              <span className="font-mono text-xs text-gray-600">↵</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;