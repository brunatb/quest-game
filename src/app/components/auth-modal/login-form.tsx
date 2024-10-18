"use client";

import {
  Button,
  ErrorMessage,
  Input,
  useAuth,
  UserIcon,
} from "@/app/components";
import { login } from "@/shared/auth";
import { User } from "@/shared/protocols";
import { useState } from "react";
import { toast } from "react-toastify";

export function LoginForm({ onToggle }: Props) {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();
  const { populateUser } = useAuth();

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
    toast.success("Login realizado com sucesso!");
    setLoading(false);
  }

  return (
    <form
      className="w-full space-y-6 border border-foreground p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-2xl font-bold">
        Login
      </h1>
      <p className="text-lg text-center">Faça login para jogar!</p>
      <div className="w-full space-y-4">
        <div className="w-full">
          <Input
            icon={<UserIcon />}
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="joao_silva"
          />
        </div>
        <div className="w-full">
          <Input
            label="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
        </div>
        <ErrorMessage>{error}</ErrorMessage>
      </div>
      <div className="w-full">
        <div className="w-full">
          <Button variant="light" type="submit" className="w-full">
            {loading ? "Carregando..." : "Entrar"}
          </Button>
        </div>
        <button
          onClick={onToggle}
          className="w-full text-center text-sm text-foreground underline mt-2"
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
