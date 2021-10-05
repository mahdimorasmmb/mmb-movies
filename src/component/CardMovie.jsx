import Item from "antd/lib/list/Item";
import React from "react";
import imgSrc from "../helpers/imgSrc";

import { StarTwoTone } from "@ant-design/icons";

export default function CardMovie({ movie }) {
  return (
    <div class="wrapper h-full   py-1  bg-transparent antialiased text-gray-900">
      <div>
        <img
          src={imgSrc(movie.poster_path, "w780")}
          className="h-full  object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative text px-4 -mt-3">
          <div className="bg-greenHd p-6 rounded-lg shadow-lg">
            <p className="text-sm text-center font-bold  text-gray-100">
              {movie.name
                ? movie.name.length > 25
                  ? `${movie.name.substring(0, 25)}...`
                  : movie.name
                : movie.title.length > 25
                ? `${movie.title.substring(0, 25)}...`
                : movie.title}
            </p>

            <div className=" flex justify-between">
              <button className=" px-4 text-center font-bold   text-gray-100 bg-greenHl   rounded-lg hover:text-greenHl hover:bg-gray-100">
                More ...
              </button>
              <h2 className="text-yellow-400 font-extrabold text-2xl">
                <StarTwoTone twoToneColor="#FBBF24" />
                {movie.vote_average}
              </h2>
            </div>
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
