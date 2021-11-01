import React from "react";
import { Link } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import Message from "../Message";
import { useSelector } from "react-redux";

export default function Footer() {
  return (
    <footer className="flex mt-2 justify-center px-4 shadow-xl text-gray-100 bg-greenHl  ">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl text-gray-200">
          Join 31,000+ other and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="m-1 p-2 appearance-none text-gray-200 text-sm focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="w-full m-1 p-2 text-sm bg-greenHl rounded-lg font-semibold uppercase lg:w-auto hover:text-greenHl hover:bg-gray-100">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div className="hidden lg:flex items-center">
            <Link className="text-gray-200 hover:text-gray-200" to="/">
              {" "}
              <TheatersIcon sx={{ fontSize: 90 }} />
            </Link>
            <h2 className="lg:text-2xl sm:block text-xl ml-2  text-gray-200 lg:font-extrabold  ">
              <Link className="text-gray-200 hover:text-gray-200" to="/">
                MmbMovie
              </Link>
            </h2>
          </div>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a href="#" className="px-4 text-sm">
                About
              </a>
              <a href="#" className="px-4 text-sm">
                Blog
              </a>
              <a href="#" className="px-4 text-sm">
                News
              </a>
              <a href="#" className="px-4 text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
