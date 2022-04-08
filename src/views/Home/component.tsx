import React, {FC, useEffect, useState} from "react";
import { getCompany } from "../../services/home/service";

export const Home: FC = ()=>{
  const [company, setCompany] = useState<any>(undefined)
  
  useEffect(() => {
    const spaceXCompany = async () =>{
      const newCompany = await getCompany();
      setCompany(newCompany);
    }
    spaceXCompany()
  }, [])

  return <div>{company !== undefined ?
    <p>{company.name}</p>
  : null}</div>
}