'use client';

import { useEffect, useState } from "react";

export function Timer(){
  //Implementar lógica do timer
  
  const startCount = 30; 

  const [seconds, setSeconds] = useState(startCount);

  useEffect(() => {
    if (seconds > 0) {
      const timerID = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerID);
    }
  }, [seconds]);
    

    return (
      <div className="text-lg text-center">
        Timer
        <div className=" flex items-center justify-center h-2 w-16 bg-white space-y-2 border-2 p-4 rounded-xl text-3xl text-black border-black">
          {seconds}s 
        </div>
      </div>
    
  );

}