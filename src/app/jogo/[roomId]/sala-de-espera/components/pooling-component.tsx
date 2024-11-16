"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type PollingComponentProps = {
  interval: number;
  roomId: string;
};

export function PoolingComponent({ interval, roomId }: PollingComponentProps) {
  const router = useRouter();

  useEffect(() => {
    const startPolling = () => {
      const intervalId = setInterval(async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/quest/v1/canStartGame/${roomId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.ok) {
            clearInterval(intervalId);
            // Redirecionar para a página de pergunta com o resultado da resposta
            router.push(`/jogo/${roomId}/pergunta-quest`);
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
  }, [interval, roomId]);

  return null;
}
