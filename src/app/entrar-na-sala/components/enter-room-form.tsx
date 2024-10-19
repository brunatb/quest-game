"use client";

import {
  Button,
  ErrorMessage,
  GoBackButton,
  Input,
  useAuth,
} from "@/app/components";
import { AuthModal } from "@/app/components/auth-modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCodeOff } from "react-icons/md";

export function EnterRoomForm() {
  const [roomCode, setRoomCode] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const router = useRouter();
  const { user, isLoading } = useAuth();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!roomCode) {
      setErrorMessage("O campo código da sala é obrigatório");
      return;
    }

    router.push(`/${roomCode}/sala-de-espera`);
  }

  return (
    <>
      <form
        className="font-poppins flex flex-col text-center gap-1 bg-white rounded-lg p-6 text-blue-950 w-full"
        onSubmit={handleSubmit}
      >
        <GoBackButton href="/">Voltar</GoBackButton>
        <h1 className="font-extrabold text-2xl mt-4">Entre em uma sala</h1>
        <p className="text-md leading-5 my-2">
          Insira os dados para criar uma sala e compartilhe o com outro jogador!
        </p>
        <div className="w-full space-y-2 mt-4">
          <Input
            icon={<FaRegUserCircle size={24} className="text-blue-950" />}
            value={isLoading ? "Carregando..." : user?.username}
            disabled
            placeholder="Username"
          />
          <Input
            icon={<MdCodeOff size={24} className="text-blue-950" />}
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
            placeholder="Insira o código da sala"
          />

          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
        <div className="w-full mt-4">
          <Button type="submit">Entrar na sala</Button>
        </div>
      </form>
      {!isLoading && !user && <AuthModal />}
    </>
  );
}
