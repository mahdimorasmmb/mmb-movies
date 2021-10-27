import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useParams } from "react-router";
import imgSrc from "../../helpers/imgSrc";
import useMovieDB from "../../hooks/useMovieDB";
import { StarTwoTone, StarOutlined } from "@ant-design/icons";
import profileAction from "../../store/actions/profileAction";
import { useSelector } from "react-redux";

export default function TvInfoPage() {
  const { id } = useParams();
  const { data, loading } = useMovieDB(`/tv/${id}`);
  const favorite = useSelector(
    (state) => state.profile?.favorite[`${data?.title ? "movie" : "tv"}`]
  );
  const media_type = `${data?.title ? "movie" : "tv"}`;
  const account_id = useSelector((state) => state.profile.profile?.id);
  console.log(data);
  return (
    <div className=" p-4 bg-greenHd w-full  flex flex-col sm:flex-row text-gray-100">
      {/* <!--Banner image--> */}
      <div className="sm:w-1/2 w-full p-5">
        {favorite ? (
          favorite?.results.length !== 0 ? (
            favorite.results.find((item) => item.id === data?.id) ? (
              <StarTwoTone
                twoToneColor="yellow"
                style={{ color: "yellow" }}
                className="absolute z-50  bg-yellow-400 text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
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
                className="absolute z-50   text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
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
              className="absolute z-50   text-4xl md:text-6xl sm:text-5xl mr-3 cursor-pointer"
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
        <img
          className="rounded-lg w-full object-cover"
          src={imgSrc(data?.poster_path, "w500")}
        />
      </div>
      {/* 
    <!--Tag--> */}
      <div className="flex sm:w-1/2 w-full my-auto  flex-col p-5 ">
        <h1 className="font-semibold text-gray-100 leading-none text-xl mt-1 capitalize truncate">
          {/* {data?.belongs_to_collection.name} */}
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
            {/* {favorite?.results.length !== 0 ? (
              favorite.results.find((item) => item.id === data.id) ? (
                <StarTwoTone
                  twoToneColor="yellow"
                  style={{ color: "yellow" }}
                  className="text-4xl cursor-pointer"
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
            )} */}
            {data?.vote_average}
          </h2>
          <p className=" font-semibold text-sm">{data?.release_date}</p>
        </div>
      </div>
    </div>
  );
}
