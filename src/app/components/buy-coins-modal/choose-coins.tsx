import { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { PiCoinFill, PiCoinsFill } from "react-icons/pi";

export function ChooseCoins({ onSelect }: Props) {
  const [selected, setSelected] = useState<number>();

  function onClick(value: number) {
    setSelected(value);
    onSelect(value);
  }

  return (
    <div className="w-full grid grid-cols-3 gap-2">
      <button
        className={`${
          selected === 500 ? "border-blue-950" : "border-gray-300"
        } p-4 flex flex-col justify-center items-center border-4 rounded-lg space-y-3`}
        onClick={() => onClick(500)}
      >
        <div className="text-yellow-500 text-4xl">
          <PiCoinFill />
        </div>
        <div>
          <p className="text-xl font-bold text-blue-950">500</p>
          <p className="text-gray-500">R$ 10,00</p>
        </div>
      </button>
      <button
        className={`${
          selected === 10000 ? "border-blue-950" : "border-gray-300"
        } p-4 flex flex-col justify-center items-center border-4 rounded-lg space-y-3`}
        onClick={() => onClick(10000)}
      >
        <div className="text-yellow-500 text-4xl">
          <PiCoinsFill />
        </div>
        <div>
          <p className="text-xl font-bold text-blue-950">10.000</p>
          <p className="text-gray-500">R$ 100,00</p>
        </div>
      </button>
      <button
        className={`${
          selected === 50000 ? "border-blue-950" : "border-gray-300"
        } p-4 flex flex-col justify-center items-center border-4 rounded-lg space-y-3`}
        onClick={() => onClick(50000)}
      >
        <div className="text-yellow-500 text-3xl">
          <FaCoins />
        </div>
        <div>
          <p className="text-xl font-bold text-blue-950">50.000</p>
          <p className="text-gray-500">R$ 200,00</p>
        </div>
      </button>
    </div>
  );
}

type Props = {
  onSelect: (value: number) => void;
};
