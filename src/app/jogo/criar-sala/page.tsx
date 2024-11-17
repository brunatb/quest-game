import { LogoQueston } from "../../components/logo";
import { CreateRoomForm } from "./components";
export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4 w-full ">
      <div className="mt-5">
        <LogoQueston />
      </div>
      <div className="w-full md:max-w-xl text-left px-3">
        <CreateRoomForm />
      </div>
    </div>
  );
}
