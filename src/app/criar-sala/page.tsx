import { GoBackButton } from "../components";
import { CreateRoomForm } from "./components";

export default function Page() {
  return (
    <div className="max-w-full lg:w-1/3 space-y-2">
      <GoBackButton href="/">Voltar</GoBackButton>
      <CreateRoomForm />
    </div>
  );
}
