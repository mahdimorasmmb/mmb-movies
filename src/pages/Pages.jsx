import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MovieInfoPage from "./Movie/MovieInfoPage";
import People from "./People/People";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie-info/:id">
        <MovieInfoPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
