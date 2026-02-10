"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

// Zona Diccionario

type Project = {
  title: string;
  desc: string;
  impact: string;
  tags: string[];
  github: string;
  video: string;
};

// Zona inventario

type Cert = {
  name: string;
  issuer: string;
  verify: string;   // "" si no hay
  image?: string;   // opcional
};

const projects: Project[] = [

  {
    title: "Recetario Inteligente (GenAI)",
    desc: "PWA Mobile-First que digitaliza recetas manuscritas mediante Visión Artificial (Gemini-flash-latest) y Supabase.",
    impact: "Convierte datos no estructurados (fotos) en base de datos consultable con UX nativa tipo iOS.",
    tags: ["Next.js 14", "Supabase", "Gemini AI", "Tailwind"],
    github: "https://github.com/dev-manuelp/recetario-publico",
    video: "/demos/Recetario_Demo.mp4", 
  },

  {
    title: "Smart Supplement Scanner",
    desc: "App End-to-End que combina Visión Artificial (AWS) y GenAI para analizar suplementos a partir de fotos.",
    impact: "Integra Cloud + LLMs para interpretar etiquetas complejas y dar consejo nutricional instantáneo.",
    tags: ["AWS Rekognition", "Python", "Gradio", "GenAI"],
    github: "https://github.com/dev-manuelp/smart-supplement-scanner",
    video: "/demos/SPL.gif",
  },
  {
    title: "German Credit Risk System",
    desc: "Pipeline de Machine Learning completo para predicción de riesgo bancario, optimizado para Recall.",
    impact: "Estandariza el flujo MLOps: Procesamiento de datos → Modelo predictivo → Interfaz de negocio.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/dev-manuelp/german-credit-risk",
    video: "/demos/german.gif",
  },
];

const skills = [
  { title: "Core", items: ["Python", "JavaScript/TypeScript", "SQL", "Git/GitHub"] },
  { title: "IA / Data", items: ["scikit-learn", "Pandas/NumPy", "OCR + LLMs", "Evaluación y métricas"] },
  { title: "Cloud / Dev", items: ["AWS", "Docker", "Linux", "APIs (Flask)"] },
];

