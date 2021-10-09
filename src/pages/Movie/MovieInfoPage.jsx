import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useParams } from "react-router";
import imgSrc from "../../helpers/imgSrc";
import useMovieDB from "../../hooks/useMovieDB";
import { StarTwoTone } from "@ant-design/icons";

export default function MovieInfoPage() {
  const { id } = useParams();
  const { data, loading } = useMovieDB(`/movie/${id}`);
  return (
    <div className=" p-4 bg-greenHd w-full  flex flex-col sm:flex-row text-gray-100">
      {/* <!--Banner image--> */}
      <div className="sm:w-1/2 w-full p-5">
        <img
          className="rounded-lg w-full object-cover"
          src={imgSrc(data?.poster_path, "w500")}
        />
      </div>
      {/* 
    <!--Tag--> */}
      <div className="flex sm:w-1/2 w-full flex-col p-5 ">
        <h1 className="font-semibold text-gray-100 leading-none text-xl mt-1 capitalize truncate">
          {data?.belongs_to_collection.name}
        </h1>
        {/* <!--Description--> */}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide  mt-1">
            {data?.overview}
          </p>
        </div>
        <div className=" flex items-center sm:justify-around justify-between mt-20">
          <a
            href={data?.homepage}
            className="inline-block  px-3 py-2 text-sm bg-greenHl text-gray-200 rounded-lg font-semibold uppercase lg:w-auto hover:text-greenHl hover:bg-gray-200"
          >
            page
          </a>
          <h2 className="text-yellow-400 font-extrabold text-2xl">
            <StarTwoTone twoToneColor="#FBBF24" />
            {data?.vote_average}
          </h2>
          <p className=" font-semibold text-sm">{data?.release_date}</p>
        </div>
      </div>
    </div>
  );
}
