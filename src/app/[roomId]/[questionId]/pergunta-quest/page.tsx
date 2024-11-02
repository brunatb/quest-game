import { Game } from "@/shared/protocols";
import { Avatar } from "./components/avatar-user";
import { ScreenQuestion } from "./components/main-screen-game";
import { SquarePoint } from "./components/square-point";
import { Timer } from "./components/square-timer";
import { redirect } from "next/navigation";
import { BetProvider } from "./components/context";
import { LogoQueston } from "@/app/components/logo";

export default async function Page({ params }: Props) {
  const game = await getGame(params.roomId);

  return (
    <BetProvider gameId={params.roomId}>
      <div className="font-[family-name:var(--font-geist-mono)] text-center text-4xl font-bold">
        <div className="w-full flex justify-center">
          <LogoQueston />
        </div>
        <div className="w-full space-y-4 rounded-xl flex flex-col">
          <ScreenQuestion
            roomId={params.roomId}
            questionId={params.questionId}
            game={game}
          />
          <div className="flex justify-between p-4">
            <div className="flex flex-row gap-2 ">
              <Avatar
                imgSrc="/images/Avatar1.png"
                imgClassName="ring-blue-300"
                playerName="Jogador 1"
              />
              <SquarePoint points={game.pointPlayerOne || 0} />
            </div>
            <Timer />
            <div className="flex flex-row gap-2">
              <SquarePoint points={game.pointPlayerTwo || 0} />
              <Avatar
                imgSrc="/images/avatar5.png"
                imgClassName="ring-red-300"
                playerName="Jogador 2"
              />
            </div>
          </div>
        </div>
      </div>
    </BetProvider>
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
