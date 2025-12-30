"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

type Project = {
  title: string;
  desc: string;
  impact: string;
  tags: string[];
  github: string;
  demo: string;
};

type Cert = {
  name: string;
  issuer: string;
  verify: string;   // "" si no hay
  image?: string;   // opcional
};

const projects: Project[] = [
  {
    title: "Analizador de Suplementos con IA",
    desc: "OCR + LLM para leer etiquetas y devolver un resumen útil (ingredientes, advertencias, etc.).",
    impact: "Reduce tiempo de análisis manual y mejora la interpretación de ingredientes.",
    tags: ["AWS", "Rekognition", "Flask"],
    github: "",
    demo: "",
  },
  {
    title: "German Risk / Telco ML",
    desc: "Pipeline de ML con entrenamiento, evaluación y app para predicción.",
    impact: "Estandariza el flujo de ML: dataset → modelo → métricas → predicción en app.",
    tags: ["Python", "scikit-learn", "Streamlit"],
    github: "",
    demo: "",
  },
];

const skills = [
  { title: "Core", items: ["Python", "JavaScript/TypeScript", "SQL", "Git/GitHub"] },
  { title: "IA / Data", items: ["scikit-learn", "Pandas/NumPy", "OCR + LLMs", "Evaluación y métricas"] },
  { title: "Cloud / Dev", items: ["AWS", "Docker", "Linux", "APIs (Flask)"] },
];

const certs: Cert[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    verify: "https://www.credly.com/badges/63a6a358-f439-4e48-a0e7-5df01e71f07f/public_url",
    image: "/certs/aws-cloud-foundations-badge.png",
  },
  {
    name: "Learning AI Through Visualization",
    issuer: "Columbia University",
    verify: "https://badges.plus.columbia.edu/40394477-cea9-4eea-adbb-334e97947527#acc.qO1AkMb4",
    image: "/certs/columbia-ai-vis.png",
  },
  {
    name: "Power BI: Análisis y Visualización de Datos",
    issuer: "SEPE",
    verify: "",
    image: "/certs/powerbi.png",
  },
  {
    name: "Fundamentos de Ciberseguridad",
    issuer: "SEPE",
    verify: "",
    image: "/certs/ciberseguridad.png",
  },
];

