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
        className={`flex items-center justify-center h-2 bg-white space-y-2 border-2 p-4 rounded-xl text-3xl border-gray-500 mt-2 ${
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
