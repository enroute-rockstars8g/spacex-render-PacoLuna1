import React, {FC} from "react";
import { RocketDisplayProps } from "./type";
import "./rocket.css";

export const RocketDisplay: FC<RocketDisplayProps> = ({rocket, index}) =>{
  return(
    <div className="rocket-container">
      <img className="rocket-image" src={`./rockets/${rocket.name.replace(" ","")}.jpg`} alt={rocket.name}/>
      <div className={`rocket-info ${index%2 === 0 ? "info-left": "info-right"}`}>
        <h1 className="rocket-name" >{rocket.name}</h1>
        <p className="rocket-description">{rocket.country}</p>
        <p className="rocket-description">{rocket.description}</p>
        <span className="rocket-description">Height: {rocket.height.meters} m </span>
        <span className="rocket-description">Mass: {rocket.mass.kg} kg</span>
      </div>
    </div>
  )
}