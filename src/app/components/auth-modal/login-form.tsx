"use client";

import {
  Button,
  ErrorMessage,
  Input,
  useAuth,
} from "@/app/components";
import { login } from "@/shared/auth";
import { User } from "@/shared/protocols";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLock, FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export function LoginForm({ onToggle }: Props) {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
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

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    const response = await login(username, password);
    const errorMessage = "error" in response ? response.error : undefined;

    if (errorMessage) {
      setError(errorMessage);
      setLoading(false);
      return;
    }

    populateUser(response as User);
    toast.success("Login realizado com sucesso!", {
      autoClose: 1500,
      onClose: () => router.push("/jogo"),
    });
    setLoading(false);
  }

  return (
    <form
      className="font-poppins flex flex-col gap-1 bg-white rounded-lg p-6 text-blue-950 w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="font-extrabold text-lg mt-4 w-full text-center">Login</h1>
      <p className="text-base text-center my-2">Faça login para jogar!</p>
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
        <ErrorMessage>{error}</ErrorMessage>
      </div>
      <div className="w-full">
        <div className="w-full">
          <Button type="submit" className="w-full">
            {loading ? "Carregando..." : "Entrar"}
          </Button>
        </div>
        <button
          onClick={onToggle}
          className="w-full text-center text-sm underline mt-4"
        >
          Ainda não tem uma conta? Cadastre-se
        </button>
      </div>
    </form>
  );
}

type Props = {
  onToggle: () => void;
};
