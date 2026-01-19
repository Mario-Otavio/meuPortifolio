import { Separator } from "@/components/ui/separator";

export default function Rodape() {
  return (
    <footer className="py-8 px-6 bg-transparent">
      <div className="container mx-auto!">
        <Separator className="bg-gray-800!" />
        <div className="text-center my-5!">
          <p className="text-gray-400! text-sm! lg:text-base!">
            © {new Date().getFullYear()} Mario Otavio Belmonte Dorileo da Silva.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
