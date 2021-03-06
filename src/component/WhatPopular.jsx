import React, { useContext } from "react";
import { MovieOrTv } from "../context/MovieOrTv";

export default function WhatPopular() {
  const { active, setActive } = useContext(MovieOrTv);
  return (
    <div>
      <h2 className="text-gray-200 text-3xl mt-8 px-8 font-bold">
        Popular Movie
      </h2>
      {/* <ul className="flex list-none flex-nowrap  bg-gray-200 px-3 py-3 rounded-full text-gray-900 ">
        <li>
          <a
            onClick={() => {
              setActive("");
              setActive("movie");
            }}
            className={`    text-sm font-bold py-3 px-4 rounded-full transition ease-in duration-900    ${
              active === "movie" ? " text-gray-50 bg-greenHl " : ""
            }`}
            href="#"
          >
            Movie
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setActive("");
              setActive("tv");
            }}
            className={`    text-sm font-bold py-3 px-4 rounded-full transition ease-in duration-700  ${
              active === "tv"
                ? "text-gray-50 bg-gradient-to-r  from-greenHd to-greenHl "
                : ""
            }`}
            href="#"
          >
            TV
          </a>
        </li>
      </ul> */}
    </div>
  );
}
