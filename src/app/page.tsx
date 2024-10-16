import { LinkButton } from "./components/linkButton";
import { LogoQueston } from "./components/logo";
import "@fontsource/poppins/700.css"; 


export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center items-center sm:items-start min-h-screen min-w-screen bg-background-game overflow-hidden">
    <LogoQueston/> 
      <p className="font-poppins text-lg pl-6 ">Comece um novo jogo ou entre em uma sala!</p>
      <div className="font-poppins flex flex-col items-center justify-center w-full space-y-4">
        <LinkButton href="/criar-sala">
        LOGIN
        </LinkButton>
        <LinkButton href="/entrar-na-sala">
        ENTRAR EM UMA SALA
        </LinkButton>
      </div>
    </main>
  );
}
