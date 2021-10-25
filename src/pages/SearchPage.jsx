import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import imgSrc from "../helpers/imgSrc";

import useSearch from "../hooks/useSearch";

export default function SearchPage() {
  const search = useSelector((state) => state.search);
  const [searchInput, setSearchInput] = useState(search);
  const [show, setShow] = useState(1);
  useEffect(() => {
    setSearchInput(search);
  }, [search]);
  const movie = useSearch(searchInput);

  console.log(searchInput);

  const tvShow = useSearch(searchInput, "tv");
  console.log(tvShow);
  const people = useSearch(searchInput, "person");

  const company = useSearch(searchInput, "company");

  const collection = useSearch(searchInput, "collection");

  const keyword = useSearch(searchInput, "keyword");

  return (
    <div className="flex flex-col">
      <div className="flex items-center ">
        <h2 className="text-3xl  mx-6 mt-5 font-bold text-gray-200">
          Search Page
        </h2>

        <div className="flex border-2 w-1/2  rounded">
          <button
            // onClick={handleSearch}
            className="flex items-center bg-greenHl justify-center px-4 border-r"
          >
            <svg
              className="w-6 h-6  text-gray-200"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            type="text"
            className="px-4 py-1 text-xl inline w-full  text-gray-900 outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4">
          <h2 className="bg-greenHl  text-2xl text-center my-2 mx-4  rounded-2xl text-gray-200 py-4 ">
            Search results
          </h2>
          <div className=" bg-transparent  bg-gray-200 ml-3  rounded-2xl ">
            <div className="  ">
              <ul className="text-lg  font-bold rounded-2xl ">
                <li className=" bg-gray-200 hover:text-gray-200 py-2  px-4 justify-between hover:bg-greenHd rounded-xl flex">
                  <a onClick={() => setShow(1)}> TV shows:</a>{" "}
                  {tvShow?.data?.results && tvShow.data.total_results}
                </li>
                <li className="bg-gray-200 hover:text-gray-200   py-2  px-4 justify-between hover:bg-greenHd rounded-sm  flex">
                  <a onClick={() => setShow(2)}>Movie:</a>{" "}
                  {movie?.data?.results && movie.data.total_results}
                </li>
                <li className=" bg-gray-200 hover:text-gray-200 py-2  px-4 justify-between hover:bg-greenHd rounded-sm  flex">
                  <a onClick={() => setShow(3)}>People:</a>{" "}
                  {people?.data?.results && people.data.total_results}
                </li>
                <li className="bg-gray-200 hover:text-gray-200 py-3  px-4 justify-between hover:bg-greenHd rounded-sm   flex">
                  <a onClick={() => setShow(3)}>Companies:</a>{" "}
                  {people?.data?.results && people.data.total_results}
                </li>
                <li className="bg-gray-200 hover:text-gray-200 py-3  px-4 justify-between hover:bg-greenHd  rounded-sm flex">
                  <a onClick={() => setShow(4)}>Collections:</a>{" "}
                  {collection?.data?.results && collection.data.total_results}
                </li>
                <li className="bg-gray-200 hover:text-gray-200 py-3  px-4 justify-between hover:bg-greenHd rounded-xl flex">
                  <a onClick={() => setShow(5)}>Keywords:</a>{" "}
                  {keyword?.data?.results && keyword.data.total_results}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          {show === 1 && (tvShow.data === "null" || tvShow?.data?.error) ? (
            <h1>not</h1>
          ) : (
            tvShow?.data?.results?.map((item) => (
              <div className=" h-40 flex flex-row my-4 rounded-2xl mx-2  bg-greenHd">
                <div>
                  <img
                    src={imgSrc(item.poster_path, "w154")}
                    className="h-full  rounded-2xl"
                    alt
                  />
                </div>
                <div className=" flex flex-col mx-2  mb-3 text-gray-200 justify-center items-center ">
                  <h2 className="text-gray-200 text-xl"> {item.name} </h2>
                  <p>{item.first_air_date}</p>
                </div>
              </div>
            ))
          )}

          {show === 2 && (movie.data === "null" || movie.data.error) ? (
            <h1>not</h1>
          ) : (
            movie?.data?.results?.map((item) => (
              <div className=" h-40 flex flex-row my-4 rounded-2xl mx-2  bg-greenHd">
                <div>
                  <img
                    src={imgSrc(item.poster_path, "w154")}
                    className="h-full  rounded-2xl"
                    alt
                  />
                </div>
                <div className=" flex flex-col mx-2  mb-3 text-gray-200 justify-center items-center ">
                  <h2 className="text-gray-200 text-xl"> {item.title} </h2>
                  <p>{item.release_date}</p>
                </div>
              </div>
            ))
          )}

          {show === 3 && (people.data === "null" || people.data.error) ? (
            <h1>not</h1>
          ) : (
            people?.data?.results?.map((item) => (
              <div className=" h-40 flex flex-row my-4 rounded-2xl mx-2  bg-greenHd">
                <div>
                  <img
                    src={imgSrc(item.profile_path, "w154")}
                    className="h-full  rounded-2xl"
                    alt
                  />
                </div>
                <div className=" flex flex-col mx-2  mb-3 text-gray-200 justify-center items-center ">
                  <h2 className="text-gray-200 text-xl"> {item.name} </h2>
                  <p>{item.known_for_department}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
