import { useState } from "react";

type Props = {
    age: number;
}

export function Footer({age}:Props){

    return(
        <footer>
            {age == 20&&
                <h2>Pezin {age} hein</h2>
            }
             {age == 90&&
                <h2>PezAOFMNS {age} hein</h2>
            }
            
        </footer>
    )
}