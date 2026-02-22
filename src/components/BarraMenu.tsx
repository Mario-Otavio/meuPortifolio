"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Tecnologias", href: "#tecnologias" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export default function BarraMenu() {
  const [secaoAtiva, setSecaoAtiva] = useState("inicio");
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const lidarComScroll = () => {
      const scrollAtual = window.scrollY;
      const secoes = navItems.map((item) => item.href.replace("#", ""));
      const posicaoRolagem = scrollAtual + 200;

      for (let i = secoes.length - 1; i >= 0; i--) {
        const elemento = document.getElementById(secoes[i]);
        if (elemento && posicaoRolagem >= elemento.offsetTop) {
          setSecaoAtiva(secoes[i]);
          break;
        }
      }

      if (scrollAtual < 100) setSecaoAtiva("inicio");
    };

    window.addEventListener("scroll", lidarComScroll);
    lidarComScroll();
    return () => window.removeEventListener("scroll", lidarComScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    secaoId: string
  ) => {
    e.preventDefault();
    setMenuAberto(false);

    if (secaoId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const elemento = document.getElementById(secaoId);
    if (elemento) {
      const titulo = elemento.querySelector("h2");
      const headerHeight = 80;
      if (titulo) {
        const pos = titulo.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: pos - headerHeight, behavior: "smooth" });
      } else {
        window.scrollTo({
          top: elemento.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* ── Floating Nav Desktop ── */}
      <motion.div
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="flex items-center gap-0.5 rounded-full border border-white/8 bg-transparent! px-2! py-1.5! backdrop-blur-xl!">
          {navItems.map((item, index) => {
            const secaoId = item.href.replace("#", "");
            const estaAtivo = secaoAtiva === secaoId;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, secaoId)}
                className={`relative flex items-center rounded-full px-[18px]! py-2! text-sm font-medium transition-colors duration-200 ${estaAtivo
                  ? "bg-linear-to-br from-violet-600 to-purple-500 text-white shadow-lg shadow-purple-900/30"
                  : "text-white/55 hover:text-white"
                  }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index + 0.2 }}
                whileHover={!estaAtivo ? { scale: 1.04 } : {}}
                whileTap={{ scale: 0.96 }}
              >
                {item.name}
              </motion.a>
            );
          })}
        </nav>
      </motion.div>

      {/* ── Mobile Header ── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="border-b border-white/[0.07] bg-transparent! backdrop-blur-xl!">
          <div className="flex items-center justify-between px-5! py-4!">
            <motion.a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "inicio")}
              className="text-lg font-bold text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Portfólio
            </motion.a>

            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="rounded-full bg-white/[0.07] p-1.5! text-white transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {menuAberto ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuAberto && (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="border-b border-white/[0.07] bg-transparent! backdrop-blur-xl!"
            >
              <div className="flex flex-col gap-1! px-3! py-2!">
                {navItems.map((item, index) => {
                  const secaoId = item.href.replace("#", "");
                  const estaAtivo = secaoAtiva === secaoId;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, secaoId)}
                      className={`block backdrop-blur-xl rounded-full px-4! py-2! text-[0.95rem]! font-medium! transition-colors! duration-200! ${estaAtivo
                        ? "bg-linear-to-br from-violet-600 to-purple-500 text-white shadow-lg shadow-purple-900/30"
                        : "text-white/55 hover:text-white"
                        }`}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ delay: index * 0.06 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
