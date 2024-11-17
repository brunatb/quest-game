"use client";

import { FaBomb } from "react-icons/fa";
import { useGame } from "./context";

export function Bonus() {
  const { eliminateTwoAlternatives, isBonusUsed } = useGame();
  return (
    <div className="w-full font-poppins text-white">
      <h4 className="text-lg mb-2">Bônus</h4>
      <div className="w-full">
        <button
          className={`bg-background-game py-2 px-3 rounded-xl  ${isBonusUsed ? "cursor-none opacity-65" : "cursor-pointer"}`}
          onClick={async () => {
            if (!isBonusUsed) {
              await eliminateTwoAlternatives();
            }
          }}
          disabled={isBonusUsed}
        >
          <div className="flex gap-1 items-center justify-start">
            <FaBomb
              className={`text-xl ${
                !isBonusUsed ? "text-white" : "text-gray-400"
              }`}
            />
            <span className="text-base leading-4">
              Eliminar duas alternativas (20 🪙)
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
