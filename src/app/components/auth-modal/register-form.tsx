"use client";

import { Button, ErrorMessage, Input, useAuth } from "@/app/components";
import { login, registration } from "@/shared/auth";
import { User } from "@/shared/protocols";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLock, FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export function RegistrationForm({ onToggle }: Props) {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();
  const { populateUser } = useAuth();
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    if (!username) {
      setError("O campo username é obrigatório");
      return;
    }

    if (!password) {
      setError("O campo senha é obrigatório");
      return;
    }

    if (!confirmPassword) {
      setError("O campo confirmar senha é obrigatório");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    const response = await registration(username, password);
    const errorMessage = response?.error;

    if (errorMessage) {
      setError(errorMessage);
      setLoading(false);
      return;
    }

    const loginResponse = await login(username, password);
    const loginErrorMessage =
      "error" in loginResponse ? loginResponse.error : undefined;

    if (loginErrorMessage) {
      setError(loginErrorMessage);
      setLoading(false);
      return;
    }

    populateUser(loginResponse as User);
    toast.success("Cadastro e login realizados com sucesso!", {
      autoClose: 1500,
      onClose: () => {
        toast.success("Você ganhou 200 moedas de boas-vindas! 🪙", {
          autoClose: 1000,
          onClose: () => router.push("/jogo"),
        });
      },
    });
    setLoading(false);
  }

  return (
    <form
      className="font-poppins flex flex-col gap-1 bg-white rounded-lg p-6 text-blue-950 w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="font-extrabold text-2xl mt-4 w-full text-center">
        Cadastre-se
      </h1>
      <p className="text-lg text-center my-2">Faça o cadastro para jogar!</p>
      <div className="w-full space-y-4">
        <div className="w-full">
          <Input
            icon={<FaRegUserCircle size={24} className="text-blue-950" />}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="w-full">
          <Input
            icon={<FaLock size={20} className="text-blue-950" />}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Senha"
          />
        </div>
        <div className="w-full">
          <Input
            icon={<FaLock size={20} className="text-blue-950" />}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            placeholder="Confirmar senha"
          />
        </div>
        <ErrorMessage>{error}</ErrorMessage>
      </div>
      <div className="w-full">
        <div className="w-full">
          <Button type="submit">{loading ? "Carregando..." : "Entrar"}</Button>
        </div>
        <button
          onClick={onToggle}
          className="w-full text-center text-sm underline mt-4"
        >
          Já tem uma conta? Faça login
        </button>
      </div>
    </form>
  );
}

type Props = {
  onToggle: () => void;
};
