import React, {FC, useState, useEffect} from "react";
import { getRockets } from "../../services/rockets/service"
import { RocketDisplay } from "../rocketDisplay/component";


export const Rocket: FC = () =>{
  const [rocket, setRocket] = useState<any>(undefined)
  
  useEffect(() => {
    const firstDragon = async () =>{
      const newRocket = await getRockets();
      setRocket(newRocket);
    }
    firstDragon()
  }, [])

  return(
    <div>
      {rocket !== undefined ? (<div>
        {rocket.map((rocket: any, index: number) => (
          <RocketDisplay key={`rocket-${rocket.id}-index-${index}`} rocket={rocket} index={index}/>
        ))}
      </div>) : null}
    </div>
  )
}