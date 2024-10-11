"use client";

import { Button, ErrorMessage, Input, UserIcon } from "@/app/components";
import { useState } from "react";

export function EnterRoomForm() {
  const [nickname, setNickname] = useState<string>();
  const [roomCode, setRoomCode] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!nickname) {
      setErrorMessage("O campo apelido é obrigatório");
      return;
    }

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
        Já tem um código de sala? <br></br>Insira o código da sala abaixo para entrar!
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
      <div className="w-full flex justify-center">
        <div className="flex w-fit gap-x-4">
          <Button variant="dark" type="submit">
            Login
          </Button>
          <Button variant="light" type="submit">
            Entrar na sala
          </Button>
        </div>
      </div>
    </form>
  );
}
