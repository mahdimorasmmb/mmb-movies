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
    <header className=" flex  text-red-600 bg-black p-5 ">
      <div className="flex">
        <HomeIcon sx={{ fontSize: 50 }} />
        <MovieIcon sx={{ fontSize: 50, display: "block" }} />
        <CelebritiesIcon className="w-12 h-12 fill-current text-red-600" />
        <NewsIcon className="w-12 h-12" />
        <CommunityIcon className=" w-13 h-12 fill-current text-red-600" />
        <SearchIcon sx={{ fontSize: 50 }} />
      </div>
      <div className="flex items-center leading-10 ">
        <TheatersIcon sx={{ fontSize: 120 }} />
        <h1 className="text-4xl font-extrabold tracking-tighter ">
          Mmb Movies
        </h1>
      </div>
    </header>
  );
}
