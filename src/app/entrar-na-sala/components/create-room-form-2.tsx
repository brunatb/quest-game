import { FaRegUserCircle } from "react-icons/fa";
import { MdCodeOff } from "react-icons/md";

import { InputAlt } from "@/app/components/input-alt";
import "@fontsource/poppins/700.css"; 

export function CreateRoomForm() {


    return (
      <form className="font-poppins flex flex-col text-center gap-1 bg-white border-foreground rounded-lg p-6">
        <h1 className="font-extrabold text-3xl text-blue-950">Entre uma sala</h1>
        <p className="text-xl text-blue-950">
          Insira os dados para criar uma sala e compartilhe o com outro jogador!
        </p>
          <div className="flex flex-col gap-4 p-2 w-full">
            <p className="font-extrabold text-left text-blue-950 text-xl">Apelido</p>
            <InputAlt
              icon={<FaRegUserCircle size={24} />}
              placeholder="Insira seu apelido"
            ></InputAlt> 
            <InputAlt
            icon={<MdCodeOff size={24}/>} 
            placeholder="Insira o código da sala"
            >
            </InputAlt>
          </div>
      </form>
    );

}