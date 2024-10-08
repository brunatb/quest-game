"use client";

import { StyledSpinner } from "@/app/components";
import { useState, useEffect } from "react";

export function DrawingPlayerContainer() {
  return (
    <div className="w-full flex flex-col items-center space-y-2 text-foreground pt-5">
      <StyledSpinner />
      <SorteandoJogador />
    </div>
  );
}

const SorteandoJogador = () => {
  const [ellipses, setEllipses] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setEllipses((prev) => prev);
    }, );
    return () => clearInterval(timer);
  });

  return <h1 className="h-4">{`Sorteando Início${ellipses}`}</h1>;
};
