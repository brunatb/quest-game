"use client";

import { GameBets } from "@/shared/protocols";
import { createContext, useContext, useEffect, useState } from "react";
import { useGame } from "./game-context";

export const BetContext = createContext<BetContextProps>({
  setBet: () => {},
  isLoading: true,
});

export type BetContextProps = {
  gameBets?: GameBets;
  setBet: (value: number) => void;
  isLoading: boolean;
  currentBet?: number;
};

export function BetProvider({ children, gameId }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [gameBets, setGameBets] = useState<GameBets>();
  const [currentBet, setCurrentBet] = useState<number>();
  const { question } = useGame();

  function setBet(value: number) {
    if (!gameBets) return;
    if (gameBets.bets[value] === false) {
      return;
    }

    const newBets = {
      ...gameBets,
      questionsBet: {
        ...gameBets.questionsBet,
        [question.id]: value,
      },
      bets: {
        ...gameBets.bets,
        [value]: !gameBets.bets[value],
      },
    };

    setGameBets(newBets);
    updateGameBetsLocalStorage(newBets);
    setCurrentBet(value);
  }

  function updateGameBetsLocalStorage(gb: GameBets) {
    localStorage.setItem("bets", JSON.stringify(gb));
  }

  function clearGameBets() {
    localStorage.removeItem("bets");
    setGameBets(undefined);
  }

  useEffect(() => {
    const initBets = {
      id: gameId,
      questionsBet: null,
      bets: {
        10: true,
        15: true,
        20: true,
        25: true,
        50: true,
        100: true,
      },
    };

    const bets = localStorage.getItem("bets");
    if (bets) {
      if (gameId === JSON.parse(bets).id) {
        setGameBets(JSON.parse(bets));
      } else {
        clearGameBets();
        setGameBets({
          id: gameId,
          questionsBet: null,
          bets: {
            10: true,
            15: true,
            20: true,
            25: true,
            50: true,
            100: true,
          },
        });
        updateGameBetsLocalStorage(initBets);
      }
    } else {
      setGameBets(initBets);
      updateGameBetsLocalStorage(initBets);
    }

    setIsLoading(false);
  }, [gameId]);

  useEffect(() => {
    if (gameBets) {
      localStorage.setItem("bets", JSON.stringify(gameBets));
    }
  }, [gameBets]);

  return (
    <BetContext.Provider value={{ gameBets, setBet, currentBet, isLoading }}>
      {children}
    </BetContext.Provider>
  );
}

type Props = {
  children: React.ReactNode;
  gameId: string;
};

export const useBet = () => {
  return useContext(BetContext);
};
