function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[8px] text-cyan-300">
          Əlaqə
        </p>
        <h2 className="mb-6 text-4xl md:text-5xl font-black text-white">
          Birlikdə <span className="text-emerald-400">işləyək</span>
        </h2>
        <p className="mb-10 text-lg text-gray-300">
          Layihən var və köməyə ehtiyacın olur? Yaz, danışaq.
        </p>

        <form
          className="mx-auto grid max-w-xl gap-4 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Adın"
            className="rounded-xl border border-white/10 px-5 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
            style={{ backgroundColor: "rgba(255,255,255,.05)" }}
          />
          <input
            type="email"
            placeholder="E-poçt ünvanın"
            className="rounded-xl border border-white/10 px-5 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
            style={{ backgroundColor: "rgba(255,255,255,.05)" }}
          />
          <textarea
            placeholder="Mesajın"
            rows={5}
            className="rounded-xl border border-white/10 px-5 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
            style={{ backgroundColor: "rgba(255,255,255,.05)" }}
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-4 font-bold text-slate-900 transition-transform duration-300 hover:scale-105"
          >
            Mesaj göndər
          </button>
        </form>

        <div className="mt-14 flex justify-center gap-6 text-gray-400">
          <a href="#" className="transition-colors hover:text-cyan-300">
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-cyan-300">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-cyan-300">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;