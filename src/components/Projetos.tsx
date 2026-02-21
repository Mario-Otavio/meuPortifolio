"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem?: string;
  link?: string;
  github?: string;
}

const projetos: Projeto[] = [
  {
    titulo: "Art.Final",
    descricao:
      "Sistema que gerencia com eficiência os materiais de móveis planejados! Controle entradas e saídas, acompanha níveis de estoque em tempo real, gera alertas de reposição e otimizar o uso dos materiais.",
    tecnologias: [
      "Next.js",
      "C#",
      "ASP.NET",
      "PostgreSQL",
      "Tailwind CSS",
      "Axios",
      "Shadcn/UI",
    ],
    imagem: "/artfinal.png",
    link: "https://arte-final.vercel.app/",
  },
  {
    titulo: "João Olavo Barber",
    descricao:
      "Landing page moderna e elegante de um barbeiro, com design sofisticado e responsivo. Apresenta serviços, galeria de trabalhos e informações de contato de forma profissional e atraente.",
    tecnologias: ["Astro", "Lucide Icons", "Tailwind CSS", "Google Fonts"],
    imagem: "/barbearia.webp",
    link: "https://joaoolavobarber.vercel.app/",
  },
  {
    titulo: "Decorando Momentos",
    descricao:
      "Landing page de aluguel de decorações temáticas completas para festas infantis e aniversários. Transforme seu evento com cenários incríveis como Homem-Aranha, Mundo Bita, Carros e muitos outros!",
    tecnologias: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Shadcn/UI"],
    imagem: "/Logo-decorando-momento.png",
    link: "https://decorandomomentos.vercel.app/",
  },
  {
    titulo: "Pokédex",
    descricao:
      "Explore o universo Pokémon de forma simples e divertida! Descubra informações completas sobre cada Pokémon, e encontre rapidamente seus favoritos em uma Pokédex moderna e responsiva.",
    tecnologias: ["React", "Axios", "Tailwind CSS"],
    imagem: "/pokedex.png",
    link: "https://universo-pokemon.vercel.app/",
  },
  {
    titulo: "Universo Naruto",
    descricao:
      "Landing page inspirada no universo de Naruto, com visual dinâmico, personagens icônicos e o espírito ninja. Desenvolvida com foco em estética, responsividade e imersão.",
    tecnologias: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI"],
    imagem: "/naruto.png",
    link: "https://universo-naruto.vercel.app/",
  },
  {
    titulo: "Gerenciador de Tarefas",
    descricao:
      "Sistema simples que permite adicionar, concluir e remover tarefas de forma prática, com uma interface intuitiva e responsiva.",
    tecnologias: ["React", "Lucide Icons", "Tailwind CSS"],
    imagem: "/gerenciador.png",
    link: "https://gerenciadortasks.vercel.app/",
  },

];

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="min-h-screen relative flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl px-7! lg:px-8! mb-15! sm:mb-12! lg:mb-0!">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4! sm:mb-5! lg:mb-6! text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Meus{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projetos
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-5! sm:mb-6! lg:mb-8! leading-relaxed text-center! mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Conheça alguns dos projetos que desenvolvi, cada um representando
          desafios únicos e soluções inovadoras.
        </motion.p>
        <div className="flex flex-col gap-8 items-center">
          {/* Agrupa projetos em linhas baseado no número de colunas do grid */}
          {(() => {
            const linhas: Projeto[][] = [];
            const colunasDesktop = 3;

            projetos.forEach((projeto, indice) => {
              const linhaIndex = Math.floor(indice / colunasDesktop);
              if (!linhas[linhaIndex]) {
                linhas[linhaIndex] = [];
              }
              linhas[linhaIndex].push(projeto);
            });

            return linhas.map((linha, indiceLinha) => (
              <motion.div
                key={indiceLinha}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -150px 0px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: indiceLinha * 0.25,
                      staggerChildren: 0.12,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {linha.map((projeto, indiceCard) => (
                  <motion.div
                    key={indiceCard}
                    variants={{
                      hidden: { opacity: 0, scale: 0.95, y: 30 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                        },
                      },
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <Card className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                      {/* Área da imagem */}
                      <div className="relative w-full h-55 overflow-hidden bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-t-md">
                        {projeto.imagem ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={projeto.imagem}
                              alt={projeto.titulo}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              unoptimized
                              priority={indiceLinha === 0 && indiceCard === 0}
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-white/30 text-4xl font-bold">
                              {projeto.titulo.charAt(0)}
                            </div>
                          </div>
                        )}
                        {/* Overlay gradiente no hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>

                      <CardHeader className="flex-1 px-2!">
                        <CardTitle className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400 bg-clip-text text-transparent">
                          {projeto.titulo}
                        </CardTitle>
                        <CardDescription className="text-gray-100 leading-relaxed text-sm">
                          {projeto.descricao}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1 px-2!">
                        <div className="flex flex-wrap gap-2">
                          {projeto.tecnologias.map((tecnologia) => (
                            <Badge
                              key={tecnologia}
                              variant="default"
                              className="text-sm text-gray-100 px-2! bg-gray-700 hover:bg-white/10 hover:border-white/30 transition-colors"
                            >
                              {tecnologia}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex p-2! pb-3!">
                        {projeto.link && (
                          <Button
                            asChild
                            size="sm"
                            className="w-full h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
                          >
                            <Link
                              href={projeto.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              Ver Projeto
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}
