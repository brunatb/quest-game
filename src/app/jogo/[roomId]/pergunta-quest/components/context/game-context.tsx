"use client";
import dayjs from "dayjs";
import { Game, Question } from "@/shared/protocols";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/app/components";

export const GameContext = createContext<GameContextProps>({
  timer: 0,
  question: {} as Question,
  nextQuestion: () => {},
  points: {
    playerOnePoints: 0,
    playerTwoPoints: 0,
  },
  eliminateTwoAlternatives: () => Promise.resolve(),
  isBonusUsed: false,
});

export type GameContextProps = {
  timer: number;
  question: Question;
  nextQuestion: () => void;
  points: {
    playerOnePoints: number;
    playerTwoPoints: number;
  };
  eliminateTwoAlternatives: () => Promise<void>;
  isBonusUsed: boolean;
};

export default function GameProvider({ children, game }: Props) {
  const [timer, setTimer] = useState<number>(20);
  const [question, setQuestion] = useState<Question>();
  const [points, setPoints] = useState({
    playerOnePoints: game.pointPlayerOne || 0,
    playerTwoPoints: game.pointPlayerTwo || 0,
  });
  const [useBonus, setUseBonus] = useState(false);

  const router = useRouter();
  const { user, refreshCoins } = useAuth();

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
          router.push(`/jogo/${game.idFormat}/resultado`);
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

  async function getPoints() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/points/${game.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      toast.error("Erro ao obter pontos");
      return;
    }

    const data = (await response.json()) as {
      pointPlayerOne: number;
      pointPlayerTwo: number;
    };

    setPoints({
      playerOnePoints: data.pointPlayerOne,
      playerTwoPoints: data.pointPlayerTwo,
    });
  }

  async function finishGame() {
    if (!user) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/finishGame/${user?.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      }
    );

    if (!response.ok) {
      toast.error("Erro ao finalizar o jogo", {
        onClose: () => router.push("/jogo"),
      });
      return;
    }

    router.push(`/jogo/${game.id}/resultado`);
  }

  async function eliminateTwoAlternatives() {
    if (!question || !user) return;

    if (user.coins < 20) {
      toast.error("Você não tem moedas suficientes para eliminar alternativas");
      return;
    }

    if (useBonus) {
      toast.error("Você já eliminou duas alternativas nesta pergunta");
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wallet/coins/spend`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: user.id,
          coins: 20,
        }),
      }
    );

    if (!response.ok) {
      toast.error("Erro ao comprar o bônus");
      return;
    }

    setUseBonus(true);
    const wrongAlternatives = question.answers.filter(
      (answer) => !answer.correct
    );

    const shuffledAlternatives = wrongAlternatives.sort(
      () => Math.random() - 0.5
    );
    const alternativesToRemove = shuffledAlternatives
      .slice(0, 2)
      .map((a) => a.id);
    const newQuestion = {
      ...question,
      answers: question.answers.filter(
        (answer) => !alternativesToRemove.includes(answer.id)
      ),
    };

    setQuestion(newQuestion);
    await refreshCoins();
  }

  function nextQuestion() {
    if (!question) return;

    const findIndex = game.questions.findIndex((q) => q.id === question.id);

    if (findIndex === game.questions.length - 1) {
      finishGame();
      return;
    }

    getPoints();
    setQuestion(game.questions[findIndex + 1]);
    setTimer(20);
    setUseBonus(false);
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
        points,
        eliminateTwoAlternatives,
        isBonusUsed: useBonus,
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
