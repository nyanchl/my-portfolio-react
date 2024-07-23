import React from "react";
import { Route, Switch } from "react-router-dom";
import Rhythm from "./myapps/rhythmgame";

export const Myapps: React.VFC = () => {
  return (
    <Switch>
      <Route path="/rhythm">
        <Rhythm />
      </Route>
      <h1>Hello, world!</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Switch>
  )
}

export default Myapps