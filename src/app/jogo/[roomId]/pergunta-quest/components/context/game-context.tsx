"use client";
import dayjs from "dayjs";
import { Game, Question } from "@/shared/protocols";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GameContext = createContext<GameContextProps>({
  timer: 0,
  question: {} as Question,
  nextQuestion: () => {},
});

export type GameContextProps = {
  timer: number;
  question: Question;
  nextQuestion: () => void;
};

export default function GameProvider({ children, game }: Props) {
  const [timer, setTimer] = useState<number>(20);
  const [question, setQuestion] = useState<Question>();
  const router = useRouter();

  function getCurrentQuestion() {
    const localCurrentQuestionInfo = localStorage.getItem("currentQuestion");
    if (localCurrentQuestionInfo) {
      const currentQuestionInfo = JSON.parse(localCurrentQuestionInfo) as {
        gameId: number;
        questionId: number;
        statedAt: string;
      };

      if (currentQuestionInfo.gameId !== game.id) {
        setQuestion(game.questions[0]);
        setTimer(20);
        storeStartTime(game.questions[0].id, game.id);
        return;
      }

      // has passed more than 20 seconds
      if (dayjs().diff(dayjs(currentQuestionInfo.statedAt), "second") > 20) {
        const findIndex = game.questions.findIndex(
          (question) => question.id === currentQuestionInfo.questionId
        );

        if (findIndex === -1) {
          toast.error("Pergunta não encontrada");
          router.push("/");
          return;
        }

        if (findIndex === game.questions.length - 1) {
          router.push(`/jogo/${game.id}/resultado`);
          return;
        }

        setQuestion(game.questions[findIndex + 1]);
        setTimer(20);
        storeStartTime(game.questions[findIndex + 1].id, game.id);
      } else {
        const findIndex = game.questions.findIndex(
          (question) => question.id === currentQuestionInfo.questionId
        );

        if (findIndex === -1) {
          toast.error("Pergunta não encontrada");
          router.push("/");
          return;
        }

        setQuestion(game.questions[findIndex]);
        setTimer(
          20 - dayjs().diff(dayjs(currentQuestionInfo.statedAt), "second")
        );
      }
    } else {
      setQuestion(game.questions[0]);
      setTimer(20);
      storeStartTime(game.questions[0].id, game.id);
    }
  }

  function storeStartTime(questionId: number, gameId: number) {
    localStorage.setItem(
      "currentQuestion",
      JSON.stringify({
        questionId,
        statedAt: dayjs().toISOString(),
        gameId,
      })
    );
  }

  function nextQuestion() {
    if (!question) return;

    const findIndex = game.questions.findIndex((q) => q.id === question.id);

    if (findIndex === game.questions.length - 1) {
      router.push(`/jogo/${game.id}/resultado`);
      return;
    }

    setQuestion(game.questions[findIndex + 1]);
    setTimer(20);
    storeStartTime(game.questions[findIndex + 1].id, game.id);
  }

  useEffect(() => {
    getCurrentQuestion();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          nextQuestion();
          return 20;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [question]);

  return (
    <GameContext.Provider
      value={{
        timer,
        question: question as Question,
        nextQuestion,
      }}
    >
      {!question ? (
        <div className="w-full min-h-full flex justify-center items-center">
          <h1>Carregando...</h1>
        </div>
      ) : (
        children
      )}
    </GameContext.Provider>
  );
}

type Props = {
  game: Game;
  children: React.ReactNode;
};

export const useGame = () => {
  return useContext(GameContext);
};
