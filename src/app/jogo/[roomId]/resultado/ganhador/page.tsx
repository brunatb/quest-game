import { Game } from "@/shared/protocols";
import { Winner } from "../components";
import { redirect } from "next/dist/client/components/navigation";

export default async function Page({ params }: Props) {
  const game = await getGame(params.roomId);

  return <Winner game={game} />;
}

type Props = {
  params: {
    roomId: string;
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
