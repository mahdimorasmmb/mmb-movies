import React from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import CelebritiesIcon from "../Icon/CelebritiesIcon";
import NewsIcon from "../Icon/NewsIcon";
import CommunityIcon from "../Icon/CommunityIcon";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <header className=" flex  text-red-600 bg-black p-5 justify-between ">
      <div className="flex items-center text-center">
        <div className="flex flex-col cursor-pointer w-24">
          <HomeIcon className="mx-auto" sx={{ fontSize: 40 }} />
          <p>Home</p>
        </div>
        <div className="flex flex-col cursor-pointer w-24">
          <MovieIcon
            className="mx-auto"
            sx={{ fontSize: 40, display: "block" }}
          />
          <p>Movie</p>
        </div>
        <div className="flex flex-col cursor-pointer w-24">
          <CelebritiesIcon className="mx-auto w-12 h-12 fill-current text-red-600" />
          <p>Celebrities</p>
        </div>
        <div className="flex flex-col cursor-pointer w-24">
          <NewsIcon className="mx-auto w-12 h-12" />
          <p>News</p>
        </div>
        <div className="flex flex-col cursor-pointer w-24">
          <CommunityIcon className=" mx-auto w-13 h-12 fill-current text-red-600" />
          <p>Community</p>
        </div>
        <div className="flex flex-col cursor-pointer w-24 text-center ">
          <SearchIcon className="mx-auto" sx={{ fontSize: 40 }} />
          <p>Search</p>
        </div>
      </div>
      <div className="flex items-center ">
        <TheatersIcon sx={{ fontSize: 120 }} />
        <h1 className="text-4xl font-extrabold tracking-tighter ">
          Mmb Movies
        </h1>
      </div>
    </header>
  );
}
