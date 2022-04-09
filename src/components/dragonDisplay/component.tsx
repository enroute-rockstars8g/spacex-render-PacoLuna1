import React, {FC} from "react";
import { DragonDisplayProps } from "./type";
import "./dragon.css"

export const DragonDisplay: FC<DragonDisplayProps> = ({drag, index}) =>{
  return(
    <div className="drag-container" >
      <img className="drag-image" src={`./dragon/${drag.name.replace(" ","")}.jpg`} alt={drag.name}/>
      <div className={`drag-info ${index%2 === 0 ? "info-left": "info-right"}`}>
        <p className="drag-name">{drag.name}</p>
        <p className="drag-des">Diameter: {drag.diameter.meters} m</p>
        <p className="drag-des">Capacity: {drag.crew_capacity}</p>
        <p className="drag-des">Trusters:</p>
        <ul className="thruster-list">
        { drag.thrusters.map((thruster: any, index: number)=>(
          <li key={`drag-thruster-${thruster.type}-index-${index}`}>-Type: {thruster.type}, fuel: { thruster.fuel_1}, Amount: { thruster.amount}  </li>
        ))}
        </ul>
        <p className="drag-des">{drag.description}</p>
      </div>
    </div>
  )
}