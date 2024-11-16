"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/components";
import { Game } from "@/shared/protocols";

type PollingComponentProps = {
  interval: number;
  roomId: string;
};

export function PoolingComponent({ interval, roomId }: PollingComponentProps) {
  const router = useRouter();
  const { user, refreshCoins } = useAuth();

  useEffect(() => {
    if (!user) return;

    const startPolling = () => {
      const intervalId = setInterval(async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/searchGame/${roomId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.ok) {
            const game = (await response.json()) as Game;
            if (game.gameStatus === "FINISHED") {
              clearInterval(intervalId);
              await refreshCoins();
              if (game.userWinner === user.id) {
                router.push(`/jogo/${roomId}/resultado/ganhador`);
              } else {
                router.push(`/jogo/${roomId}/resultado/perdedor`);
              }
            }
          } else {
            console.error("Erro ao obter status do jogo");
          }
        } catch (error) {
          console.error("Erro ao obter status do jogo", error);
        }
      }, interval);

      return () => clearInterval(intervalId);
    };

    startPolling();
  }, [interval, roomId, user]);

  return null;
}
