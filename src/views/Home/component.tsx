import React, {FC, useEffect, useState} from "react";
import { getCompany } from "../../services/home/service";
import "./home.css"

export const Home: FC = ()=>{
  const [company, setCompany] = useState<any>(undefined)
  
  useEffect(() => {
    const spaceXCompany = async () =>{
      const newCompany = await getCompany();
      setCompany(newCompany);
    }
    spaceXCompany()
  }, [])

  return(
    <div className="App-container">
      {company !== undefined ?
        <>
          <div className="company-info">
            <p className="company-name">{company.name} <span className="ceo">by {company.ceo}</span></p>
            <p className="company-des">{company.summary}</p>
          </div> 
          <div className="extra-info">
            <p className="extra-state">From {company.headquarters.state}</p>
            <p className="extra-founded">Since {company.founded}</p>
          </div>
        </>
      : null}
    </div>
  )
}