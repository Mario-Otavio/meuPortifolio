"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Tecnologias", href: "#tecnologias" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export default function BarraMenu() {
  const [rolado, setRolado] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState("inicio");
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const lidarComScroll = () => {
      setRolado(window.scrollY > 20);

      // Detecta qual seção está visível
      const secoes = navItems.map((item) => item.href.replace("#", ""));
      const posicaoRolagem = window.scrollY + 200; // Deslocamento para detectar antes de entrar

      for (let i = secoes.length - 1; i >= 0; i--) {
        const elemento = document.getElementById(secoes[i]);
        if (elemento) {
          const deslocamentoSuperior = elemento.offsetTop;
          if (posicaoRolagem >= deslocamentoSuperior) {
            setSecaoAtiva(secoes[i]);
            break;
          }
        }
      }

      // Se estiver no topo, define como "inicio"
      if (window.scrollY < 100) {
        setSecaoAtiva("inicio");
      }
    };

    window.addEventListener("scroll", lidarComScroll);
    lidarComScroll(); // Chama uma vez para definir o estado inicial
    return () => window.removeEventListener("scroll", lidarComScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-700/30 ${rolado ? "border-gray-700/30" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto! lg:px-6! py-4! flex items-center justify-between">
        <motion.a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          Portfólio
        </motion.a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const secaoId = item.href.replace("#", "");
            const estaAtivo = secaoAtiva === secaoId;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();

                  // Seção "Início" rola para o topo
                  if (secaoId === "inicio") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                  }

                  const elemento = document.getElementById(secaoId);
                  if (elemento) {
                    // Procura o título (h2) dentro da seção para scroll preciso
                    const titulo = elemento.querySelector("h2");
                    const headerHeight = 110; // Altura do header fixo + margem

                    if (titulo) {
                      const tituloPosicao =
                        titulo.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: tituloPosicao - headerHeight,
                        behavior: "smooth",
                      });
                    } else {
                      // Fallback: usa a própria seção se não encontrar o h2
                      const elementoPosicao = elemento.offsetTop;
                      window.scrollTo({
                        top: elementoPosicao - headerHeight,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
                className={`relative text-base font-medium transition-colors ${estaAtivo ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {estaAtivo && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-400 "
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Botão Toggle Mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-white hover:text-purple-400 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {menuAberto ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Menu Mobile */}
        <AnimatePresence>
          {menuAberto && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 md:hidden pl-13! bg-transparent backdrop-blur-xl! border-b border-gray-700/30"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navItems.map((item, index) => {
                  const secaoId = item.href.replace("#", "");
                  const estaAtivo = secaoAtiva === secaoId;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuAberto(false);

                        // Seção "Início" rola para o topo
                        if (secaoId === "inicio") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          return;
                        }

                        const elemento = document.getElementById(secaoId);
                        if (elemento) {
                          // Procura o título (h2) dentro da seção para scroll preciso
                          const titulo = elemento.querySelector("h2");
                          const headerHeight = 110; // Altura do header fixo + margem

                          if (titulo) {
                            const tituloPosicao =
                              titulo.getBoundingClientRect().top +
                              window.scrollY;
                            window.scrollTo({
                              top: tituloPosicao - headerHeight,
                              behavior: "smooth",
                            });
                          } else {
                            // Fallback: usa a própria seção se não encontrar o h2
                            const elementoPosicao = elemento.offsetTop;
                            window.scrollTo({
                              top: elementoPosicao - headerHeight,
                              behavior: "smooth",
                            });
                          }
                        }
                      }}
                      className={`relative text-base font-medium transition-colors py-2 ${estaAtivo
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                      {estaAtivo && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-400"
                          layoutId="activeSectionMobile"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
