import { LogoQueston } from "../components/logo";
import "@fontsource/poppins/700.css";
import { EnterRoomForm } from "./components";

export default function Page() {
  return (
    <div className="flex flex-col items-center i space-y-2 w-full overflow-auto">
      <div className="mt-10 mb-2">
        <LogoQueston />
      </div>
      <div className="flex flex-col font-extrabold items-center justify-center w-full lg:max-w-md space-y-4">
        <EnterRoomForm />
      </div>
    </div>
  );
}
