import Item from "antd/lib/list/Item";
import React from "react";
import imgSrc from "../helpers/imgSrc";

import { StarTwoTone } from "@ant-design/icons";

export default function CardMovie({ movie }) {
  return (
    <div className="overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md    z-50 object-cover text-white my-6">
      <img className="object-cover " src={imgSrc(movie.poster_path, "w780")} />

      <div className="absolute p-3 flex flex-col text-gray-100 ">
        <h2 className="text-yellow-400 font-extrabold text-4xl">
          <StarTwoTone twoToneColor="#FBBF24" />
          {movie.vote_average}
        </h2>
        <button className="bg-greenHl p-3 text-center   opacity-60 rounded-lg hover:opacity-100">
          More ...
        </button>
      </div>
    </div>
  );
}