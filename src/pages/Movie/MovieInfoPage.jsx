import React, { useState } from "react";
import { useParams } from "react-router";
import imgSrc from "../../helpers/imgSrc";
import useMovieDB from "../../hooks/useMovieDB";
import { StarTwoTone, StarOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";
import profileAction from "../../store/actions/profileAction";
import CastSwiper from "../../component/CastSwiper";
import YoutubeEmbed from "../../component/YoutubeEmbed";
import ImageInfoMovie from "../../component/ImageInfoMovie";
import ReviewsPage from "../../component/ReviewsPage";

export default function MovieInfoPage() {
  const [activeTab, setActiveTab] = useState(1);
  const { id } = useParams();
  const { data, loading } = useMovieDB(`/movie/${id}`);
  const media_type = "movie";
  const account_id = useSelector((state) => state.profile.profile?.id);
  const favorite = useSelector((state) => state.profile.favorite.movie);
  const castes = useMovieDB(`/movie/${id}/credits`);
  const video = useMovieDB(`movie/${id}/videos`);
  const image = useMovieDB(`movie/${id}/images`);
  const reviews = useMovieDB(`movie/${id}/reviews`);

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
          <p
            onClick={() => {
              setActiveTab(1);
            }}
            className={` ${
              activeTab === 1
                ? "text-gray-200 border-l-4 border-gray-200"
                : "text-gray-500"
            }
             text-lg  font-bold   pl-2 pr-8  hover:text-gray-200 cursor-pointer  bg $`}
          >
            Cast
          </p>
          <p
            onClick={() => {
              setActiveTab(2);
            }}
            className={`text-lg font-bold  pl-2 pr-8 hover:text-gray-200 cursor-pointer ${
              activeTab === 2
                ? "text-gray-200 border-l-4 border-gray-200"
                : "text-gray-500"
            }`}
          >
            Videos
          </p>
          <p
            onClick={() => {
              setActiveTab(3);
            }}
            className={`"text-lg font-bold  pl-2 pr-8 hover:text-gray-200 cursor-pointer ${
              activeTab === 3
                ? "text-gray-200 border-l-4 border-gray-200"
                : "text-gray-500"
            }`}
          >
            Images
          </p>
          <p
            onClick={() => {
              setActiveTab(4);
            }}
            className={`text-lg font-bold  pl-2 pr-8 hover:text-gray-200 cursor-pointer ${
              activeTab === 4
                ? "text-gray-200 border-l-4 border-gray-200"
                : "text-gray-500"
            }`}
          >
            Reviews
          </p>
        </div>
        <div className={`${activeTab === 1 ? "block" : "hidden"}   px-5 py-8 `}>
          <CastSwiper castes={castes} />
        </div>
        <div
          className={`   justify-center items-center rounded-lg ${
            activeTab === 2 ? "flex flex-col" : "hidden"
          }`}
        >
          {video.data?.results.map((item) => (
            <YoutubeEmbed src={item.key} />
          ))}
        </div>
        <div
          className={` grid grid-cols-3    px-10 ${
            activeTab === 3 ? "block" : "hidden"
          }`}
        >
          {image?.data?.backdrops.map((img) => (
            <img
              className="py-7 px-4 rounded-3xl "
              src={imgSrc(img.file_path, "w500")}
            />
          ))}
        </div>
        <div
          className={` py-4    px-10 ${
            activeTab === 4 ? "block" : "hidden"
          } w-full grid grid-cols-1 md:grid-cols-1 gap-6`}
        >
          {reviews?.data?.results.map((item) => (
            <ReviewsPage key={item.id} info={item} />
          ))}
        </div>
      </div>
    </>
  );
}
