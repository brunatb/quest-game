import { Avatar } from "./components/avatar-user";
import { Avatar2 } from "./components/avatar-user2";
import { ScreenQuestion } from "./components/main-screen-game";
import { SquarePoint } from "./components/square-point";
import { Timer } from "./components/square-timer";


export default function Page(){

return (
  <div className="flex flex-col items-center gap-4 py-4 font-poppins">
    <ScreenQuestion />
      <Timer/>
    <div className="flex flex-row items-center gap-8 justify-center p-3 ">
      <Avatar />
      <SquarePoint/>
      <SquarePoint/>
      <Avatar2 />
    </div>
  </div>
);

}