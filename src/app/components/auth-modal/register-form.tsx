"use client";

import {
  Button,
  ErrorMessage,
  Input,
  useAuth,
  UserIcon,
} from "@/app/components";
import { login, registration } from "@/shared/auth";
import { User } from "@/shared/protocols";
import { useState } from "react";
import { toast } from "react-toastify";

export function RegistrationForm({ onToggle }: Props) {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
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
    toast.success("Cadastro e login realizados com sucesso!");
    setLoading(false);
  }

  return (
    <form
      className="w-full space-y-6 border border-foreground p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-2xl font-bold">
        Cadastre-se
      </h1>
      <p className="text-lg text-center">Faça o cadastro para jogar!</p>
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
        <div className="w-full">
          <Input
            label="Confirmar senha"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
          />
        </div>
        <ErrorMessage>{error}</ErrorMessage>
      </div>
      <div className="w-full">
        <div className="w-full">
          <Button variant="light" type="submit">
            {loading ? "Carregando..." : "Entrar"}
          </Button>
        </div>
        <button
          onClick={onToggle}
          className="w-full text-center text-sm text-foreground underline mt-2"
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
