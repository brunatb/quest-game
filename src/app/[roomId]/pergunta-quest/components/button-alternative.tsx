"use client";

import { Answer, Game } from "@/shared/protocols";
import { useState } from "react";
import { useGame } from "./context";

export function ButtonAlternative({
  game,
  answer,
  userId,
  bet,
}: Props) {
  const { nextQuestion } = useGame();
  const [showResult, setShowResult] = useState(false);

  async function handleClick() {
    setShowResult(true);
    if (answer.correct) {
      if (userId === game.idPlayerOne) {
        if (game.pointPlayerOne === null) {
          game.pointPlayerOne = bet;
        }

        game.pointPlayerOne += bet;
      } else {
        if (game.pointPlayerTwo === null) {
          game.pointPlayerTwo = bet;
        }

        game.pointPlayerTwo += bet;
      }
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/saveGame`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gameData: game }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save game");
      }

      // go to next question after 2 seconds
      setTimeout(() => {
        nextQuestion();
        setShowResult(false);
      }, 2000);
    } catch (error) {
      console.error("Error saving game:", error);
    }
  }

  return (
    <button
      className={`w-full border-2 shadow-sm shadow-gray-500 py-3 px-2 rounded-[10px] text-xl ${
        showResult
          ? `${answer.correct ? "bg-green-200" : "bg-red-200"}`
          : "bg-white"
      }`}
      onClick={handleClick}
    >
      {answer.text}
    </button>
  );
}

type Props = {
  game: Game;
  answer: Answer;
  roomId: string;
  questionId: number;
  userId: string;
  bet: number;
};
