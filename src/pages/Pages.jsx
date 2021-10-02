import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home/Home";
import People from "./People/People";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/people">
        <People />
      </Route>
    </Switch>
  );
}
