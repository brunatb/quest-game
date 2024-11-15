import { LinkButton } from "@/app/components/link-button";

export function Presenter() {
  return (
    <main className="flex flex-col items-center bg-background-game md:p-10 rounded-xl shadow-md shadow-black p-6">
      <p className="font-poppins font-extrabold md:text-2xl p-8 text-center lg:max-w-md text-lg">
        Comece um novo jogo ou entre em uma sala!
      </p>
      <div className="font-poppins flex flex-col items-center w-full lg:max-w-md space-y-4 my-2">
        <LinkButton href="/jogo/criar-sala">CRIAR UMA SALA</LinkButton>
        <LinkButton href="/jogo/entrar-na-sala">ENTRAR EM UMA SALA</LinkButton>
      </div>
    </main>
  );
}
