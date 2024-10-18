"use client";

import { Button, ErrorMessage, Input, UserIcon } from "@/app/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    <form
      className="w-full space-y-6 border border-foreground p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-2xl font-bold">
        Crie uma nova sala
      </h1>
      <p className="text-lg text-center">
        Insira os dados para criar uma nova sala e compartilhe com outro
        jogador!
      </p>
      <div className="w-full space-y-4">
        <div className="w-full">
          <Input
            icon={<UserIcon />}
            label="Apelido"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="joao_silva"
          />
        </div>
        <h2 className="w-full mb-2 text-lg text-gray-900 dark:text-white">
          Regras do Jogo
        </h2>
          <div className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <ul>
              <li className="space-y-4 text-white list-disc list-inside dark:text-white">15s</li>  
              <li className="space-y-4 text-white list-disc list-inside dark:text-white">6 Perguntas</li>  
              <li className="space-y-4 text-white list-disc list-inside dark:text-white">Apostas de 100 à 1</li>  
              <li className="space-y-4 text-white list-disc list-inside dark:text-white">Maior Pontuação Vence</li>  
            </ul> 
        </div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-fit">
          <Button variant="light" type="submit">
            Criar sala
          </Button>
        </div>
      </div>
    </form>
  );
}
