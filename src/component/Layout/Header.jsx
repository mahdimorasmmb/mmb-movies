import React, { useState } from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import CelebritiesIcon from "../Icon/CelebritiesIcon";
import NewsIcon from "../Icon/NewsIcon";
import CommunityIcon from "../Icon/CommunityIcon";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const [active, setActive] = useState({});
  return (
    <header className=" flex  text-white p-4 justify-between overflow-scroll scrollbar-hide  ">
      <div className="flex items-center text-center">
        <div
          onClick={() => {
            setActive({});
            setActive({
              HomeIcon: true,
            });
          }}
          className={`group flex flex-col cursor-pointer w-24 `}
        >
          <HomeIcon
            className={`mx-auto group-hover:animate-bounce ${
              active.HomeIcon ? "animate-bounce" : ""
            }`}
            sx={{ fontSize: 30 }}
          />
          <p
            className={`uppercase let tracking-widest mx-auto text-xs  group-hover:opacity-100 ${
              active.HomeIcon ? "opacity-100" : "opacity-0"
            } `}
          >
            Home
          </p>
        </div>
        <div
          onClick={() => {
            setActive(null);
            setActive({
              MovieIcon: true,
            });
          }}
          className="group flex flex-col cursor-pointer w-24"
        >
          <MovieIcon
            className={`mx-auto group-hover:animate-bounce ${
              active.MovieIcon ? "animate-bounce" : ""
            }`}
            sx={{ fontSize: 30, display: "block" }}
          />
          <p
            className={`uppercase let tracking-widest mx-auto text-xs  group-hover:opacity-100 ${
              active.MovieIcon ? "opacity-100" : "opacity-0"
            } `}
          >
            Movie
          </p>
        </div>
        <div
          onClick={() => {
            setActive(null);
            setActive({
              CelebritiesIcon: true,
            });
          }}
          className="group flex flex-col cursor-pointer w-24"
        >
          <CelebritiesIcon
            className={` w-8 h-8 fill-current text-white  mx-auto group-hover:animate-bounce ${
              active.CelebritiesIcon ? "animate-bounce" : ""
            }`}
          />
          <p
            className={`uppercase let tracking-widest mx-auto text-xs  group-hover:opacity-100 ${
              active.CelebritiesIcon ? "opacity-100" : "opacity-0"
            } `}
          >
            Celebrities
          </p>
        </div>
        <div
          onClick={() => {
            setActive(null);
            setActive({
              NewsIcon: true,
            });
          }}
          className="group flex flex-col cursor-pointer w-24"
        >
          <NewsIcon
            className={`mx-auto w-8 h-8 group-hover:animate-bounce ${
              active.NewsIcon ? "animate-bounce" : ""
            }`}
          />
          <p
            className={`uppercase let tracking-widest mx-auto text-xs  group-hover:opacity-100 ${
              active.NewsIcon ? "opacity-100" : "opacity-0"
            } `}
          >
            News
          </p>
        </div>
        <div
          onClick={() => {
            setActive(null);
            setActive({
              CommunityIcon: true,
            });
          }}
          className="group flex flex-col cursor-pointer w-24"
        >
          <CommunityIcon
            className={` mx-auto w-9 h-9 fill-current text-white group-hover:animate-bounce ${
              active.CommunityIcon ? "animate-bounce" : ""
            }`}
          />
          <p
            className={`uppercase let tracking-widest mx-auto text-xs  group-hover:opacity-100 ${
              active.CommunityIcon ? "opacity-100" : "opacity-0"
            } `}
          >
            Community
          </p>
        </div>
        <div
          onClick={() => {
            setActive({});
            setActive({
              SearchIcon: true,
            });
          }}
          className="group flex flex-col cursor-pointer w-24 text-center "
        >
          <SearchIcon
            className={`mx-auto group-hover:animate-bounce ${
              active.SearchIcon ? "animate-bounce" : ""
            }`}
            sx={{ fontSize: 30 }}
          />
          <p
            className={`uppercase let tracking-widest mx-auto text-xs  group-hover:opacity-100 ${
              active.SearchIcon ? "opacity-100" : "opacity-0"
            } `}
          >
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
