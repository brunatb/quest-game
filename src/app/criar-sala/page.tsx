import { LogoQueston } from "../components/logo";
import { CreateRoomForm} from "./components/create-room-form2";
export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-background-game max-h-screen w-full ">
      <LogoQueston/>
      <div className="w-full text-left">
        <CreateRoomForm/>
      </div>
    </div>
  );
}

//<CreateRoomForm />