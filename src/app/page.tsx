import { LinkButton } from "./components/link-button";
import { LogoQueston } from "./components/logo";
import "@fontsource/poppins/700.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen bg-background-game overflow-hidden">
      <div className="mt-10">
        <LogoQueston />
      </div>
      <p className="font-poppins font-extrabold text-2xl p-8 text-center mt-8 lg:max-w-md">
        Comece um novo jogo ou entre em uma sala!
      </p>
      <div className="font-poppins flex flex-col items-center w-full lg:max-w-md space-y-4 mt-8">
        <LinkButton href="/criar-sala">CRIAR UMA SALA</LinkButton>
        <LinkButton href="/entrar-na-sala">ENTRAR EM UMA SALA</LinkButton>
      </div>
    </main>
  );
}
