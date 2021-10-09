import Item from "antd/lib/list/Item";
import React from "react";
import imgSrc from "../helpers/imgSrc";

import { StarTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function CardMovie({ movie }) {
  return (
    <div className=" w-auto justify-center lg:p-5 p-12 antialiased text-gray-900">
      <img
        src={imgSrc(movie.poster_path, "w780")}
        className=" w-full h-auto object-contain  rounded-lg shadow-md"
      />
      <div className="relative text px-4 -mt-3">
        <div className="bg-greenHd p-6 rounded-lg shadow-lg">
          <p className="md:text-sm text-xs text-center font-bold  text-gray-100">
            {movie.name
              ? movie.name.length > 25
                ? `${movie.name.substring(0, 25)}...`
                : movie.name
              : movie.title.length > 25
              ? `${movie.title.substring(0, 25)}...`
              : movie.title}
          </p>

          <div className=" flex justify-between">
            <button className="px-1 lg:px-4 text-center md:font-bold text-xs font-extralight  text-gray-100 bg-greenHl   rounded-lg hover:text-greenHl hover:bg-gray-100">
              {movie.title ? (
                <Link to={`/movie-info/${movie.id}`}>more info movie</Link>
              ) : (
                ""
              )}
            </button>
            <h2 className="text-yellow-400 font-extrabold text-2xl">
              <StarTwoTone twoToneColor="#FBBF24" />
              {movie.vote_average}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// const v = (
//   <div className="overflow-hidden w-11/12  relative justify-end  cursor-pointer capitalize flex flex-col rounded-md    z-50 object-cover text-white my-6">
//     <img className="object-cover  " src={imgSrc(movie.poster_path, "w780")} />

//     <div className="absolute p-3 flex   text-gray-100 ">
//       <p className="text-xl text-center  text-gray-900">{movie.title}</p>
//       <button className="bg-greenHl p-3 text-center block   opacity-60 rounded-lg hover:opacity-100">
//         More ...
//       </button>
//       <h2 className="text-yellow-400 font-extrabold text-4xl">
//         <StarTwoTone twoToneColor="#FBBF24" />
//         {movie.vote_average}
//       </h2>
//     </div>
//   </div>
// );
