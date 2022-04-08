import React, {FC} from "react";
import { DragonDisplayProps } from "./type";

export const DragonDisplay: FC<DragonDisplayProps> = ({drag}) =>{
  return(
    <p>
      Juego: {drag.description}, 
    </p>
  )
}