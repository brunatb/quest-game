import { LinkButton } from "../components/link-button";
import { LogoQueston } from "../components/logo";
import { CreateRoomForm} from "./components/create-room-form-2";
import "@fontsource/poppins/700.css"; 


export default function Page() {
  return (
    <div className="flex flex-col space-y-2 items-center justify-center bg-background-game max-h-screen min-h-screen w-full overflow-auto">
      <LogoQueston />
      <div className="p-6 py-6 flex flex-col font-extrabold items-center justify-center w-full  space-y-4">
        <CreateRoomForm></CreateRoomForm> 
          <div className="p-4">
          <LinkButton>ENTRAR NA SALA</LinkButton>
          </div>
      </div>
    </div>
  );
}

//<CreateRoomForm></CreateRoomForm>