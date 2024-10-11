import { Avatar } from "./components/avatar-user";
import { Avatar2 } from "./components/avatar-user2";
import { ScreenQuestion } from "./components/main-screen-game";
import { SquarePoint } from "./components/square-point";
import { Timer } from "./components/square-timer";


export default function Page(){

return (
  <div className="font-[family-name:var(--font-geist-mono)] w-full text-center text-4xl font-bold">
    Quest
    <div className="w-full space-y-6 border border-foreground p-8 rounded-lg">
      <ScreenQuestion />
        <div className="flex flex-row gap-96 justify-center  p-4">
          <div className="flex flex-row gap-2 ">
          <Avatar></Avatar>
          <SquarePoint></SquarePoint>
          </div>
          <Timer></Timer>
          <div className="flex flex-row gap-2">
          <SquarePoint></SquarePoint>
          <Avatar2></Avatar2>
        </div>
      </div>
    </div>
  </div>
);

}