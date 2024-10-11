import { GoBackButton } from "@/app/components/go-back-button";
import { QuestScreen } from "./components/quest-screen"; // Corrige o caminho do componente

export default function Page() {
    return (
        <div className="max-w-full lg:w-1/3 space-y-2">
            <GoBackButton href="/">Voltar</GoBackButton>
            <QuestScreen />
        </div>
    );
}
