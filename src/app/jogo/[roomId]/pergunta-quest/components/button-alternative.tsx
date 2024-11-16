"use client";

import { Answer, Game } from "@/shared/protocols";
import { useState } from "react";
import { useGame } from "./context";
import { toast } from "react-toastify";

export function ButtonAlternative({ game, answer, userId, bet }: Props) {
  const { nextQuestion } = useGame();
  const [showResult, setShowResult] = useState(false);

  async function handleClick() {
    setShowResult(true);
    if (!userId) {
      toast.error("Você precisa estar logado para responder a pergunta");
    }

    try {
      if (answer.correct) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/points/${game.id}/${userId}/${bet}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to save game");
        }
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
      className={`w-full border-2 shadow-sm shadow-gray-400 py-3 px-2 rounded-lg lg:text-xl text-base ${
        showResult
          ? `${answer.correct ? "bg-green-200" : "bg-red-200"}`
          : "bg-white"
      }`}
      onClick={handleClick}
      disabled={showResult}
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
