import React from "react";
import { Button } from "@/app/components";


interface ButtonAlternativeProps{
    borderColor : string,
    textAlternative: string; 
}


export function ButtonAlternative({ borderColor , textAlternative} : ButtonAlternativeProps){
   



    return(
        <Button
            style={{
                maxWidth:'250px',
                textSizeAdjust:"auto",
                fontSize: '1.2em',
                borderColor:`${borderColor}`,
                
            }}
            >
                {textAlternative}
        </Button>
    );
}