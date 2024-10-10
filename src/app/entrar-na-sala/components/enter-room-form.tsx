"use client";

import { Button, ErrorMessage, Input, useAuth } from "@/app/components";
import { useState } from "react";

export function EnterRoomForm() {
  const [roomCode, setRoomCode] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { user } = useAuth();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!roomCode) {
      setErrorMessage("O campo código da sala é obrigatório");
      return;
    }

    // Create room logic here
  }

  return (
    <form
      className="w-full space-y-6 border border-foreground p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-2xl font-bold">
        Entrar em uma sala
      </h1>
      <p className="text-lg text-center">
        Já tem um código de sala? <br></br>Insira o código da sala abaixo para
        entrar!
      </p>
      <div className="w-full space-y-4">
        <div className="w-full">
          <label className="text-foreground mb-2 inline-block font-semibold">
            Usuário: {user?.username}
          </label>
        </div>
        <div className="w-full">
          <Input
            label="Código da sala"
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
            placeholder="abc123"
          />
        </div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-fit">
          <Button variant="light" type="submit">
            Entrar na sala
          </Button>
        </div>
      </div>
    </form>
  );
}
