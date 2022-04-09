import React, {FC} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Dragon } from "./components/dragon/component"
import { Rocket } from "./components/rocket/component"
import { Home } from './views/Home/component';

export const App: FC = () =>{
  return(
    <>
      <header>
          <Link to="/"><img className="logo" src={"./logo.jpg"} alt="logo"/></Link>
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="dragon">Dragon</Link>
          <Link className="link" to="rocket">Rocket</Link>
        </nav>
      </header>
      <article className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dragon" element={<Dragon />} />
          <Route path="rocket" element={<Rocket />} />
        </Routes>
      </article>
    </>
  )
}

