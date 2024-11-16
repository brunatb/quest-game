"use client";

import { useState } from "react";
import { AuthModal } from "../../auth-modal";
import { FiLogIn } from "react-icons/fi";

export function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-end">
      <button
        className="border-2 border-[##6200e1] rounded-lg flex items-center gap-2 px-4 md:py-2 mt-4"
        onClick={() => setOpen(true)}
      >
        <FiLogIn className="text-[##6200e1] font-bold" size={20} />
        <span className="text-[##6200e1] font-bold">Entrar</span>
      </button>
      {open && <AuthModal />}
    </div>
  );
}
