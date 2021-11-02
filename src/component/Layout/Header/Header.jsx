import React, { useEffect, useState } from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import HomeIcon from "@mui/icons-material/Home";
import CelebritiesIcon from "../../Icon/CelebritiesIcon";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppstoreOutlined,
  CloseOutlined,
  MailOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Menu, Dropdown, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import profileAction from "../../../store/actions/profileAction";
import imgSrc from "../../../helpers/imgSrc";
import { useHistory } from "react-router";

import searchAction from "../../../store/actions/searchAction";
import MovieItems from "./MovieItems";
import TvItems from "./TvItems";
import CelebritiesItem from "./CelebritiesItem";
import ItemsProfile from "./ItemsProfile";
import MovieItemMobile from "./MovieItemMobile";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();
  const profile = useSelector((state) => state.profile?.profile);
  useEffect(() => {
    profileAction.getProfile();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearch = () => {
    console.log(searchInput);
    searchAction.searchHeader(searchInput, history, handleCancel);
  };

  return (
    <header className="flex  text-gray-200  bg-greenHl items-center  lg:justify-around  justify-between shadow-3xl px-8    ">
      <Dropdown
        overlay={<MovieItemMobile setIsModalVisible={setIsModalVisible} />}
        trigger={["click"]}
      >
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
        <div className="flex flex-row justify-around w-2/3">
          <div
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
          </div>
          <Dropdown
            className="hidden lg:block"
            overlay={MovieItems}
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
            overlay={TvItems}
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
            overlay={CelebritiesItem}
            placement="bottomRight"
            arrow
          >
            <div className="group flex flex-col cursor-pointer w-24">
              <CelebritiesIcon
                className={` w-8 h-8 fill-current text-white  mx-auto group-hover:animate-bounce `}
              />
              <p
                className={`uppercase let tracking-widest mx-auto text-xs opacity-0   group-hover:opacity-100 `}
              >
                People
              </p>
            </div>
          </Dropdown>

          <div
            onClick={setIsModalVisible}
            className=" hidden lg:flex group  flex-col cursor-pointer w-24 text-center "
          >
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
        </div>
        <Modal
          theme="dark"
          bodyStyle={{ background: "#042727" }}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          footer={null}
        >
          <div className="container flex mx-auto">
            <div className="flex border-2 rounded">
              <button
                onClick={handleSearch}
                className="flex items-center justify-center px-4 border-r"
              >
                <svg
                  className="w-6 h-6 text-gray-200"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                className="px-4 py-2 w-80 text-xl text-gray-900"
                placeholder="Search..."
              />
            </div>
          </div>
        </Modal>
      </div>
      {profile ? (
        <Dropdown
          className="mr-10 bg-greenHl"
          overlay={<ItemsProfile history={history} />}
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
          <button className=" inline-block  px-3 py-2 text-sm bg-gray-200 text-greenHd rounded-lg font-semibold uppercase lg:w-auto hover:text-gray-200 hover:bg-greenHd">
            sign in
          </button>
        </div>
      )}
    </header>
  );
}
