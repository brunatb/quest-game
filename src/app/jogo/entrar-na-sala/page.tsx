import { LogoQueston } from "../../components/logo";
import "@fontsource/poppins/700.css";
import { EnterRoomForm } from "./components";

export default function Page() {
  return (
    <div className="flex flex-col items-center space-y-2 w-full overflow-auto">
      <div className="mt-5">
        <LogoQueston />
      </div>
      <div className="w-full md:max-w-xl text-left px-3">
        <EnterRoomForm />
      </div>
    </div>
  );
}
