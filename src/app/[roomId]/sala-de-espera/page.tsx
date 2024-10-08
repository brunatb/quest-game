import { CopyRoomCode, WaitingPlayerContainer } from "./components";
import { GoBackButton } from "@/app/components";


export default function Page({ params }: Props) {
  return (
    <div className="space-y-4">
      <GoBackButton href="/">Voltar</GoBackButton>
      <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-2xl font-bold">
        Sala de espera
      </h1>
      <CopyRoomCode roomId={params.roomId} />
      <WaitingPlayerContainer />
    </div>
  );
}

type Props = {
  params: {
    roomId: string;
  };
};
