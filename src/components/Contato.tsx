"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";

const contatos = [
  {
    titulo: "Email",
    valor: "mariootaviosilva@gmail.com",
    href: "mailto:seuemail@example.com",
    icone: Mail,
  },
  {
    titulo: "Localização",
    valor: "Cuiabá, MT, Brasil",
    icone: MapPin,
  },
];

const redes = [
  {
    nome: "GitHub",
    href: "https://github.com/Mario-Otavio",
    icone: Github,
  },
  {
    nome: "LinkedIn",
    href: "https://www.linkedin.com/in/mario-otavio-belmonte-dorileo-da-silva-b8846120b/",
    icone: Linkedin,
  },
];

export default function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const lidarComEnvio = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nomeLimpo = nome.trim();
    const mensagemLimpa = mensagem.trim();

    // Capitaliza a primeira letra de cada palavra do nome
    const capitalizarNome = (texto: string) => {
      if (!texto) return texto;
      return texto
        .split(" ")
        .map(
          (palavra) =>
            palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
        )
        .join(" ");
    };

    // Capitaliza a primeira letra da mensagem
    const capitalizarPrimeiraLetra = (texto: string) => {
      if (!texto) return texto;
      return texto.charAt(0).toUpperCase() + texto.slice(1);
    };

    const nomeFormatado = capitalizarNome(nomeLimpo);
    const mensagemFormatada = capitalizarPrimeiraLetra(mensagemLimpa);
    const texto = `Olá! Meu nome é ${nomeFormatado}. ${mensagemFormatada}`;
    const url = `https://wa.me/5565998153363?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contato"
      className="min-h-screen relative flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl px-7! lg:px-8!">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4! sm:mb-5! lg:mb-6! text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Entre em{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contato
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-5! sm:mb-6! lg:mb-8! leading-relaxed text-center! mx-auto! max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Estou sempre aberto a novas oportunidades e projetos interessantes.
          Vamos conversar!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="space-y-4! mb-3! sm:mb-4! lg:mb-8!">
              {contatos.map((item) => {
                const Icone = item.icone;
                const Conteudo = (
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4! backdrop-blur-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-700/50 text-purple-400">
                      <Icone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{item.titulo}</p>
                      <p className="text-white font-medium">{item.valor}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <Link key={item.titulo} href={item.href} className="block">
                    {Conteudo}
                  </Link>
                ) : (
                  <div key={item.titulo}>{Conteudo}</div>
                );
              })}
            </div>

            <div className="mb-4! sm:mb-5! lg:mb-8!">
              <p className="text-white/70 mb-1! sm:mb-2! lg:mb-3!">
                Me encontre nas redes
              </p>
              <div className="flex items-center gap-3">
                {redes.map((rede) => {
                  const Icone = rede.icone;
                  const corIcone =
                    rede.nome === "LinkedIn"
                      ? "text-blue-500! hover:text-blue-500!"
                      : "text-white/70 hover:text-white";

                  return (
                    <Link
                      key={rede.nome}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 ${corIcone} hover:border-white/20 transition-colors`}
                      aria-label={rede.nome}
                    >
                      <Icone className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6! text-white/90 backdrop-blur-lg mb-4! sm:mb-5! lg:mb-8!">
              <p className="text-base font-medium">
                "A melhor maneira de prever o futuro é criá-lo."
              </p>
              <p className="mt-2 text-sm text-white/60">— Peter Drucker</p>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-4! backdrop-blur-lg mb-8!"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <form className="space-y-5!" onSubmit={lidarComEnvio}>
              <div>
                <label className="block text-sm text-white/70 mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4! py-3! text-white placeholder:text-white/40 outline-none transition-colors focus:border-purple-400/60"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  placeholder="Conte-me sobre sua ideia..."
                  value={mensagem}
                  onChange={(event) => setMensagem(event.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4! py-3! text-white placeholder:text-white/40 outline-none transition-colors focus:border-purple-400/60 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="cursor-pointer w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transition-all"
              >
                Enviar Mensagem
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
