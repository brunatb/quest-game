import { LogoQueston } from "../components/logo";
import { Presenter } from "./components";

export default function Page() {
  return (
      <div>
        <div className="px-3 w-full flex h-full justify-center items-center flex-col">
          <div>
            <LogoQueston />
          </div>
          <Presenter />
        </div>
      </div>
  );
}
