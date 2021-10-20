import React from "react";
import imgSrc from "../helpers/imgSrc";
import img from "../img/blank-profile.png";

export default function ReviewsPage({ info }) {
  return (
    <div className="bg-greenHl rounded-lg p-6">
      <div className="flex items-center space-x-6 mb-4">
        <img
          className="h-28 w-28 object-cover object-center rounded-full"
          src={
            info.author_details.avatar_path
              ? imgSrc(info.author_details.avatar_path, "w185")
              : img
          }
          alt="photo"
        />
        <div>
          <p className="text-xl text-gray-700 font-normal mb-1">
            {info.author}
          </p>
          <p className="text-base text-blue-600 font-normal">
            {info.author_details.name}
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray-400 leading-loose font-normal text-base">
          {info.content}
        </p>
      </div>
    </div>
  );
}

// <div>
// <img src={imgSrc(info.author_details.avatar_path, "w185")} />
// <h2>{info.author}</h2>
// <h3>{info.author_details.name}</h3>
// <p>{info.content}</p>
// </div>
