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
    <div className=" p-4 bg-greenHd  flex text-gray-100">
      {/* <!--Banner image--> */}
      <img
        className="rounded-lg max-w-sm"
        src={imgSrc(data?.poster_path, "w500")}
      />
      {/* 
    <!--Tag--> */}
      <div className="flex flex-col p-10 ">
        <h1 className="font-semibold text-gray-100 leading-none text-xl mt-1 capitalize truncate">
          {data?.belongs_to_collection.name}
        </h1>
        {/* <!--Description--> */}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide  mt-1">
            {data?.overview}
          </p>
        </div>
        <div className=" flex items-center space-x-2 mt-20">
          <div className="flex space-x-32">
            <a
              href={data?.homepage}
              className=" px-4 text-center  font-bold   text-gray-100 bg-greenHl   rounded-lg hover:text-greenHl hover:bg-gray-100"
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
    </div>
  );
}
