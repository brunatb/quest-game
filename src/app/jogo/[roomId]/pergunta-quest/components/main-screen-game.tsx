"use client";

import { useRouter } from "next/navigation";
import { ButtonAlternative } from "./button-alternative";
import { Game } from "@/shared/protocols";
import { toast } from "react-toastify";
import { useAuth } from "@/app/components";
import { useBet, useGame } from "./context";
import { BetComponent } from "./bet-component";

export function ScreenQuestion({ roomId, questionId, game }: Props) {
  const { question } = useGame();
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const { isLoading: isLoadingBet, currentBet, gameBets } = useBet();

  if (!isLoading && !user) {
    toast.error("Você precisa estar logado para acessar esta página", {
      autoClose: 3000,
      onClose: () => router.push("/"),
    });
    return null;
  }

  if (isLoading || isLoadingBet) {
    return <div>Carregando...</div>;
  }

  const categoria = question.catText as keyof typeof CoresCategoria;

  const CoresCategoria: {
    [key in
      | "Artes"
      | "Ciencia"
      | "Mundo"
      | "Esporte"
      | "Sociedade"
      | "Variedades"]: string;
  } = {
    Artes: "#B91C1C",
    Ciencia: "#1E40AF",
    Mundo: "#B45309",
    Esporte: "#15803D",
    Sociedade: "#6B21A8",
    Variedades: "#C2410C",
  };

  const corPergunta = categoria ? CoresCategoria[categoria] : "#000000";

  if (
    !isLoadingBet &&
    (!gameBets?.questionsBet || !gameBets?.questionsBet![question.id])
  ) {
    return (
      <BetComponent question={question.text} questionColor={corPergunta} />
    );
  }

  return (
    <div className="bg-white w-full space-y-6 p-4 rounded-lg">
      <h2 className="text-center lg:text-2xl lg:mb-2 text-xl" style={{ color: corPergunta }}>
        {categoria}
      </h2>
      <div className="text-justify lg:text-xl text-lg mt-0" style={{ color: corPergunta }}>
        <p>{question.text}</p>
        <div className="flex flex-col lg:gap-4 gap-2 items-center mt-2">
          {question.answers.map((answer, index) => (
            <ButtonAlternative
              userId={user?.id as string}
              answer={answer}
              game={game}
              bet={currentBet!}
              key={index}
              roomId={roomId}
              questionId={questionId}
            ></ButtonAlternative>
          ))}
        </div>
      </div>
    </div>
  );
}

type Props = {
  roomId: string;
  questionId: number;
  game: Game;
};
