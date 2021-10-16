import React from "react";
import useMovieDB from "../hooks/useMovieDB";

export default function YoutubeEmbed({ src }) {
  return (
    <div className="p-10 my-8 w-3/6 h-96 bg-greenHl rounded-3xl ">
      <iframe
        src={`https://www.youtube.com/embed/${src}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="w-full h-full rounded-3xl"
      />
    </div>
  );
}
