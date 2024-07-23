import React from "react";
import { Route, Routes } from "react-router-dom";
import Rhythm from "./myapps/rhythmgame";

export const Myapps: React.FC = () => {
  return (
    <Routes>
      <Route path="/rhythm" element={<Rhythm/>} />
      <h1>Hello, world!</h1>
    </Routes>
  )
}

export default Myapps