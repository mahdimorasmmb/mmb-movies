import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MovieInfoPage from "./Movie/MovieInfoPage";
import People from "./People/People";
import TvInfoPage from "./Tv/TVInfoPage";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie-info/:id">
        <MovieInfoPage />
      </Route>
      <Route path="/tv-info/:id">
        <TvInfoPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
