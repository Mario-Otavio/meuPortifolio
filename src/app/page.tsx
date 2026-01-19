import BarraMenu from "@/components/BarraMenu";
import Hero from "@/components/Hero";
import Tecnologias from "@/components/Tecnologias";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <main>
      <BarraMenu />
      <Hero />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Rodape />
    </main>
  );
}
