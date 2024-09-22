"use client";

import { StyledSpinner } from "@/app/components";
import { useState, useEffect } from "react";

export function WaitingPlayerContainer() {
  return (
    <div className="w-full flex flex-col items-center space-y-2 text-foreground pt-5">
      <StyledSpinner />
      <AguardandoJogador />
    </div>
  );
}

const AguardandoJogador = () => {
  const [index, setIndex] = useState(0);
  const [ellipses, setEllipses] = useState("");
  const mensagem = "...";
  const delay = 400;

  useEffect(() => {
    const timer = setInterval(() => {
      setEllipses((prev) => prev + mensagem[index]);
      setIndex((prev) => prev + 1);
      if (index === mensagem.length) {
        clearInterval(timer);
        setEllipses("");
        setIndex(0);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [ellipses]);

  return <h1 className="h-4">{`Aguardando outro jogador${ellipses}`}</h1>;
};
