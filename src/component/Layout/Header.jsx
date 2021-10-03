import React, { useState } from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import CelebritiesIcon from "../Icon/CelebritiesIcon";
import NewsIcon from "../Icon/NewsIcon";
import CommunityIcon from "../Icon/CommunityIcon";
import SearchIcon from "@mui/icons-material/Search";

import { Menu, Dropdown } from "antd";

const menu = (
  <Menu theme="dark">
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
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
    <header className=" flex  text-gray-200 p-4 justify-between  scrollbar-hide  ">
      <div className="flex items-center text-center">
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <div
            className={`text-white group flex flex-col cursor-pointer w-24 `}
          >
            <HomeIcon
              className={`mx-auto group-hover:animate-bounce $`}
              sx={{ fontSize: 30 }}
            />
            <p
              className={`uppercase let tracking-widest mx-auto text-xs opacity-0  group-hover:opacity-100 `}
            >
              Home
            </p>
          </div>
        </Dropdown>

        <Dropdown overlay={menu} placement="bottomLeft" arrow>
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

        <Dropdown overlay={menu} placement="bottomLeft" arrow>
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
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
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
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
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
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
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
      <div className="group flex items-center ">
        <TheatersIcon sx={{ fontSize: 120 }} />
        <h1 className="text-4xl text-gray-200 font-extrabold tracking-tighter ">
          Mmb Movies
        </h1>
      </div>
    </header>
  );
}
