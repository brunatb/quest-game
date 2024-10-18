import { LinkButton } from "./components/link-button";
import { LogoQueston } from "./components/logo";
import "@fontsource/poppins/700.css"; 


export default function Home() {
  return (
    <main className="flex flex-col gap-14 justify-center items-center  min-h-screen min-w-screen bg-background-game overflow-hidden">
    <LogoQueston/> 
      <p className="font-poppins font-extrabold text-2xl p-8 text-center">Comece um novo jogo ou entre em uma sala!</p>
      <div className="font-poppins flex flex-col gap-6 p-4 items-center justify-center w-full max-h-screen space-y-4 ">
        <LinkButton  href="/criar-sala">
        LOGIN
        </LinkButton>
        <LinkButton href="/entrar-na-sala">
        ENTRAR EM UMA SALA
        </LinkButton>
      </div>
    </main>
  );
}
