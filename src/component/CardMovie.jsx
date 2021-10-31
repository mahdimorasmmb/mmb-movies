import Item from "antd/lib/list/Item";
import React from "react";
import imgSrc from "../helpers/imgSrc";

import {
  StarTwoTone,
  StarFilled,
  StarOutlined,
  ClockCircleOutlined,
  ClockCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import profileAction from "../store/actions/profileAction";

export default function CardMovie({ movie }) {
  const media_type = `${movie.title ? "movie" : "tv"}`;
  const favorite = useSelector(
    (state) => state.profile?.favorite[`${movie.title ? "movie" : "tv"}`]
  );
  const watchList = useSelector(
    (state) => state.profile?.watchList[`${movie.title ? "movies" : "tv"}`]
  );
  console.log(watchList);
  const account_id = useSelector((state) => state.profile.profile?.id);
  return (
    <div className=" relative w-auto justify-center   lg:px-2 py-5  antialiased text-gray-900">
      {favorite ? (
        favorite?.results.length !== 0 ? (
          favorite.results.find((item) => item.id === movie?.id) ? (
            <StarTwoTone
              twoToneColor="yellow"
              style={{ color: "yellow" }}
              className="absolute z-50  bg-yellow-400 text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
              onClick={() => {
                profileAction.setFavorite(
                  account_id,
                  media_type,
                  movie.id,
                  false
                );
              }}
            />
          ) : (
            <StarOutlined
              style={{ color: "yellow" }}
              className="absolute z-50   text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
              onClick={() => {
                profileAction.setFavorite(
                  account_id,
                  media_type,
                  movie.id,
                  true
                );
              }}
            />
          )
        ) : (
          <StarOutlined
            style={{ color: "yellow" }}
            className="absolute z-50   text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
            onClick={() => {
              profileAction.setFavorite(account_id, media_type, movie.id, true);
            }}
          />
        )
      ) : (
        ""
      )}

      {watchList ? (
        watchList?.results.length !== 0 ? (
          watchList.results.find((item) => item.id === movie?.id) ? (
            <ClockCircleTwoTone
              twoToneColor="red"
              className="  right-2 absolute z-50 p-2  bg-red-800 text-4xl md:text-6xl sm:text-5xl  cursor-pointer"
              onClick={() => {
                profileAction.setWatchList(
                  account_id,
                  media_type,
                  movie.id,
                  false
                );
              }}
            />
          ) : (
            <ClockCircleOutlined
              style={{ color: "red" }}
              className="right-2 absolute z-50 p-2 text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
              onClick={() => {
                profileAction.setWatchList(
                  account_id,
                  media_type,
                  movie.id,
                  true
                );
              }}
            />
          )
        ) : (
          <ClockCircleOutlined
            style={{ color: "red" }}
            className="right-2 absolute z-50 p-2 text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
            onClick={() => {
              profileAction.setWatchList(
                account_id,
                media_type,
                movie.id,
                true
              );
            }}
          />
        )
      ) : (
        ""
      )}

      <Link
        to={
          media_type === "movie"
            ? `movie-info/${movie.id}`
            : `tv-info/${movie.id}`
        }
      >
        <img
          title={movie.name ? movie.name : movie.title}
          src={imgSrc(movie.poster_path, "w780")}
          className="hover:opacity-70 block cursor-pointer translate-x-1 w-full h-auto object-contain  rounded-lg shadow-md"
        />
      </Link>
      <div className="relative text justify-center items-center   -mt-4">
        <div className="bg-greenHl p-3 rounded-2xl  justify-between flex flex-col shadow-lg">
          <div className="flex justify-between  items-center">
            <p
              title={movie.name ? movie.name : movie.title}
              className="md:text-2xl text-xl text-center font-bold   text-gray-100"
            >
              {movie.name
                ? movie.name.length > 25
                  ? `${movie.name.substring(0, 25)}...`
                  : movie.name
                : movie.title.length > 25
                ? `${movie.title.substring(0, 25)}...`
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
