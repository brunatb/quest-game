import { Avatar } from "./components/avatar-user";
import { Avatar2 } from "./components/avatar-user2";
import { ScreenQuestion } from "./components/main-screen-game";
import { SquarePoint } from "./components/square-point";
import { Timer } from "./components/square-timer";


export default function Page(){

return (
  <div className="flex flex-col p-2 items-center font-poppins">
    <ScreenQuestion />
      <Timer/>
    <div className="flex flex-row items-center gap-8 justify-center">
      <Avatar />
      <SquarePoint/>
      <SquarePoint/>
      <Avatar2 />
    </div>
  </div>
);

}