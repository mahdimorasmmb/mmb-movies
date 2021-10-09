import React, { useState } from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import CelebritiesIcon from "../Icon/CelebritiesIcon";
import NewsIcon from "../Icon/NewsIcon";
import CommunityIcon from "../Icon/CommunityIcon";
import SearchIcon from "@mui/icons-material/Search";
import { MenuOutlined } from "@ant-design/icons";

import { Menu, Dropdown } from "antd";

const itemMene = (
  <Menu theme="dark">
    <Menu.Item>Home</Menu.Item>
    <Menu.Item>Movie</Menu.Item>
    <Menu.Item>Celebrities</Menu.Item>
    <Menu.Item>News</Menu.Item>
    <Menu.Item>Community</Menu.Item>
    <Menu.Item>Search</Menu.Item>
  </Menu>
);

const menu = (
  <Menu theme="dark">
    <Menu.Item>
      <Dropdown
        overlay={
          <Menu className="absolute left-24 text-lg">
            <Menu.Item></Menu.Item>
          </Menu>
        }
        placement="bottomLeft"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Dropdown>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default function Header() {
  return (
    <header className="flex  text-gray-200  bg-greenHl items-center  lg:justify-around  justify-between shadow-3xl px-8  py-2  ">
      <Dropdown overlay={itemMene} trigger={["click"]}>
        <div className="  lg:hidden">
          <MenuOutlined style={{ fontSize: 40 }} />
        </div>
      </Dropdown>
      <div className=" lg:w-full flex  items-center lg:justify-around  justify-between text-center  ">
        <h2 className="lg:text-2xl sm:block text-xl ml-2  text-gray-200 lg:font-extrabold  ">
          MmbMovie
        </h2>
        <div className="hidden lg:block">
          <TheatersIcon sx={{ fontSize: 90 }} />
        </div>
        <Dropdown
          className="hidden lg:block"
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <div
            className={`text-white  group flex flex-col cursor-pointer w-24 `}
          >
            <HomeIcon
              className={` mx-auto group-hover:animate-bounce $`}
              sx={{ fontSize: 30 }}
            />
            <p
              className={`uppercase let tracking-widest mx-auto text-xs opacity-0  group-hover:opacity-100 `}
            >
              Home
            </p>
          </div>
        </Dropdown>

        <Dropdown
          className="hidden lg:block"
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <div className="group flex flex-col cursor-pointer w-24">
            <MovieIcon
              className={`mx-auto group-hover:animate-bounce `}
              sx={{ fontSize: 30, display: "block" }}
            />
            <p
              className={`uppercase let tracking-widest mx-auto text-xs opacity-0   group-hover:opacity-100 `}
            >
              Movie
            </p>
          </div>
        </Dropdown>

        <Dropdown
          className="hidden lg:block"
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <div className="group flex flex-col cursor-pointer w-24">
            <CelebritiesIcon
              className={` w-8 h-8 fill-current text-white  mx-auto group-hover:animate-bounce `}
            />
            <p
              className={`uppercase let tracking-widest mx-auto text-xs opacity-0   group-hover:opacity-100 `}
            >
              Celebrities
            </p>
          </div>
        </Dropdown>
        <Dropdown
          className="hidden lg:block"
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <div className="group flex flex-col cursor-pointer w-24">
            <NewsIcon
              className={`mx-auto w-8 h-8 group-hover:animate-bounce `}
            />
            <p
              className={`uppercase let tracking-widest mx-auto text-xs opacity-0   group-hover:opacity-100 `}
            >
              News
            </p>
          </div>
        </Dropdown>
        <Dropdown
          className="hidden lg:block"
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <div className="group flex flex-col cursor-pointer w-24">
            <CommunityIcon
              className={` mx-auto w-9 h-9 fill-current text-white group-hover:animate-bounce `}
            />
            <p
              className={`uppercase let tracking-widest mx-auto text-xs opacity-0   group-hover:opacity-100  `}
            >
              Community
            </p>
          </div>
        </Dropdown>
        <Dropdown
          className="hidden lg:block"
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <div className="group flex flex-col cursor-pointer w-24 text-center ">
            <SearchIcon
              className={`mx-auto group-hover:animate-bounce `}
              sx={{ fontSize: 30 }}
            />
            <p
              className={`uppercase let tracking-widest mx-auto text-xs opacity-0  group-hover:opacity-100 `}
            >
              Search
            </p>
          </div>
        </Dropdown>
      </div>
      <div className="flex w-full items-center justify-end   ">
        <button className=" mr-2 inline-block px-3 py-2 text-sm bg-gray-200 text-greenHd rounded-lg font-semibold uppercase lg:w-auto hover:text-gray-200 hover:bg-greenHd">
          login
        </button>
        <button className=" inline-block  px-3 py-2 text-sm bg-gray-200 text-greenHd rounded-lg font-semibold uppercase lg:w-auto hover:text-gray-200 hover:bg-greenHd">
          sign in
        </button>
      </div>
    </header>
  );
}
