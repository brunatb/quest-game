import { useState } from "react";
import { Modal } from "../modal";
import { IoMdClose } from "react-icons/io";
import { ChooseCoins } from "./choose-coins";

export function BuyCoinsModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [coins, setCoins] = useState<number>();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log({ name, creditCard, cvv, expirationDate, coins });
  }

  return (
    <Modal>
      <div className="w-full bg-white p-4 rounded-lg">
        <div className="flex justify-end">
          <button className="text-blue-950 text-lg" onClick={onClose}>
            <IoMdClose className="text-3xl" />
          </button>
        </div>
        <h1 className="text-xl font-poppins text-blue-950 text-center mt-3 mb-5">Compre mais moedas</h1>
        <ChooseCoins onSelect={(value) => setCoins(value)} />
      </div>
    </Modal>
  );
}

type Props = {
  onClose: () => void;
};
