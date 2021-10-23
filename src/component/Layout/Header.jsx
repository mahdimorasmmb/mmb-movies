import React, { useEffect, useState } from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import CelebritiesIcon from "../Icon/CelebritiesIcon";
import NewsIcon from "../Icon/NewsIcon";
import CommunityIcon from "../Icon/CommunityIcon";
import SearchIcon from "@mui/icons-material/Search";
import { MenuOutlined } from "@ant-design/icons";

import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import profileAction from "../../store/actions/profileAction";
import imgSrc from "../../helpers/imgSrc";
import { useHistory } from "react-router";
import MyMenu from "../MyMenu";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import classes from "./header.module.scss";

const itemMene = (
  <Menu theme="dark">
    <Menu.Item>
      <Link to="/">Home</Link>
    </Menu.Item>
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
  const history = useHistory();
  const profile = useSelector((state) => state.profile?.profile);
  useEffect(() => {
    profileAction.getProfile();
  }, []);
  const movieItems = (
    <Menu theme="dark" className={classes.menu}>
      <Menu.Item className={classes.item}>
        <Link to="/popular-movie">Popular Movie</Link>
      </Menu.Item>
      <Menu.Item className={classes.item}>
        <Link to="/top-rated-movie">Top Rated</Link>{" "}
      </Menu.Item>
    </Menu>
  );

  const tvItems = (
    <Menu theme="dark" className={classes.menu}>
      <Menu.Item className={classes.item}>
        <Link to="/popular-tv">Popular TV</Link>{" "}
      </Menu.Item>
      <Menu.Item className={classes.item}>
        <Link to="/top-rated-tv">Top Rated TV</Link>{" "}
      </Menu.Item>
      <Menu.Item className={classes.item}>
        <Link to="/airing-today-tv">Airing Today</Link>{" "}
      </Menu.Item>
      <Menu.Item className={classes.item}>
        <Link to="/on-the-air-tv">On The Air</Link>{" "}
      </Menu.Item>
    </Menu>
  );

  const CelebritiesItem = (
    <Menu className={classes.menu}>
      <Menu.Item className={classes.item}>Popular </Menu.Item>
    </Menu>
  );

  const itemsProfile = (
    <Menu theme="dark">
      <Menu.Item>
        <button
          onClick={() => {
            profileAction.logOut(history);
          }}
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="flex  text-gray-200  bg-greenHl items-center  lg:justify-around  justify-between shadow-3xl px-8    ">
      <Dropdown overlay={itemMene} trigger={["click"]}>
        <div className="  lg:hidden">
          <MenuOutlined style={{ fontSize: 40 }} />
        </div>
      </Dropdown>
      <div className=" lg:w-full flex  items-center lg:justify-start  justify-between text-center  ">
        <div className="flex flex-row items-center">
          <div className="hidden lg:block">
            <Link className="text-gray-200 hover:text-gray-200" to="/">
              {" "}
              <TheatersIcon sx={{ fontSize: 90 }} />
            </Link>
          </div>
          <h2 className="lg:text-2xl sm:block text-xl ml-2  text-gray-200 lg:font-extrabold  ">
            <Link className="text-gray-200 hover:text-gray-200" to="/">
              MmbMovie
            </Link>
          </h2>
        </div>
        <div className="flex flex-row">
          <Dropdown
            className="hidden lg:block"
            overlay={movieItems}
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
            overlay={tvItems}
            placement="bottomLeft"
            arrow
          >
            <div className="group flex flex-col cursor-pointer w-24">
              <LiveTvIcon
                className={` w-8 h-8 fill-current text-white  mx-auto group-hover:animate-bounce `}
              />
              <p
                className={`uppercase let tracking-widest mx-auto text-xs opacity-0   group-hover:opacity-100 `}
              >
                Tv
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
        {/* <div
          className={`text-white  group  flex-col cursor-pointer w-24 hidden lg:flex `}
        >
          <HomeIcon
            className={` mx-auto group-hover:animate-bounce $`}
            sx={{ fontSize: 30 }}
          />
          <p
            className={`uppercase let tracking-widest mx-auto text-xs opacity-0  group-hover:opacity-100 `}
          >
            <Link to="/">Home</Link>
          </p>
        </div> */}

        {/* <Dropdown
          className="hidden lg:block"
          overlay={CelebritiesItem}
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
              CelebritiesIcon
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
        </Dropdown> */}
      </div>
      {profile ? (
        <Dropdown
          overlay={itemsProfile}
          placement="bottomLeft"
          trigger={["click"]}
          arrow
        >
          <img
            title={profile.username}
            className="inline object-cover w-12 h-12 rounded-full mr-5"
            src={imgSrc(profile.avatar.tmdb.avatar_path, "w185")}
            alt={profile.username}
          />
        </Dropdown>
      ) : (
        <div className="flex w-full items-center justify-end   ">
          <Link
            to="/login"
            className=" mr-2 inline-block px-3 py-2 text-sm bg-gray-200 text-greenHd rounded-lg font-semibold uppercase lg:w-auto hover:text-gray-200 hover:bg-greenHd"
          >
            login
          </Link>
          {/* <button className=" inline-block  px-3 py-2 text-sm bg-gray-200 text-greenHd rounded-lg font-semibold uppercase lg:w-auto hover:text-gray-200 hover:bg-greenHd">
            sign in
          </button> */}
        </div>
      )}
    </header>
  );
}
