import React from "react";
import imgSrc from "../helpers/imgSrc";
import img from "../img/blank-profile.png";

export default function CardPeople({ item }) {
  return (
    <div className=" m-2 rounded-xl bg-gray-200 flex flex-col shadow">
      <img
        className="w-auto rounded-t-xl"
        src={item.profile_path ? imgSrc(item.profile_path, "w185") : img}
        alt="avatar"
      />
      <div className="text-center flex flex-col p-2">
        <span className="text-base font-bold"> {item.name}</span>
        <span className="text-xs italic">{item.known_for_department}</span>
      </div>
    </div>
  );
}
