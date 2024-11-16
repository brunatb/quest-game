"use client";

import { LuAlarmClock } from "react-icons/lu";
import { useGame } from "./context";

export function Timer() {
  const { timer } = useGame();
  return (
    <div className="flex flex-col justify-center items-center">
      <LuAlarmClock className={
        `text-4xl text-white ${timer < 10 ? "animate-bounce" : ""}`
      } />
      <div
        className={`flex items-center justify-center bg-white space-y-2 px-2 shadow-2xl rounded-xl lg:text-3xl text-xl mt-2 ${
          timer < 10
            ? timer <= 5
              ? "text-red-500"
              : "text-yellow-500"
            : "text-black"
        }`}
      >
        {timer} s
      </div>
    </div>
  );
}
