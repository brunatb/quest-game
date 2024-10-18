import { FaRegUserCircle } from "react-icons/fa";
import { MdCodeOff } from "react-icons/md";

import { InputAlt } from "@/app/components/input-alt";
import "@fontsource/poppins/700.css"; 

export function CreateRoomForm2() {


    return (
      <form className="font-poppins flex flex-col justify-center text-center gap-6 bg-white border-foreground rounded-lg p-2 ">
        <h1 className="text-3xl text-blue-950">Crie uma nova sala</h1>
        <p className="text-blue-950">
          Insira os dados para criar uma sala e compartilhe o com outro jogador!
        </p>
        
          <div className="flex flex-col gap-4 w-full">
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