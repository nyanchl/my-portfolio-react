import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Rhythm from "./myapps/rhythmgame";
// import useState from "react";

export const Myapps: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/rhythm"><img src="img/rhythm.png" alt=""/>音ゲー</Link>
      <Routes>
        <Route path="/rhythm" element={<Rhythm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Myapps