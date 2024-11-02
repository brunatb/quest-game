"use client";

import { Button, GoBackButton, Input, useAuth } from "@/app/components";
import { AuthModal } from "@/app/components/auth-modal";
import { Game } from "@/shared/protocols";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export function CreateRoomForm() {
  const [isLoadingRoom, setIsLoadingRoom] = useState(false);
  const router = useRouter();
  const { user, isLoading } = useAuth();

  async function handleSubmit(event: React.FormEvent) {
    setIsLoadingRoom(true);
    event.preventDefault();

    if (!user) {
      setIsLoadingRoom(false);
      return;
    }

    if (user.coins < 50) {
      setIsLoadingRoom(false);
      toast.error("Você precisa de pelo menos 50 moedas para jogar!");
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/createGame`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUser: user.id }),
      }
    );

    if (!response.ok) {
      setIsLoadingRoom(false);
      toast.error("Erro ao criar sala");
      return;
    }

    const result = (await response.json()) as Game;
    const { idFormat } = result;

    router.push(`/${idFormat}/sala-de-espera`);
  }

  return (
    <>
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
            value={isLoading ? "Carregando..." : user?.username}
            disabled
          />
        </div>

        <div className="w-full mt-4">
          <Button type="submit" disabled={isLoading || isLoadingRoom}>
            Criar sala
          </Button>
        </div>
      </form>
      {!isLoading && !user && <AuthModal />}
    </>
  );
}
