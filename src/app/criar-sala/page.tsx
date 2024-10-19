import { LogoQueston } from "../components/logo";
import { CreateRoomForm } from "./components";
export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4 w-full ">
      <div className="mt-10 mb-2">
        <LogoQueston />
      </div>
      <div className="w-full lg:max-w-md text-left">
        <CreateRoomForm />
      </div>
    </div>
  );
}

//<CreateRoomForm />