export default function Home() {
  const [openCert, setOpenCert] = useState<null | Cert>(null);

  const certsSorted = [...certs].sort(
  (a, b) => Number(Boolean(b.verify)) - Number(Boolean(a.verify))
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCert(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0E11] text-[#EDEDED]">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
      

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Full-Stack + <span className="text-[#C9A24D]">IA & Big Data</span>
            <span className="text-[#145A43]">.</span>
          </h1>

         <p className="max-w-2xl text-lg text-[#B5B8BC]">
          IA aplicada al desarrollo Full-Stack con impacto real.

        </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-xl bg-[#0F3D2E] px-5 py-3 text-sm font-medium hover:bg-[#145A43] transition"
            >
              Ver proyectos
            </a>
            <a
              href="/cv.pdf"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium hover:border-white/20 transition"
            >
              Descargar CV
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 pb-8 text-sm text-[#B5B8BC]">
            <span className="rounded-full border border-white/10 px-3 py-1">Málaga / Remoto</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Python · AWS · React</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Orientado a producto</span>
          </div>
        </motion.section>

                {/* ABOUT MINI */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-2 rounded-2xl border border-white/10 bg-[#161A1E] p-6"
        >
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#145A43] tracking-wide">
              Sobre mí
            </h2>

            <p className="text-sm text-[#B5B8BC] max-w-2xl">
              Actualmente cursando el Máster de Especialización en IA y Big Data. <br></br>
              Combino la solidez del desarrollo Full Stack con los nuevos paradigmas de la
              Inteligencia Artificial para diseñar soluciones que no solo ejecutan tareas,
              sino que aprenden y toman decisiones.
            </p>
          </div>

         <div className="mt-6 flex flex-wrap gap-2">
            {[
              "IA aplicada · ML / LLMs",
              "Big Data · pipelines · datos",
              "Python · AWS · React",
              "Remoto · Málaga",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#B5B8BC]"
              >
                {tag}
              </span>
            ))}
          </div>

          <ul className="mt-5 grid gap-3 md:grid-cols-3 text-sm text-[#B5B8BC]">
            <li className="rounded-xl border border-white/10 bg-[#0B0E11] p-4 space-y-2">
              <p>
                <span className="text-[#C9A24D]">Base:</span> DAW + especialización en IA
                y Big Data.
              </p>
              <p className=" text-[#B5B8BC]">
                <span className="text-[#C9A24D]">Idiomas:</span> Español (nativo) · English (B2).
              </p>
            </li>
            <li className="rounded-xl border border-white/10 bg-[#0B0E11] p-4">
              <span className="text-[#C9A24D]">Foco:</span> proyectos end-to-end
              (datos → modelo → app → deploy).
            </li>
            
            <li className="rounded-xl border border-white/10 bg-[#0B0E11] p-4">
              <span className="text-[#C9A24D]">Ahora:</span> esperando periodo de prácticas y realizando
              proyectos donde aportar impacto real.
            </li>
          </ul>
        </motion.section>


        <div className="my-12 h-px bg-white/10" />

        {/* PROYECTOS */}
        <section id="proyectos" className="scroll-mt-24 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">
              Proyectos <span className="text-[#C9A24D]">destacados</span>
            </h2>
            <a
              className="text-sm text-[#B5B8BC] hover:text-[#EDEDED] transition"
              href="https://github.com/dev-manuelp"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub ↗
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-[#161A1E] p-6 transition
                           hover:border-[#C9A24D]/40 hover:shadow-[0_0_0_1px_rgba(201,162,77,0.12),0_18px_60px_rgba(0,0,0,0.55)]"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#B5B8BC]">{p.desc}</p>
                <p className="mt-3 text-sm text-[#EDEDED]">
                  <span className="text-[#C9A24D]">Impacto:</span> {p.impact}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#0F3D2E]/50 px-3 py-1 text-xs text-[#B5B8BC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 text-sm">
                  {p.demo ? (
                    <a className="text-[#C9A24D] hover:underline" href={p.demo} target="_blank" rel="noreferrer">
                      Demo ↗
                    </a>
                  ) : (
                    <span className="text-[#B5B8BC]">Demo (próximamente)</span>
                  )}

                  {p.github ? (
                    <a className="text-[#B5B8BC] hover:text-[#EDEDED]" href={p.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="text-[#B5B8BC]">GitHub (próximamente)</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="my-12 h-px bg-white/10" />

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl font-semibold">
            Skills <span className="text-[#145A43]">clave</span>
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-[#161A1E] p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#B5B8BC]">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24D]/80" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="my-12 h-px bg-white/10" />

        {/* CERTIFICACIONES */}
        <section id="certificaciones" className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl font-semibold">
            Certificaciones <span className="text-[#C9A24D]">y cursos</span>
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {certsSorted.map((c) => {
              const hasVerify = Boolean(c.verify);
              const hasImage = Boolean(c.image);

              const base = "rounded-2xl border border-white/10 bg-[#161A1E] p-5 transition";
              const hover =
                "hover:border-[#C9A24D]/40 hover:shadow-[0_0_0_1px_rgba(201,162,77,0.10),0_18px_60px_rgba(0,0,0,0.55)] cursor-pointer";

              return (
                <button
                  key={c.name}
                  type="button"
                  className={`${base} ${hover} text-left`}
                  onClick={() => setOpenCert(c)}
                >
                  <div className="text-sm text-[#B5B8BC] flex items-center justify-between">
                    <span>{c.issuer}</span>
                    <span className="text-[#C9A24D]">
                      {hasImage ? "Ver ↗" : hasVerify ? "Verificar ↗" : "Detalles ↗"}
                    </span>
                  </div>
                  <div className="mt-1 font-medium">{c.name}</div>
                </button>
              );
            })}
          </div>

          <p className="text-sm text-[#B5B8BC]">
            * Certificados sin enlace: verificación mediante captura con datos sensibles ocultos.
          </p>
        </section>

        {/* MODAL */}
        {openCert && (
          <div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpenCert(null)}
          >
            <div
              className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0B0E11] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 p-5 border-b border-white/10">
                <div>
                  <div className="text-sm text-[#B5B8BC]">{openCert.issuer}</div>
                  <div className="text-lg font-semibold">{openCert.name}</div>
                </div>

                <div className="flex items-center gap-2">
                  {openCert.verify && (
                    <a
                      className="rounded-xl border border-[#C9A24D]/60 px-3 py-2 text-sm text-[#EDEDED] hover:border-[#C9A24D] transition"
                      href={openCert.verify}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verificar ↗
                    </a>
                  )}
                  <button
                    type="button"
                    className="rounded-xl border border-white/10 px-3 py-2 text-sm text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
                    onClick={() => setOpenCert(null)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>

              <div className="p-5">
                {openCert.image ? (
                  <img
                    src={openCert.image}
                    alt={`Certificado: ${openCert.name}`}
                    className="mx-auto max-h-[420px] w-auto rounded-xl border border-white/10"
                  />
                ) : (
                  <div className="rounded-xl border border-white/10 p-5 text-sm text-[#B5B8BC]">
                    No hay imagen disponible para este certificado.
                  </div>
                )}

                <p className="mt-4 text-xs text-[#B5B8BC] text-center">
                  Pulsa <span className="text-[#C9A24D]">Esc</span> o haz click fuera para cerrar.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="my-12 h-px bg-white/10" />

        {/* CONTACTO */}
        <section id="contacto" className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Contacto <span className="text-[#145A43]">rápido</span>
          </h2>
          <p className="text-[#B5B8BC]">
            Si quieres ver demos, repos o hablar de prácticas/proyectos, escríbeme.
          </p>

          <div className="flex flex-wrap gap-3">
            <a className="rounded-xl bg-[#0F3D2E] px-5 py-3 text-sm font-medium hover:bg-[#145A43] transition" href="mailto:manuelp.dev@gmail.com">
              Email
            </a>
            <a className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:border-white/20 transition" href="https://linkedin.com/in/manuel-peña-7b5608271/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:border-white/20 transition" href="https://github.com/dev-manuelp" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 pt-10 border-t border-white/10 text-sm text-[#B5B8BC] flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Manuel Peña ·{" "}
            <span className="text-[#C9A24D]">Full-Stack + IA & Big Data</span>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-[#EDEDED]" href="mailto:manuelp.dev@gmail.com">Email</a>
            <a className="hover:text-[#EDEDED]" href="https://github.com/dev-manuelp" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-[#EDEDED]" href="https://linkedin.com/in/manuel-peña-7b5608271/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}