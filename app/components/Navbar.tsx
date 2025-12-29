"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Proyectos", href: "#proyectos", id: "proyectos" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Certificaciones", href: "#certificaciones", id: "certificaciones" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("proyectos");


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    useEffect(() => {
    const ids = links.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Nos quedamos con las secciones "visibles"
        const visible = entries
          .filter((e) => e.isIntersecting)
          // ordenamos por la que tenga más area visible
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        // Ajusta esto para que "active" cambie un poco antes/después
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        // Importante: compensar la navbar sticky
        rootMargin: "-25% 0px -60% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);


  return (
    <header className="sticky top-0 z-50">
        <div
            className={[
                "backdrop-blur supports-[backdrop-filter]:bg-[#0F3D2E]/35",
                scrolled
                ? "border-b border-white/10 bg-[#0F3D2E]/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                : "bg-[#0F3D2E]/20",
            ].join(" ")}
        >
        <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            <span className="text-[#EDEDED]">manuelp</span>
            <span className="text-[#C9A24D]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-5 text-sm">
                {links.map((l) => {
                    const active = activeId === l.id;
                    return (
                    <a
                        key={l.href}
                        href={l.href}
                        className={[
                        "transition",
                        active ? "text-[#C9A24D]" : "text-[#B5B8BC] hover:text-[#EDEDED]",
                        ].join(" ")}
                    >
                        {l.label}
                    </a>
                    );
                })}
           </nav>


          <div className="flex items-center gap-3">
            <a
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-[#B5B8BC] hover:border-white/20 hover:text-[#EDEDED] transition"
              href="https://github.com/dev-manuelp"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="rounded-xl border border-[#C9A24D]/60 px-4 py-2 text-sm text-[#EDEDED] hover:border-[#C9A24D] transition"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
