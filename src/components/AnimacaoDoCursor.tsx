"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    TubesCursor: any;
  }
}

export default function AnimacaoDoCursor() {
  const referenciaCanvas = useRef<HTMLCanvasElement>(null);
  const referenciaApp = useRef<any>(null);
  const inicializadoRef = useRef(false);

  useEffect(() => {
    if (inicializadoRef.current || !referenciaCanvas.current) return;
    inicializadoRef.current = true;

    let limpar: (() => void) | undefined;

    const inicializar = async () => {
      try {
        // Carrega o módulo ES6 do CDN
        if (!window.TubesCursor) {
          const carregadorModulo = `
            import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
            window.TubesCursor = TubesCursor;
            window.dispatchEvent(new CustomEvent('tubesCursorLoaded'));
          `;

          const script = document.createElement("script");
          script.type = "module";
          script.textContent = carregadorModulo;

          await new Promise<void>((resolver, rejeitar) => {
            const tempoLimite = setTimeout(
              () => rejeitar(new Error("Tempo esgotado")),
              10000
            );

            const aoCarregar = () => {
              clearTimeout(tempoLimite);
              window.removeEventListener("tubesCursorLoaded", aoCarregar);
              resolver();
            };

            window.addEventListener("tubesCursorLoaded", aoCarregar);
            document.head.appendChild(script);
          });
        }

        await new Promise((resolver) => setTimeout(resolver, 100));

        if (!window.TubesCursor || !referenciaCanvas.current) return;

        // Inicializa exatamente como no exemplo original
        referenciaApp.current = window.TubesCursor(referenciaCanvas.current, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        });

        // Posição central da tela (ajuste centroY para mover verticalmente)
        const centroX = window.innerWidth / 2;
        const centroY = window.innerHeight / 2; // Ajuste aqui: valores menores = mais acima, maiores = mais abaixo

        // Simula o mouse no centro da tela
        const simularMouseNoCentro = () => {
          // Dispara em múltiplos alvos para garantir que a biblioteca receba
          const evento = new MouseEvent("mousemove", {
            bubbles: true,
            cancelable: true,
            clientX: centroX,
            clientY: centroY,
            view: window,
          });

          window.dispatchEvent(evento);
          document.dispatchEvent(evento);
          referenciaCanvas.current?.dispatchEvent(evento);
        };

        // Simula mouse no centro várias vezes para garantir
        simularMouseNoCentro();
        setTimeout(simularMouseNoCentro, 100);
        setTimeout(simularMouseNoCentro, 200);
        setTimeout(simularMouseNoCentro, 500);

        // Evento de clique para mudar cores (igual ao exemplo)
        const lidarComClique = () => {
          const cores = coresAleatorias(3);
          const coresLuzes = coresAleatorias(4);
          referenciaApp.current?.tubes?.setColors(cores);
          referenciaApp.current?.tubes?.setLightsColors(coresLuzes);
        };

        document.body.addEventListener("click", lidarComClique);

        limpar = () => {
          document.body.removeEventListener("click", lidarComClique);
        };
      } catch (erro) {
        console.error("Erro:", erro);
        inicializadoRef.current = false;
      }
    };

    inicializar();

    return () => limpar?.();
  }, []);

  function coresAleatorias(quantidade: number): string[] {
    return new Array(quantidade).fill(0).map(
      () =>
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")
    );
  }

  return (
    <canvas
      id="canvas"
      ref={referenciaCanvas}
      className="fixed inset-x-0 -top-[300px]! h-[calc(100vh+360px)] overflow-hidden transition-transform duration-500 ease-out pointer-events-none z-[1]"
    />
  );
}
