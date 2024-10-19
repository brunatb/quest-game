"use client";
import Image from "next/image";
import { PiCoinsFill } from "react-icons/pi";

import { useAuth } from "@/app/components";
import { DrumRoll } from "./drum-roll";
import { LinkButton } from "@/app/components/link-button";

export function Winner() {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <DrumRoll />;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen-minus-200 font-poppins">
      <div className="animate-jump-in animate-once animate-duration-1000 animate-ease-out w-full flex flex-col items-center">
        <h1 className="my-8 text-2xl">Parabéns, {user?.username}!</h1>
        <Image
          src="/images/trophy.webp"
          width={150}
          height={150}
          alt="Trophy"
        />
      </div>
      <div className="w-full mt-8 flex flex-col items-center animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-out">
        <h2 className="text-xl text-center mb-6">Você venceu a partida!</h2>
        <div className="flex flex-col items-center border-2 py-2 px-4 rounded-lg">
          <p>Sua recompensa</p>
          <div className="flex-col items-center justify-center flex">
            <PiCoinsFill size={46} className="text-yellow-500" />
            <p className="text-lg">200</p>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full md:max-w-md">
        <LinkButton href="/">Voltar para a home</LinkButton>
      </div>
    </div>
  );
}
