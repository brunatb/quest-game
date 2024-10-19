"use client";

import { Button, ErrorMessage, GoBackButton, Input } from "@/app/components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

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

    const randomIdAlphanumeric = Math.random().toString(36).slice(2);
    router.push(`/${randomIdAlphanumeric}/sala-de-espera`);
  }

  return (
    <form
      className="font-poppins flex flex-col text-center gap-1 bg-white rounded-lg p-6 text-blue-950 w-full"
      onSubmit={handleSubmit}
    >
      <GoBackButton href="/">Voltar</GoBackButton>
      <h1 className="font-extrabold text-2xl mt-4">Crie uma nova sala</h1>
      <p className="text-md leading-5 my-2">
        Insira os dados para criar uma nova sala e compartilhe com outro
        jogador!
      </p>
      <div className="w-full space-y-4 mt-4">
        <Input
          icon={<FaRegUserCircle size={24} className="text-blue-950" />}
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Username"
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>

      <div className="w-full mt-4">
        <Button type="submit">Entrar na sala</Button>
      </div>
    </form>
  );
}
