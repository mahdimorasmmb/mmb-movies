import Item from "antd/lib/list/Item";
import React from "react";
import imgSrc from "../helpers/imgSrc";

import { StarTwoTone, StarFilled, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import profileAction from "../store/actions/profileAction";

export default function CardMovie({ movie }) {
  const media_type = `${movie.title ? "movie" : "tv"}`;
  const favorite = useSelector(
    (state) => state.profile?.favorite[`${movie.title ? "movie" : "tv"}`]
  );
  const account_id = useSelector((state) => state.profile.profile?.id);
  return (
    <div className=" w-auto justify-center   lg:p-5 py-5 px-12 antialiased text-gray-900">
      <img
        src={imgSrc(movie.poster_path, "w780")}
        className=" w-full h-auto object-contain  rounded-lg shadow-md"
      />
      <div className="relative text px-4 -mt-4">
        <div className="bg-greenHl p-3 rounded-lg flex flex-col shadow-lg">
          <div className="flex justify-between items-center">
            <p className="md:text-2xl text-xl text-center font-bold   text-gray-100">
              {movie.name
                ? movie.name.length > 15
                  ? `${movie.name.substring(0, 15)}...`
                  : movie.name
                : movie.title.length > 15
                ? `${movie.title.substring(0, 15)}...`
                : movie.title}
            </p>
            <span className="bg-greenHd border-8 border-solid border-greenHl flex justify-center items-center rounded-full w-20 h-20 text-2xl mt-3 text-yellow-400 font-extrabold">
              {movie?.vote_average * 10} <span>%</span>
            </span>
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
