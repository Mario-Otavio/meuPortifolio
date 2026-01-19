"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiMui,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const primeiroNome = "Mario Otavio";
  const sobrenome = "Belmonte Dorilêo da Silva";

  useEffect(() => {
    const verificarMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    verificarMobile();
    window.addEventListener("resize", verificarMobile);
    return () => window.removeEventListener("resize", verificarMobile);
  }, []);

  // Estados comentados - animação de digitação desativada
  // const [textoExibido, setTextoExibido] = useState("");
  // const [estaDigitando, setEstaDigitando] = useState(true);
  // const [indice, setIndice] = useState(0);

  const cubosTecnologia = [
    {
      nome: "HTML",
      icone: SiHtml5,
      posicao: { top: "30%", left: "15%" },
      atraso: 0.5,
      duracaoFlutuacao: 4.2,
    },
    {
      nome: "CSS",
      icone: SiCss3,
      posicao: { top: "52%", left: "12%" },
      atraso: 0.7,
      duracaoFlutuacao: 5.8,
    },
    {
      nome: "JS",
      icone: SiJavascript,
      posicao: { top: "25%", right: "15%" },
      atraso: 0.6,
      duracaoFlutuacao: 3.7,
    },
    {
      nome: "React",
      icone: SiReact,
      posicao: { top: "48%", right: "12%" },
      atraso: 0.8,
      duracaoFlutuacao: 6.3,
    },
    {
      nome: "GitHub",
      icone: SiGithub,
      posicao: { top: "65%", right: "18%" },
      atraso: 0.9,
      duracaoFlutuacao: 4.9,
    },
    {
      nome: "MUI",
      icone: SiMui,
      posicao: { top: "70%", left: "18%" },
      atraso: 1.0,
      duracaoFlutuacao: 5.4,
    },
  ];

  // Animação de digitação comentada - desativada
  // useEffect(() => {
  //   // Velocidade diferente para digitar e apagar
  //   const velocidadeDigitacao = 100; // 100ms por letra ao digitar
  //   const velocidadeApagamento = 50; // 50ms por letra ao apagar (mais rápido)
  //   const velocidade = estaDigitando
  //     ? velocidadeDigitacao
  //     : velocidadeApagamento;

  //   const intervalo = setInterval(() => {
  //     if (estaDigitando) {
  //       // Digita o texto
  //       if (indice < primeiroNome.length) {
  //         setTextoExibido(primeiroNome.slice(0, indice + 1));
  //         setIndice(indice + 1);
  //       } else {
  //         // Após terminar de digitar, aguarda 2 segundos e começa a apagar
  //         setTimeout(() => {
  //           setEstaDigitando(false);
  //         }, 2000);
  //       }
  //     } else {
  //       // Apaga o texto
  //       if (indice > 0) {
  //         setTextoExibido(primeiroNome.slice(0, indice - 1));
  //         setIndice(indice - 1);
  //       } else {
  //         // Após apagar tudo, aguarda 500ms e começa a digitar novamente
  //         setTimeout(() => {
  //           setEstaDigitando(true);
  //         }, 100);
  //       }
  //     }
  //   }, velocidade);

  //   return () => clearInterval(intervalo);
  // }, [indice, estaDigitando, primeiroNome]);

  const obterEstilosCubo = (nome: string) => {
    const estilos: Record<
      string,
      { fundo: string; borda: string; texto: string; sombra: string }
    > = {
      HTML: {
        fundo: "bg-orange-500/20",
        borda: "border-orange-500/50",
        texto: "text-orange-400",
        sombra: "shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]",
      },
      CSS: {
        fundo: "bg-blue-500/20",
        borda: "border-blue-500/50",
        texto: "text-blue-400",
        sombra: "shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]",
      },
      JS: {
        fundo: "bg-yellow-400/20",
        borda: "border-yellow-400/50",
        texto: "text-yellow-400",
        sombra: "shadow-[0_0_20px_-5px_rgba(251,191,36,0.5)]",
      },
      React: {
        fundo: "bg-blue-500/20",
        borda: "border-blue-500/50",
        texto: "text-blue-400",
        sombra: "shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]",
      },
      Tailwind: {
        fundo: "bg-cyan-500/20",
        borda: "border-cyan-500/50",
        texto: "text-cyan-400",
        sombra: "shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]",
      },
      GitHub: {
        fundo: "bg-gray-800/20",
        borda: "border-gray-700/50",
        texto: "text-gray-300",
        sombra: "shadow-[0_0_20px_-5px_rgba(107,114,128,0.5)]",
      },
      UI: {
        fundo: "bg-purple-500/20",
        borda: "border-purple-500/50",
        texto: "text-purple-400",
        sombra: "shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]",
      },
      MUI: {
        fundo: "bg-blue-500/20",
        borda: "border-blue-500/50",
        texto: "text-blue-500",
        sombra: "shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]",
      },
    };
    return estilos[nome] || estilos.HTML;
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Orbes com gradiente mais sutil */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 70%)",
          top: "10%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-18 blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
          bottom: "20%",
          right: "15%",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cubos de tecnologia */}
      {cubosTecnologia.map((cubo) => {
        const estilos = obterEstilosCubo(cubo.nome);
        const IconeComponente = cubo.icone;

        // Ajusta posição para mobile (move para cima subtraindo 15%)
        // JS precisa de ajuste especial - move menos para cima
        // MUI precisa ficar mais para cima - move mais para cima
        // GitHub precisa ficar mais para baixo - move menos para cima
        const ajusteTop =
          cubo.nome === "JS"
            ? 10
            : cubo.nome === "MUI"
            ? 12
            : cubo.nome === "GitHub"
            ? 5
            : 15;
        const posicaoAjustada =
          isMobile && cubo.posicao.top?.includes("%")
            ? {
                ...cubo.posicao,
                // CSS precisa de ajuste especial - move 180px para baixo
                // React precisa de ajuste especial - move 200px para baixo
                top:
                  cubo.nome === "CSS"
                    ? `calc(${cubo.posicao.top} + 180px)`
                    : cubo.nome === "React"
                    ? `calc(${cubo.posicao.top} + 200px)`
                    : `${Math.max(
                        5,
                        parseFloat(cubo.posicao.top) - ajusteTop
                      )}%`,
                // MUI precisa de ajuste especial - move mais para esquerda
                ...(cubo.nome === "MUI" && cubo.posicao.left?.includes("%")
                  ? {
                      left: `calc(${cubo.posicao.left} - 50px)`,
                    }
                  : {}),
                // CSS precisa de ajuste especial - move mais para esquerda
                ...(cubo.nome === "CSS" && cubo.posicao.left?.includes("%")
                  ? {
                      left: `${Math.max(
                        5,
                        parseFloat(cubo.posicao.left) - 5
                      )}%`,
                    }
                  : {}),
                // GitHub precisa de ajuste especial - move mais para direita
                ...(cubo.nome === "GitHub" && cubo.posicao.right?.includes("%")
                  ? {
                      right: `${Math.max(
                        5,
                        parseFloat(cubo.posicao.right) - 10
                      )}%`,
                    }
                  : {}),
                // React precisa de ajuste especial - move mais para direita
                ...(cubo.nome === "React" && cubo.posicao.right?.includes("%")
                  ? {
                      right: `${Math.max(
                        5,
                        parseFloat(cubo.posicao.right) - 5
                      )}%`,
                    }
                  : {}),
              }
            : cubo.posicao;

        return (
          <motion.div
            key={cubo.nome}
            className="absolute w-14 h-14 rounded-lg flex items-center justify-center pointer-events-none p-2"
            style={posicaoAjustada}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -18, -15, 0],
              x: [0, 5, -3, 0],
              rotate: [0, 3, -2, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: cubo.atraso },
              y: {
                duration: cubo.duracaoFlutuacao,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: cubo.duracaoFlutuacao,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: cubo.duracaoFlutuacao,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <IconeComponente
              className={`w-full h-full ${estilos.texto}`}
              title={cubo.nome}
            />
          </motion.div>
        );
      })}

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-white/60 text-lg mb-4! font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Olá, me chamo
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6!"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {primeiroNome}
            </span>
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8!"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {sobrenome}
          </motion.h2>

          <motion.p
            className="text-white/60 text-lg md:text-xl mx-auto mb-12!"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Desenvolvedor Full Stack apaixonado por criar experiências incríveis
          </motion.p>

          {/* Botões de ação */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              asChild
              size="lg"
              className="group bg-indigo-500 hover:bg-indigo-600 text-white border-0 px-5! text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-full w-[12rem] sm:w-auto"
            >
              <Link
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault();
                  const elemento = document.getElementById("projetos");
                  if (elemento) {
                    const headerHeight = 110; // Altura do header fixo + margem
                    const titulo = elemento.querySelector("h2");
                    const alvo = titulo || elemento;
                    const alvoPosicao =
                      alvo.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: alvoPosicao - headerHeight,
                      behavior: "smooth",
                    });
                  }
                }}
                className="flex items-center gap-2 justify-center"
              >
                Ver Projetos
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/5! backdrop-blur-lg! rounded-full px-5! border border-white/30! hover:bg-white/10! hover:backdrop-blur-lg! hover:border-white/20! transition-all! duration-300! cursor-pointer w-[12rem] sm:w-auto"
            >
              <Link
                href="https://wa.me/5565998153363?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white"
              >
                <SiWhatsapp className="h-5 w-5 text-green-500" />
                Entre em Contato
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de rolagem */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        onClick={() => {
          const tecnologiasSection = document.getElementById("tecnologias");
          if (tecnologiasSection) {
            tecnologiasSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="text-white/60 text-sm font-medium">
          ROLE PARA EXPLORAR
        </span>
        <div className="w-px h-16 bg-white/60 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-8 bg-white/80"
            animate={{
              y: ["-100%", "200%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
