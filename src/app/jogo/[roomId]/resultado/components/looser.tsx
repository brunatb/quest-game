"use client";
import Image from "next/image";

import { useAuth } from "@/app/components";
import { DrumRoll } from "./drum-roll";
import { LinkButton } from "@/app/components/link-button";

export function Looser() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <DrumRoll />;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen-minus-200 font-poppins">
      <div className="animate-jump-in animate-once animate-duration-1000 animate-ease-out w-full flex flex-col items-center">
        <h1 className="my-8 text-2xl">Não foi dessa vez!</h1>
        <Image
          src="/images/silver-medal.png"
          width={150}
          height={150}
          alt="Medalha de prata"
        />
      </div>
      <div className="w-full mt-8 flex flex-col items-center animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-out">
        <h2 className="text-xl text-center mb-6">
          Mas não desanime, você pode tentar novamente!
        </h2>
      </div>
      <div className="mt-10 w-full md:max-w-md px-2">
        <LinkButton href="/jogo">Voltar para a home</LinkButton>
      </div>
    </div>
  );
}
