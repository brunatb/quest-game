import { LogoQueston } from "@/app/components/logo";
import { WaitingPlayerContainer } from "./components";
import { CopyRoomCode } from "./components";
export default function Page({ params }: Props) {
  return (
    <div className=" flex flex-col p-8">
     <LogoQueston/>
      <div className="space-y-8 font-poppins w-full text-center text-xl font-bold">
        <WaitingPlayerContainer/>
        <div className="p-4">
      <CopyRoomCode roomId={params.roomId} />
        </div>
      </div>
    </div>
  );
}

type Props = {
  params: {
    roomId: string;
  };
};
