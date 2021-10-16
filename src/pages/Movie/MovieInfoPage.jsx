import React from "react";
import { useParams } from "react-router";
import imgSrc from "../../helpers/imgSrc";
import useMovieDB from "../../hooks/useMovieDB";
import { StarTwoTone, StarOutlined } from "@ant-design/icons";

import { Menu, Dropdown } from "antd";

import { useSelector } from "react-redux";
import profileAction from "../../store/actions/profileAction";
import CastSwiper from "../../component/CastSwiper";
import YoutubeEmbed from "../../component/YoutubeEmbed";
import ImageInfoMovie from "../../component/ImageInfoMovie";

export default function MovieInfoPage() {
  const { id } = useParams();
  const { data, loading } = useMovieDB(`/movie/${id}`);
  const media_type = "movie";
  const account_id = useSelector((state) => state.profile.profile?.id);
  const favorite = useSelector((state) => state.profile.favorite.movie);
  const castes = useMovieDB(`/movie/${id}/credits`);
  const video = useMovieDB(`movie/${id}/videos`);
  const image = useMovieDB(`movie/${id}/images`);

  console.log(image);
  return (
    <>
      <div className="  px-4 z-50     w-full justify-center  flex flex-col sm:flex-row text-gray-100">
        <div className="sm:w-1/2 max-h-100 w-full py-10  p-2">
          <img
            className="rounded-lg  mx-auto h-full shadow-3xl  object-cover object-center"
            src={imgSrc(data?.poster_path, "w500")}
          />
          <div />
        </div>
        {/* 
    <!--Tag--> */}
        <div className="flex sm:w-1/2 w-full my-auto  flex-col p-5 ">
          <h1 className="font-semibold text-gray-100 leading-none text-xl mt-1 capitalize truncate">
            {data?.title}
          </h1>
          {/* <!--Description--> */}
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide  mt-1">
              {data?.overview}
            </p>
          </div>
          <div className=" flex items-center sm:justify-around justify-between mt-20">
            <h2 className="text-yellow-400 font-extrabold text-2xl">
              {favorite ? (
                favorite?.results.length !== 0 ? (
                  favorite.results.find((item) => item.id === data?.id) ? (
                    <StarTwoTone
                      twoToneColor="yellow"
                      style={{ color: "yellow" }}
                      className="text-4xl mr-3 cursor-pointer"
                      onClick={() => {
                        profileAction.setFavorite(
                          account_id,
                          media_type,
                          data.id,
                          false
                        );
                      }}
                    />
                  ) : (
                    <StarOutlined
                      style={{ color: "yellow" }}
                      className="text-2xl cursor-pointer"
                      onClick={() => {
                        profileAction.setFavorite(
                          account_id,
                          media_type,
                          data.id,
                          true
                        );
                      }}
                    />
                  )
                ) : (
                  <StarOutlined
                    style={{ color: "yellow" }}
                    className="text-4xl cursor-pointer"
                    onClick={() => {
                      profileAction.setFavorite(
                        account_id,
                        media_type,
                        data.id,
                        true
                      );
                    }}
                  />
                )
              ) : (
                ""
              )}
            </h2>
            <a
              href={data?.homepage}
              className="inline-block  px-3 py-2 text-sm bg-greenHl text-gray-200 rounded-lg font-semibold uppercase lg:w-auto hover:text-greenHl hover:bg-gray-200"
            >
              page
            </a>

            <span className="ml-3 inline-block text-yellow-400 font-extrabold text-2xl">
              {data?.vote_average}
            </span>
            <p className=" font-semibold text-sm">{data?.release_date}</p>
          </div>
        </div>
      </div>
      <div className=" w-full border-t-2  border-gray-400 ">
        <div className=" w-full pt-4 px-6  bg-greenHl flex ">
          <p className="text-lg  font-bold text-gray-200 pl-2 pr-8  hover:text-gray-200 cursor-pointer border-l-2 border-greenHd bg">
            Cast
          </p>
          <p className="text-lg font-bold text-gray-500 pl-2 pr-8 hover:text-gray-200 cursor-pointer">
            Videos
          </p>
          <p className="text-lg font-bold text-gray-500 pl-2 pr-8 hover:text-gray-200 cursor-pointer">
            Images
          </p>
          <p className="text-lg font-bold text-gray-500 pl-2 pr-8 hover:text-gray-200 cursor-pointer">
            Production Companies
          </p>
        </div>
        <div className="cast px-5 py-8 hidden">
          <CastSwiper castes={castes} />
        </div>
        <div className=" hidden flex justify-center items-center rounded-lg flex-col ">
          {video.data?.results.map((item) => (
            <YoutubeEmbed src={item.key} />
          ))}
        </div>
        <div className=" px-10">
          <ImageInfoMovie images={image} />
        </div>
      </div>
    </>
  );
}
