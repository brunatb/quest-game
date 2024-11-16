"use client";
import { useState } from "react";
import { LoginForm } from "./components/auth-modal/login-form";
import { RegistrationForm } from "./components/auth-modal/register-form";
import { useAuth } from "./components";


export function AuthComponent() {
  const { isLoading, user } = useAuth();
  const [authForm, setAuthForm] = useState<"login" | "register">("login");
  if (isLoading) return <div className="text-white">Carregando...</div>;
  if (!isLoading && user) {
    return;
  }

  return (
    <div className="lg:px-12 px-2 w-full">
      {authForm === "login" ? (
        <LoginForm onToggle={() => setAuthForm("register")} />
      ) : (
        <RegistrationForm onToggle={() => setAuthForm("login")} />
      )}
    </div>
  );
}
