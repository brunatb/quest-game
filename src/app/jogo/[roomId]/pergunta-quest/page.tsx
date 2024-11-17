import { Game } from "@/shared/protocols";
import { Avatar } from "./components/avatar-user";
import { ScreenQuestion } from "./components/main-screen-game";
import { SquarePoint } from "./components/square-point";
import { Timer } from "./components/square-timer";
import { redirect } from "next/navigation";
import { BetProvider } from "./components/context";
import { LogoQueston } from "@/app/components/logo";
import GameProvider from "./components/context/game-context";
import { Bonus } from "./components/bonus";

export default async function Page({ params }: Props) {
  const game = await getGame(params.roomId);

  return (
    <GameProvider game={game}>
      <BetProvider gameId={params.roomId}>
        <div className="font-[family-name:var(--font-geist-mono)] text-center font-bold flex flex-col items-center">
          <div className="w-full md:flex justify-center  hidden">
            <LogoQueston />
          </div>
          <div className="w-full space-y-4 rounded-xl flex flex-col lg:w-[672px]">
            <div className="px-2">
              <ScreenQuestion
                roomId={params.roomId}
                questionId={params.questionId}
                game={game}
              />
            </div>
            <Bonus />
            <div className="flex justify-between px-4">
              <div className="flex flex-row gap-2">
                <Avatar
                  imgSrc="/images/peao-azul.png"
                  imgClassName="ring-blue-300"
                  playerName={game.playerOneUserName || "Jogador 1"}
                />
                <SquarePoint player={1} />
              </div>
              <Timer />
              <div className="flex flex-row gap-2">
                <SquarePoint player={2} />
                <Avatar
                  imgSrc="/images/peao-vermelho.png"
                  imgClassName="ring-red-300"
                  playerName={game.playerTwoUserName || "Jogador 2"}
                />
              </div>
            </div>
          </div>
        </div>
      </BetProvider>
    </GameProvider>
  );
}

type Props = {
  params: {
    roomId: string;
    questionId: number;
  };
};

async function getGame(roomId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/searchGame/${roomId}`
    );

    if (!response.ok) {
      throw new Error("Error fetching game data");
    }

    const data = (await response.json()) as Game;
    return data;
  } catch (error) {
    console.error("Error fetching game data:", error);
    redirect("/");
  }
}
