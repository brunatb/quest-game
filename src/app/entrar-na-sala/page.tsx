import { GoBackButton } from "../components";
import { LogoQueston } from "../components/logo";
import { EnterRoomForm } from "./components";

export default function Page() {
  return (
    <div className="flex flex-col items-center max-w-full lg:w-1/3 space-y-2">
      <LogoQueston />
       <div className="w-full text-left">
        <GoBackButton href="/">Voltar</GoBackButton>
      </div>
      <EnterRoomForm />
    </div>
  );
}
