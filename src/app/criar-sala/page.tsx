import { GoBackButton } from "../components";
import { CreateRoomForm } from "./components";
import Image from "next/image";



export default function Page() {
  return (
    <div className="flex flex-col items-center max-w-full lg:w-1/3 space-y-2">
      <Image 
        src="/images/Logo4.png"
        width={400}
        height={400}
        alt="Picture of the author"
      />
      <GoBackButton href="/">Voltar</GoBackButton>
      <CreateRoomForm />
    </div>
  );
}
