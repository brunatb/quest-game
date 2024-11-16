"use client";
import { User as UserProtocol } from "@/shared/protocols";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { PiCoinsFill } from "react-icons/pi";
import { useAuth } from "../auth-context";
import { useState } from "react";
import { BuyCoinsModal } from "../../buy-coins-modal";

export function User({ user }: Props) {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-end items-center gap-4 md:pt-6 pt-3 fixed top-0 z-50 text-white">
      <div className="flex items-center gap-2">
        <FaUser className="font-bold" size={20} />
        <span className="font-bold">{user.username}</span>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <PiCoinsFill className="text-yellow-500 font-bold" size={20} />
        <span className="font-bold">{user.coins}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded-xl flex items-center gap-2 py-2 mr-4"
          onClick={() => logout()}
        >
          <FiLogOut className="font-bold" size={20} />
          <span className="font-bold">Sair</span>
        </button>
      </div>
      {open && <BuyCoinsModal onClose={() => setOpen(false)} />}
    </div>
  );
}

type Props = {
  user: UserProtocol;
};
