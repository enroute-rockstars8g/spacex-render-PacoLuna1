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
          <img src={"./logo.jpg"}/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="dragon">Dragon</Link>
          <Link to="rocket">Rocket</Link>
        </nav>
      </header>
      <article>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dragon" element={<Dragon />} />
          <Route path="rocket" element={<Rocket />} />
        </Routes>
      </article>
    </>
  )
}

