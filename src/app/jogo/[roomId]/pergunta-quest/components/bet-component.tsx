import { Button, Modal } from "@/app/components";
import { useBet, useGame } from "./context";
import { useState } from "react";
import { LuAlarmClock } from "react-icons/lu";

export function BetComponent({ question, questionColor }: Props) {
  const { setBet, isLoading, gameBets } = useBet();
  const [selected, setSelected] = useState<number>();
  const { timer } = useGame();

  if (isLoading && !gameBets) {
    return (
      <Modal>
        <div className="font-poppins flex flex-col gap-1 bg-white rounded-lg p-6 text-blue-950">
          Carregando...
        </div>
      </Modal>
    );
  }

  function handleClick() {
    if (!selected) return;

    setBet(selected);
  }

  return (
    <Modal>
      <div className="font-poppins flex flex-col gap-1 bg-white rounded-lg p-6 w-full z-10">
        <div className="w-full flex justify-end items-center">
          <LuAlarmClock
            className={`text-2xl text-blue-950 z-10 ${
              timer < 10 ? "animate-bounce" : ""
            }`}
          />
          <p
            className={`text-xl ml-2 ${
              timer < 10
                ? timer <= 5
                  ? "text-red-500"
                  : "text-yellow-500"
                : "text-blue-950"
            }`}
            >{timer} s</p>
            
        </div>
        <p className="text-2xl text-blue-950 ">Aposte na sua resposta!</p>
        <p
          className={`text-base font-sans font-normal mt-2`}
          style={{
            color: questionColor,
          }}
        >
          Pergunta: {question}
        </p>

        <p className="text-lg text-blue-950 my-2">
          Deseja apostar quanto?
        </p>
        <div className="grid grid-cols-3 text-blue-950 gap-4 mt-2 mb-4">
          {gameBets &&
            Object.keys(gameBets.bets).map((b, i) => (
              <button
                key={i}
                onClick={() => setSelected(Number(b))}
                disabled={gameBets?.bets[Number(b)] === false}
                className={`text-3xl rounded-lg border-2 p-2 ${
                  gameBets?.bets[Number(b)] === false ? "text-[#ededed]" : ""
                } ${selected === Number(b) ? "bg-green-200" : ""}`}
              >
                {b}
              </button>
            ))}
        </div>
        <div className="w-full text-blue-950">
          <Button onClick={handleClick}>Apostar</Button>
        </div>
      </div>
    </Modal>
  );
}

type Props = {
  question: string;
  questionColor: string;
};
