import { GoBackButton } from "@/app/components";
import { DrawingPlayerContainer } from "./components/drawing-player-container";

export default function Page(){
    return(
        <div>
            <GoBackButton href="/">Voltar</GoBackButton>
            <div className="w-full space-y-6 border border-foreground p-8 rounded-lg">
                    <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-4xl font-bold">
                        Quest
                    </h1>
                    <div className="bg-white flex flex-col items-center rounded-lg p-6 w-[48rem] h-[32rem]">
                        <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-4xl text-black font-bold">Categorias de Perguntas</h1>
                        <div className="border border-black rounded-lg p-6 w-[32rem] h-[16rem]">
                       
                        </div>
                    </div>
            </div>
            <DrawingPlayerContainer></DrawingPlayerContainer>
        </div>
    )
}