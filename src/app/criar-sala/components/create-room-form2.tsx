"use client";

import { FaRegUserCircle } from "react-icons/fa";
import { InputAlt } from "@/app/components/input-alt";
import "@fontsource/poppins/700.css"; 
import { LinkButton } from "@/app/components/link-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ErrorMessage } from "@/app/components";



export function CreateRoomForm() {

    const [nickname, setNickname] = useState<string>();
    const [errorMessage, setErrorMessage] = useState<string>();
    const router = useRouter();
  
    function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
  
      if (!nickname) {
        setErrorMessage("O campo apelido é obrigatório");
        return;
      }
  
      const randomIdAlphanumeric = Math.random().toString(36).slice(2)
      router.push(`/${randomIdAlphanumeric}/sala-de-espera`);
    }


    return (
    <div className="font-poppins font-extrabold flex flex-col gap-16 items-center p-4">
      <form className="font-poppins font-extrabold flex flex-col text-center gap-3 bg-white border-foreground rounded-lg p-4"
      onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-blue-950">Crie uma nova sala</h1>
        <p className="text-xl text-blue-950">
          Insira os dados para criar uma sala e compartilhe o com outro jogador!
        </p>
          <div className="flex flex-col gap-4 p-2 w-full">
            <p className="font-extrabold text-left text-blue-950 text-2xl">Apelido</p>
            <InputAlt
              icon={<FaRegUserCircle size={24} />}
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              placeholder="Insira seu apelido"
            />
          </div>
          <h1 className="text-blue-950 text-left text-2xl ">
            Regras do Jogo
          </h1>
          <ul className="text-left text-xl">
          <li className="list-disc list-inside dark:text-black">15s</li>  
              <li className="list-disc list-inside dark:text-black">6 Perguntas</li>  
              <li className="list-disc list-inside dark:text-black">Apostas de 100 à 1</li>  
              <li className="list-disc list-inside dark:text-black">Maior Pontuação Vence</li> 
          </ul>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </form>
        <LinkButton onClick={handleSubmit}>CRIAR SALA</LinkButton>
      </div>
    );

}