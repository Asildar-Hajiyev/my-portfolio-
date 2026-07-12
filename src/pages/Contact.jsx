import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_g2wazfv";
const EMAILJS_TEMPLATE_ID = "template_6sk62nq";
const EMAILJS_PUBLIC_KEY = "QoDFJc9nOyH4C_POM";

function validate(fields) {
  const errors = {};

  if (!fields.name.trim()) {
    errors.name = "Ad boş ola bilməz.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email boş ola bilməz.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Düzgün email formatı deyil.";
  }

  if (!fields.message.trim()) {
    errors.message = "Mesaj boş ola bilməz.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Mesaj ən azı 10 simvol olmalıdır.";
  }

  return errors;
}

function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot qorunması: gizli sahə doldurulubsa, sakitcə imtina et
    if (honeypot) {
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
      return;
    }

    const foundErrors = validate(fields);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          message: fields.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email göndərilə bilmədi:", err);
      setStatus("error");
    }
  };

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
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Botlar üçün gizli tələ - insanlar görmür */}
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex="-1"
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px", opacity: 0 }}
            aria-hidden="true"
          />

          <div>
            <input
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="Adın"
              className="w-full rounded-xl border px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,.05)",
                borderColor: errors.name ? "#f87171" : "rgba(255,255,255,.1)",
              }}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="E-poçt ünvanın"
              className="w-full rounded-xl border px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,.05)",
                borderColor: errors.email ? "#f87171" : "rgba(255,255,255,.1)",
              }}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              value={fields.message}
              onChange={handleChange}
              placeholder="Mesajın"
              rows={5}
              className="w-full rounded-xl border px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,.05)",
                borderColor: errors.message
                  ? "#f87171"
                  : "rgba(255,255,255,.1)",
              }}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-4 font-bold text-slate-900 transition-transform duration-300 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? "Göndərilir..." : "Mesaj göndər"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-emerald-400">
              Mesajın göndərildi, tezliklə cavab verəcəyəm!
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              Xəta baş verdi, zəhmət olmasa yenidən cəhd et.
            </p>
          )}
        </form>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/994504252262"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:text-emerald-300"
            style={{ backgroundColor: "rgba(255,255,255,.04)" }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.5 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3ZM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.7 0-3.3-.5-4.6-1.3l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.5 13.5 3.5 12 3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 20.2 12 20.2Z" />
            </svg>
            WhatsApp ilə yaz
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/Asildar-Hajiyev"
            className="transition-colors hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/asildarhajiyev"
            className="transition-colors hover:text-cyan-300"
          >
            LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=haciyev2262@gmail.com&su=Salam&body=Sizinl%C9%99%20%C9%99laq%C9%99%20saxlamaq%20ist%C9%99yir%C9%99m"
            className="transition-colors hover:text-cyan-300"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