const certs: Cert[] = [
   {
    name: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "Amazon Web Services",
    verify: "https://www.credly.com/badges/5d972f43-e9a0-495d-b876-1a2277c4a120/public_url",
    image: "/certs/aws-academy-graduate-machine-learning-foundations-t.png",
  },
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

// ------------------  COMPONENTE PRINCIPAL  ------------------



export default function Home() {

  // Estados de memoria, Cert, CV, Contact, Copiado mail

  const [openCert, setOpenCert] = useState<null | Cert>(null);
  const [openCV, setOpenCV] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openVideo, setOpenVideo] = useState<null | Project>(null); //

  const email = "manuelp.dev@gmail.com";

  // Ordea los certificacion, primeros los que tienen link de verificación
  const certsSorted = [...certs].sort(
  (a, b) => Number(Boolean(b.verify)) - Number(Boolean(a.verify))
  );

  // EFECTO - ESC=cerrar modal

  useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
        setOpenCert(null);
        setOpenCV(false);
        setOpenContact(false);
        }
      };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

   // Vista pagina  - HTML + TAilWIND

  return (
    <main className="min-h-screen bg-[#0B0E11] text-[#EDEDED]">
      <Navbar />

    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">

      {/* HERO - Titulo principal */}

      <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
      >
      

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Full-Stack + <span className="text-[#C9A24D]">IA & Big Data</span>
            <span className="text-[#145A43]">.</span>
          </h1>

          <p className="max-w-3xl text-xl md:text-2xl text-[#B5B8BC] leading-relaxed">
            IA aplicada al desarrollo Full-Stack con impacto real.
          </p>

        <div className="flex flex-wrap mb-8 gap-3">
            <a
              href="#proyectos"
              className="rounded-xl bg-[#0F3D2E] px-5 py-3 text-sm font-medium hover:bg-[#145A43] transition"
            >
              Ver proyectos
            </a>

            <button
              type="button"
              onClick={() => setOpenCV(true)}
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#0B0E11] px-3 py-2 text-xs text-[#B5B8BC] hover:border-white/20 transition"
            >
              Mostrar CV
            </button>

        </div>

        
        </motion.section>


      {/* ABOUT MINI - Sección sobre mí */}


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

        
        {/* Linea fina para marcar separación*/}

        <div className="my-12 h-px bg-white/10" />

        {/* PROYECTOS - Sección proyectos destacados*/}


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

            {/* Bucle recorre la lista de projects y crea tarjeta para cada uno */}

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-[#161A1E] p-6 transition
                           hover:border-[#C9A24D]/40 hover:shadow-[0_0_0_1px_rgba(201,162,77,0.12),0_18px_60px_rgba(0,0,0,0.55)]"
              >
               <h3 className="text-2xl font-bold text-[#EDEDED]">{p.title}</h3>
                
                
                <p className="mt-3 text-base text-[#B5B8BC] leading-relaxed">{p.desc}</p>
                
                <p className="mt-4 text-base text-[#EDEDED]">
                  <span className="text-[#C9A24D] font-medium">Impacto:</span> {p.impact}
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

                <div className="mt-5 flex items-center justify-between text-sm">
                  {/* Botón VER USO (Abre Modal) */}
                  {p.video ? (
                    <button
                      onClick={() => setOpenVideo(p)}
                      className="text-[#C9A24D] hover:underline flex items-center gap-1"
                    >
                      Ver Uso ▷
                    </button>
                  ) : (
                    <span className="text-[#B5B8BC]">Demo (próximamente)</span>
                  )}

                  {/* Botón GITHUB */}
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

        {/* SKILLS - Sección skills */}

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

        {/* CERTIFICACIONES - Sección certificados */}

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

        {/* ------------------------------------- MODALES -------------------------------------  */}

             {/* ---------- Modal CERTIFICDO IND ----------  */}

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

        {/* ---------- Modal MOSTRAR CV (PDF) ----------  */}

            {openCV && (
              <div
                className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
                onClick={() => setOpenCV(false)}
              >
                <div
                  className="w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0B0E11] overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4 p-5 border-b border-white/10">
                    <div>
                      <div className="text-sm text-[#B5B8BC]">Currículum</div>
                      <div className="text-lg font-semibold">CV · Manuel Peña</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        className="rounded-xl border border-[#C9A24D]/60 px-3 py-2 text-sm text-[#EDEDED] hover:border-[#C9A24D] transition"
                        href="/cv.pdf"
                        download
                      >
                        Descargar ↧
                      </a>

                      <button
                        type="button"
                        className="rounded-xl border border-white/10 px-3 py-2 text-sm text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
                        onClick={() => setOpenCV(false)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="rounded-xl border border-white/10 overflow-hidden bg-black">
                      <iframe
                        src="/cv.pdf#view=FitH"
                        title="CV Manuel Peña"
                        className="w-full h-[72vh]"
                        loading="lazy"
                      />
                    </div>

                    <p className="mt-4 text-xs text-[#B5B8BC] text-center">
                      Pulsa <span className="text-[#C9A24D]">Esc</span> o haz click fuera para cerrar.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ---------- Modal VIDEO DEMO ----------  */}

        {openVideo && (
          <div
            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpenVideo(null)}
          >
            <div
              className="w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0B0E11] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 p-5 border-b border-white/10 bg-[#161A1E]">
                <div>
                  <div className="text-sm text-[#B5B8BC]">Demostración de uso</div>
                  <div className="text-lg font-semibold text-[#EDEDED]">{openVideo.title}</div>
                </div>
                <button
                  type="button"
                  className="rounded-xl border border-white/10 px-3 py-2 text-sm text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition bg-[#0B0E11]"
                  onClick={() => setOpenVideo(null)}
                >
                  Cerrar
                </button>
              </div>

              <div className="p-0 bg-black flex justify-center items-center min-h-[300px]">
                {/* Lógica: Si es MP4 usa video, si no imagen (GIF) */}
                {openVideo.video.endsWith(".mp4") ? (
                  <video
                    src={openVideo.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <img 
                    src={openVideo.video} 
                    alt={`Demo de ${openVideo.title}`}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                )}
              </div>
              
              <div className="p-3 text-xs text-[#B5B8BC] text-center bg-[#161A1E] border-t border-white/10">
                Pulsa <span className="text-[#C9A24D]">Esc</span> o haz click fuera para cerrar.
              </div>
            </div>
          </div>
        )}


        {/* ---------- Modal CONTACTO ----------  */}

            {openContact && (
              <div
                className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
                onClick={() => setOpenContact(false)}
              >
                <div
                  className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0B0E11] overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4 p-5 border-b border-white/10">
                    <div>
                      <div className="text-sm text-[#B5B8BC]">Contacto</div>
                      <div className="text-lg font-semibold">Escríbeme</div>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl border border-white/10 px-3 py-2 text-sm text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
                      onClick={() => setOpenContact(false)}
                    >
                      Cerrar
                    </button>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Email + copiar */}
                    <div className="rounded-2xl border border-white/10 bg-[#161A1E] p-4">
                      <div className="text-xs text-[#B5B8BC] mb-2">Email</div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="font-medium text-[#EDEDED] break-all">{email}</div>

                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(email);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 1400);
                            } catch {
                              // fallback: abre mail si el clipboard falla
                              window.location.href = `mailto:${email}`;
                            }
                          }}
                          className="shrink-0 rounded-xl border border-white/10 px-3 py-2 text-sm text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
                          title="Copiar email"
                        >
                          {copied ? "Copiado ✓" : "Copiar"}
                        </button>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={`mailto:${email}`}
                          className="rounded-lg border border-white/10 px-3 py-2 text-xs text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
                        >
                          Abrir email ↗
                        </a>
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-white/10 px-3 py-2 text-xs text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
                        >
                          Gmail ↗
                        </a>
                        <a
                          href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-white/10 px-3 py-2 text-xs text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
                        >
                          Outlook ↗
                        </a>
                      </div>
                    </div>

                    <p className="text-xs text-[#B5B8BC] text-center">
                      Pulsa <span className="text-[#C9A24D]">Esc</span> o haz click fuera para cerrar.
                    </p>
                  </div>
                </div>
              </div>
            )}


        <div className="my-12 h-px bg-white/10" />

        {/* CONTACTO -- Sección inferior botones -- */}

        <section id="contacto" className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Contacto <span className="text-[#145A43]">rápido</span>
          </h2>
          <p className="text-[#B5B8BC]">
            
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setOpenContact(true)}
              className="rounded-xl bg-[#0F3D2E] px-5 py-3 text-sm font-medium hover:bg-[#145A43] transition"
            >
              Email
            </button>
            <a className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:border-white/20 transition" href="https://linkedin.com/in/manuelp-dev/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:border-white/20 transition" href="https://github.com/dev-manuelp" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>

        {/* -------------- FOOTER -------------- */}

        <footer className="mt-16 pt-10 border-t border-white/10 text-sm text-[#B5B8BC] flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Manuel Peña ·{" "}
            <span className="text-[#C9A24D]">Full-Stack + IA & Big Data</span>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-[#EDEDED]" href="mailto:manuelp.dev@gmail.com">Email</a>
            <a className="hover:text-[#EDEDED]" href="https://github.com/dev-manuelp" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-[#EDEDED]" href="https://linkedin.com/in/manuelp-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}