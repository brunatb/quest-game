import { useState } from "react";
import { Modal } from "../modal";
import { LoginForm } from "./login-form";
import { RegistrationForm } from "./register-form";

export function AuthModal() {
  const [authForm, setAuthForm] = useState<"login" | "register">("login");
  return (
    <Modal>
      {authForm === "login" ? (
        <LoginForm onToggle={() => setAuthForm('register')} />
      ) : (
        <RegistrationForm onToggle={() => setAuthForm("login")} />
      )}
    </Modal>
  );
}