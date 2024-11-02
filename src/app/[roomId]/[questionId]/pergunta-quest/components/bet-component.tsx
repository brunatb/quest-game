import { Button, Modal } from "@/app/components";
import { useBet } from "./context";
import { useState } from "react";

export function BetComponent({ question, questionColor }: Props) {
  const { setBet, isLoading, gameBets } = useBet();
  const [selected, setSelected] = useState<number>();

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
      <div className="font-poppins flex flex-col gap-1 bg-white rounded-lg p-6 w-full">
        <p className="text-2xl text-blue-950 ">Aposte suas Moedas!</p>

        <p
          className={`text-base font-sans font-normal mt-2`}
          style={{
            color: questionColor,
          }}
        >
          Pergunta: {question}
        </p>

        <p className="text-lg text-blue-950 my-2">
          Deseja apostar quantas moedas?
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
