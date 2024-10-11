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
                maxWidth:'300px',
                borderColor:`${borderColor}`
            }}
            >
                {textAlternative}
        </Button>
    );
}