import React, {FC, useState, useEffect} from "react";
import { getDragons } from "../../services/dragon/service"
import { DragonDisplay } from "../dragonDisplay/component";
import "../dragonDisplay/dragon.css"


export const Dragon: FC = () =>{
  const [dragon, setDragon] = useState<any>(undefined)
  
  useEffect(() => {
    const firstDragon = async () =>{
      const newDragon = await getDragons();
      setDragon(newDragon);
    }
    firstDragon()
  }, [])
  return(
    <div>
      {dragon !== undefined ? (<div className="dragons-container">
        {dragon.map((drag: any, index: number) => (
          <DragonDisplay key={`dragon-${drag.id}-index-${index}`} drag={drag} index={index}/>
        ))}
      </div>) : null}
    </div>
  )
}