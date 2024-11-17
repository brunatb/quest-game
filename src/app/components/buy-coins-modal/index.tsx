import { useState } from "react";
import Cards from "react-credit-cards-2";
import { Modal } from "../modal";
import { IoMdClose } from "react-icons/io";
import { ChooseCoins } from "./choose-coins";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Input } from "../input";
import { Button } from "../button";
import { useAuth } from "../contexts";
import { toast } from "react-toastify";

export function BuyCoinsModal({ onClose }: Props) {
  const [coins, setCoins] = useState<number>();
  const [card, setCard] = useState<{
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    focus: "name" | "number" | "expiry" | "cvc" | undefined;
  }>({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: undefined,
  });
  const [loading, setLoading] = useState(false);
  const { refreshCoins, user } = useAuth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!user) return;
    if (!coins) return;
    if (!card.number || !card.expiry || !card.cvc || !card.name) {
      toast.error("Preencha todos os campos");
      return;
    }

    setLoading(true);

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wallet/coins/buy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coins,
        idUser: user?.id,
      }),
    });

    await refreshCoins();
    setLoading(false);

    toast.success("Compra realizada com sucesso!", {
      // close on 2 seconds
      autoClose: 2000,
      onClose: onClose,
    });
  }

  const isDisabled =
    !coins ||
    loading ||
    !card.name ||
    !card.number ||
    !card.expiry ||
    !card.cvc;

  return (
    <Modal>
      <div className="w-full bg-white p-4 rounded-lg">
        <div className="flex justify-end">
          <button className="text-blue-950 text-lg" onClick={onClose}>
            <IoMdClose className="text-3xl" />
          </button>
        </div>
        <h1 className="text-xl font-poppins text-blue-950 text-center mt-3 mb-5">
          Compre mais moedas
        </h1>
        <ChooseCoins onSelect={(value) => setCoins(value)} />
        <div className="my-5">
          <Cards
            number={card.number}
            expiry={formatExpirationDate(card.expiry)}
            cvc={card.cvc}
            name={card.name}
            focused={card.focus}
          />

          <form onSubmit={handleSubmit} className="my-4 text-blue-950">
            <Input
              label="Número do cartão"
              value={card.number}
              onChange={(e) => {
                let result = e.target.value.replace(/\D/g, "");

                result = result
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()
                  .slice(0, 19);

                setCard({ ...card, number: result });
              }}
              onFocus={() => setCard({ ...card, focus: "number" })}
              placeholder="0000 0000 0000 0000"
              inputMode="numeric"
              type="tel"
            />
            <div className="mt-2">
              <Input
                label="Nome do titular"
                value={card.name}
                onChange={(e) => setCard({ ...card, name: e.target.value })}
                onFocus={() => setCard({ ...card, focus: "name" })}
                placeholder="Joao Silva"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 my-4">
              <div>
                <Input
                  label="Expiração"
                  value={formatExpirationDate(card.expiry)}
                  onChange={(e) => {
                    let result = e.target.value.replace(/\D/g, ""); // remove non-numeric characters that the user might have typed
                    // store value as YYYY-MM
                    if (result.length === 4) {
                      const month = result.slice(0, 2);
                      const year = `20${result.slice(2, 4)}`;
                      result = `${year}-${month}`;
                    }
                    setCard({ ...card, expiry: result });
                  }}
                  onFocus={() => setCard({ ...card, focus: "expiry" })}
                  inputMode="numeric"
                  placeholder="MM/AA"
                  type="tel"
                  maxLength={5}
                  lang="pt-BR"
                />
              </div>
              <div>
                <Input
                  label="CVC"
                  value={card.cvc}
                  onChange={(e) => setCard({ ...card, cvc: e.target.value })}
                  onFocus={() => setCard({ ...card, focus: "cvc" })}
                  inputMode="numeric"
                  placeholder="000"
                  type="tel"
                  maxLength={4}
                />
              </div>
            </div>
            <div className="w-full font-bold">
              <Button type="submit" disabled={isDisabled}>
                Finalizar compra
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

type Props = {
  onClose: () => void;
};

function formatExpirationDate(value: string) {
  if (value.length === 7) {
    const values = value.split("-");
    const month = values[1];
    const year = values[0].slice(2, 4);

    return `${month}/${year}`;
  }

  return value;
}
