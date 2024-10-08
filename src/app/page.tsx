import { Link } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-4xl font-bold">
        Quest
      </h1>
      <p className="text-lg">Comece um novo jogo ou entre em uma sala!</p>
      <div className="w-full space-y-4">
        <Link variant="light" href="/criar-sala">
          Novo jogo
        </Link>
        <Link href="/entrar-na-sala">Entrar em uma sala</Link>
      </div>
    </main>
  );
}
