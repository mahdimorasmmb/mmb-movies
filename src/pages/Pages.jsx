import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MovieInfoPage from "./Movie/MovieInfoPage";
import PopularMoviePage from "./Movie/PopularMoviePage";
import TopRatedMoviePage from "./Movie/TopRatedMoviePage";
import PopPeople from "./People/PopPeople";
import FavoriteList from "./profile/FavoriteList";
import Profile from "./profile/Profile";
import WatchList from "./profile/WatchList";

import SearchPage from "./SearchPage";

import TvAiringToday from "./Tv/TvAiringTodayPage";
import TvInfoPage from "./Tv/TVInfoPage";
import TvOnTheAir from "./Tv/TvOnTheAirPage";
import TvPopularPage from "./Tv/TvPopularPage";
import TvTopRatedPage from "./Tv/TvTopRatedPage";

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
      <Route path="/popular-movie">
        <PopularMoviePage />
      </Route>
      <Route path="/top-rated-movie">
        <TopRatedMoviePage />
      </Route>
      <Route path="/popular-tv">
        <TvPopularPage />
      </Route>
      <Route path="/top-rated-tv">
        <TvTopRatedPage />
      </Route>
      <Route path="/airing-today-tv">
        <TvAiringToday />
      </Route>
      <Route path="/on-the-air-tv">
        <TvOnTheAir />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/watch-list">
        <WatchList />
      </Route>
      <Route path="/favorite-list">
        <FavoriteList />
      </Route>
      <Route path="/people-popular">
        <PopPeople />
      </Route>
      <Route path="/profile">
        g
        <Profile />
      </Route>
    </Switch>
  );
}
