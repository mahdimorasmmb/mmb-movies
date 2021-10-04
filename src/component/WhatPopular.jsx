import React, { useState } from "react";

export default function WhatPopular() {
  const [active, setActive] = useState({
    Streaming: true,
  });
  return (
    <div className="flex space-x-20">
      <h2 className="text-gray-100 text-xl">What's Popular</h2>
      <ul className="flex list-none flex-nowrap  bg-gray-200 px-3 py-3 rounded-full text-gray-900 ">
        <li>
          <a
            onClick={() => {
              setActive({});
              setActive({ Streaming: true });
            }}
            className={`    text-sm font-bold py-3 px-4 rounded-full transition ease-in duration-700  ${
              active.Streaming
                ? "text-gray-50 bg-gradient-to-r  from-greenHd to-greenHl "
                : ""
            }`}
            href="#"
          >
            Streaming
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setActive({});
              setActive({ OnTv: true });
            }}
            className={`    text-sm font-bold py-3 px-4 rounded-full transition ease-in duration-700  ${
              active.OnTv
                ? "text-gray-50 bg-gradient-to-r  from-greenHd to-greenHl "
                : ""
            }`}
            href="#"
          >
            On TV
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setActive({});
              setActive({ ForR: true });
            }}
            className={`    text-sm font-bold py-3 px-4 rounded-full transition ease-in duration-700  ${
              active.ForR
                ? "text-gray-50 bg-gradient-to-r  from-greenHd to-greenHl "
                : ""
            }`}
            href="#"
          >
            For Rent
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setActive({});
              setActive({ InTH: true });
            }}
            className={`    text-sm font-bold py-3 px-4 rounded-full transition ease-in duration-700  ${
              active.InTH
                ? "text-gray-50 bg-gradient-to-r  from-greenHd to-greenHl "
                : ""
            }`}
            href="#"
          >
            In Theaters
          </a>
        </li>
      </ul>
    </div>
  );
}
