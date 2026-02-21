"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiPostgresql,
  SiGithub,
  SiMui,
  SiShadcnui,
  SiClerk,
  SiReactquery,
  SiZod,
  SiAstro,
} from "react-icons/si";
import { IconBrandFramerMotion } from "@tabler/icons-react";

interface Tecnologia {
  nome: string;
  icone: React.ComponentType<{ className?: string }>;
  cor: string;
}

// Componente de Card que observa sua própria visibilidade
function CardTecnologia({
  tecnologia,
  indice,
}: {
  tecnologia: Tecnologia;
  indice: number;
}) {
  const IconeComponente = tecnologia.icone;
  const eMuiShadcn = tecnologia.nome === "MUI/Shadcn";

  // Função para obter o gradiente da linha baseado na tecnologia
  const obterGradienteLinha = () => {
    if (tecnologia.cor.includes("orange"))
      return "from-orange-500 via-orange-500 to-orange-500";
    if (tecnologia.cor.includes("blue") && !tecnologia.cor.includes("cyan")) {
      if (tecnologia.cor.includes("600"))
        return "from-blue-600 via-blue-600 to-blue-600";
      return "from-blue-500 via-blue-500 to-blue-500";
    }
    if (tecnologia.cor.includes("yellow"))
      return "from-yellow-400 via-yellow-400 to-yellow-400";
    if (tecnologia.cor.includes("cyan"))
      return "from-cyan-400 via-cyan-400 to-cyan-400";
    if (tecnologia.cor.includes("purple"))
      return "from-purple-400 via-purple-400 to-purple-400";
    if (tecnologia.cor.includes("red"))
      return "from-red-500 via-red-500 to-red-500";
    if (tecnologia.cor.includes("white"))
      return "from-white via-white to-white";
    if (tecnologia.cor.includes("gray"))
      return "from-gray-300 via-gray-300 to-gray-300";
    return "from-blue-500 via-blue-500 to-blue-500";
  };

  const gradiente = obterGradienteLinha();

  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-6! hover:bg-white/10 hover:backdrop-blur-xl hover:border-white/20 transition-all duration-300 cursor-pointer"
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0, ease: "easeOut" },
      }}
    >
      <div
        className={cn(
          "absolute top-0 left-4 right-4 h-px bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity",
          gradiente
        )}
      />
      <div className="flex flex-col items-center justify-center gap-3">
        {eMuiShadcn ? (
          <div className="flex items-center justify-center gap-5">
            <SiMui className="w-10 h-10 text-blue-400 transition-transform group-hover:scale-110" />
            <SiShadcnui className="w-8 h-8 text-white transition-transform group-hover:scale-110" />
          </div>
        ) : (
          <IconeComponente
            className={`w-12 h-12 ${tecnologia.cor} transition-transform group-hover:scale-110`}
          />
        )}
        <span className="text-white text-sm font-medium text-center">
          {tecnologia.nome}
        </span>
      </div>
    </motion.div>
  );
}

const tecnologias: Tecnologia[] = [
  {
    nome: "CSS",
    icone: SiCss3,
    cor: "text-blue-500",
  },
  {
    nome: "JavaScript",
    icone: SiJavascript,
    cor: "text-yellow-400",
  },
  {
    nome: "React",
    icone: SiReact,
    cor: "text-blue-400",
  },
  {
    nome: "Next.js",
    icone: SiNextdotjs,
    cor: "text-white",
  },
  {
    nome: "TypeScript",
    icone: SiTypescript,
    cor: "text-blue-500",
  },
  {
    nome: "TailwindCSS",
    icone: SiTailwindcss,
    cor: "text-cyan-400",
  },
  {
    nome: "Clerk Authentication",
    icone: SiClerk,
    cor: "text-white",
  },
  {
    nome: ".NET/C#",
    icone: SiDotnet,
    cor: "text-purple-400",
  },
  {
    nome: "PostgreSQL",
    icone: SiPostgresql,
    cor: "text-blue-600",
  },
  {
    nome: "Framer Motion",
    icone: IconBrandFramerMotion,
    cor: "text-purple-500",
  },
  {
    nome: "GitHub",
    icone: SiGithub,
    cor: "text-gray-300",
  },
  {
    nome: "MUI/Shadcn",
    icone: SiMui,
    cor: "text-blue-400",
  },
  {
    nome: "TanStack Query",
    icone: SiReactquery,
    cor: "text-red-500",
  },
  {
    nome: "Zod",
    icone: SiZod,
    cor: "text-blue-600",
  },
  {
    nome: "Astro",
    icone: SiAstro,
    cor: "text-orange-500",
  },
];

export default function Tecnologias() {
  const [colunas, setColunas] = useState(1);

  useEffect(() => {
    const atualizarColunas = () => {
      // sm breakpoint do Tailwind é 640px
      setColunas(window.innerWidth >= 640 ? 4 : 1);
    };

    atualizarColunas();
    window.addEventListener("resize", atualizarColunas);
    return () => window.removeEventListener("resize", atualizarColunas);
  }, []);

  return (
    <section
      id="tecnologias"
      className="min-h-screen relative flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl px-7! lg:px-8! mb-15! sm:mb-12! lg:mb-0!">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6! text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Stack de{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tecnologias
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-8! leading-relaxed text-center! mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Como entusiasta de tecnologia e inovação, utilizo diversas tecnologias
          para desenvolver aplicações web modernas e responsivas. Aqui estão
          algumas delas.
        </motion.p>
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Agrupa tecnologias em linhas baseado no número de colunas do grid */}
          {(() => {
            const linhas: Tecnologia[][] = [];
            const colunasDesktop = colunas;

            tecnologias.forEach((tecnologia, indice) => {
              const linhaIndex = Math.floor(indice / colunasDesktop);
              if (!linhas[linhaIndex]) {
                linhas[linhaIndex] = [];
              }
              linhas[linhaIndex].push(tecnologia);
            });

            return linhas.map((linha, indiceLinha) => (
              <motion.div
                key={indiceLinha}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -150px 0px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 0,
                      staggerChildren: 0.12,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {linha.map((tecnologia, indiceCard) => (
                  <CardTecnologia
                    key={tecnologia.nome}
                    tecnologia={tecnologia}
                    indice={indiceLinha * colunas + indiceCard}
                  />
                ))}
              </motion.div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}
