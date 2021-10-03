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
        <div className="group flex flex-col cursor-pointer w-24  ">
          <HomeIcon
            className="mx-auto group-hover:animate-bounce"
            sx={{ fontSize: 30 }}
          />
          <p className="uppercase let tracking-widest mx-auto text-xs opacity-0 group-hover:opacity-100  ">
            Home
          </p>
        </div>
        <div className="group flex flex-col cursor-pointer w-24">
          <MovieIcon
            className="mx-auto group-hover:animate-bounce"
            sx={{ fontSize: 30, display: "block" }}
          />
          <p className="uppercase let tracking-widest mx-auto text-xs opacity-0 group-hover:opacity-100">
            Movie
          </p>
        </div>
        <div className="group flex flex-col cursor-pointer w-24">
          <CelebritiesIcon className="mx-auto w-8 h-8 fill-current text-red-600 group-hover:animate-bounce" />
          <p className="uppercase let tracking-widest mx-auto text-xs opacity-0 group-hover:opacity-100">
            Celebrities
          </p>
        </div>
        <div className="group flex flex-col cursor-pointer w-24">
          <NewsIcon className="mx-auto w-8 h-8 group-hover:animate-bounce" />
          <p className="uppercase let tracking-widest mx-auto text-xs opacity-0 group-hover:opacity-100">
            News
          </p>
        </div>
        <div className="group flex flex-col cursor-pointer w-24">
          <CommunityIcon className=" mx-auto w-9 h-9 fill-current text-red-600 group-hover:animate-bounce" />
          <p className="uppercase let tracking-widest mx-auto text-xs opacity-0 group-hover:opacity-100">
            Community
          </p>
        </div>
        <div className="group flex flex-col cursor-pointer w-24 text-center ">
          <SearchIcon
            className="mx-auto group-hover:animate-bounce"
            sx={{ fontSize: 30 }}
          />
          <p className="uppercase let tracking-widest mx-auto text-xs opacity-0 group-hover:opacity-100">
            Search
          </p>
        </div>
      </div>
      <div className="group flex items-center ">
        <TheatersIcon sx={{ fontSize: 120 }} />
        <h1 className="text-4xl font-extrabold tracking-tighter ">
          Mmb Movies
        </h1>
      </div>
    </header>
  );
}
