"use client";

import { useGame } from "./context";

export function SquarePoint({ player }: Props) {
  const { points } = useGame();
  return (
    <div className="text-sm lg:text-base">
      Pontos
      <div className=" flex items-center justify-center shadow-md bg-white px-2 mt-1 rounded-xl lg:text-xl text-lg text-black">
        {player === 1 ? points.playerOnePoints : points.playerTwoPoints}
      </div>
    </div>
  );
}

type Props = {
  player: 1 | 2;
};
