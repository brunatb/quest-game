import {
  CopyRoomCode,
  WaitingPlayerContainer,
  PoolingComponent,
} from "./components";
import { LogoQueston } from "@/app/components/logo";

export default function Page({ params }: Props) {
  return (
    <div className="space-y-4 font-poppins w-full">
      <PoolingComponent roomId={params.roomId} interval={5000} />
      <div className="flex flex-col items-center space-y-2">
        <LogoQueston />
      </div>
      <h1 className="font-[family-name:var(--font-geist-mono)] w-full text-center text-2xl font-bold">
        Sala de espera
      </h1>
      <div className="w-full flex flex-col items-center space-y-2 text-foreground pt-5">
        <CopyRoomCode roomId={params.roomId} />
      </div>
      <WaitingPlayerContainer />
    </div>
  );
}

type Props = {
  params: {
    roomId: string;
  };
};
