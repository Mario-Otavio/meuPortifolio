import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorWrapper from "@/components/CursorWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meu Portfólio | Desenvolvedor Full Stack",
  description:
    "Portfólio pessoal mostrando projetos e habilidades em desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} font-space-grotesk antialiased relative bg-black`}
      >
        {/* Fundo fixo com gradiente roxo/azul e grade */}
        <div className="fixed inset-0 pointer-events-none z-[2]">
          {/* Fundo base com gradiente roxo/azul */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-purple-blue" />

          {/* Padrão de grid */}
          <div className="absolute inset-0 opacity-50 pointer-events-none bg-grid-pattern" />

          {/* Gradiente radial central */}
          <div className="absolute inset-0 pointer-events-none bg-radial-purple" />
        </div>

        <CursorWrapper />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
