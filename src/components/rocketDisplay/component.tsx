import React, {FC} from "react";
import { RocketDisplayProps } from "./type";

export const RocketDisplay: FC<RocketDisplayProps> = ({rocket}) =>{
  return(
    <p>
      Juego: {rocket.description}, 
    </p>
  )
}