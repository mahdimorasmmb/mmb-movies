import {
  AppstoreOutlined,
  DesktopOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import imgSrc from "../../helpers/imgSrc";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useState } from "react";
import WatchList from "./WatchList";
import FavoriteList from "./FavoriteList";

export default function Profile() {
  const user = useSelector((state) => state.profile?.profile);
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section>
      <div className="bg-greenHl mx-10 mb-8 rounded-3xl ">
        <Row>
          <Col md={6} xs={12}>
            <div className=" m-10">
              {user ? (
                <Avatar
                  size={185}
                  src={`https://image.tmdb.org/t/p/w185/${user.avatar.tmdb.avatar_path}`}
                />
              ) : (
                <Avatar size={185} icon={<UserOutlined />} />
              )}
            </div>
          </Col>
          <Col md={18} xs={12}>
            <Row style={{ marginTop: "100px" }}>
              <Col md={12} xs={24} className="PanelUserName">
                <span className="text-gray-200 text-3xl">
                  {user ? (
                    `${user.username}`
                  ) : (
                    <Link to="/login">First Login/SignUp</Link>
                  )}
                </span>
              </Col>
              <Col md={12} xs={24} className="PanelLanguage">
                <span className="text-2xl text-gray-200">Language: &nbsp;</span>
                <span className="text-gray-200 text-xl font-extrabold bg-greenHd">
                  {user ? (
                    `${user.iso_639_1}`
                  ) : (
                    <Link to="/login">First Login/SignUp</Link>
                  )}
                </span>
              </Col>
              <Col className="mt-6">
                <div>
                  <span className="text-2xl text-gray-200">
                    UserID: &nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="text-gray-200 text-xl font-extrabold bg-greenHd">
                    {user ? (
                      `${user.id}`
                    ) : (
                      <Link to="/login">First Login/SignUp</Link>
                    )}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className=" w-full border-t-2  border-gray-400 ">
        <div className=" w-full pt-4 px-6  bg-greenHl flex ">
          <p
            onClick={() => {
              setActiveTab(1);
            }}
            className={` ${
              activeTab === 1
                ? "text-gray-200 border-l-4 border-gray-200"
                : "text-gray-500"
            }
             text-lg  font-bold   pl-2 pr-8  hover:text-gray-200 cursor-pointer  bg $`}
          >
            Watch List
          </p>
          <p
            onClick={() => {
              setActiveTab(2);
            }}
            className={`text-lg font-bold  pl-2 pr-8 hover:text-gray-200 cursor-pointer ${
              activeTab === 2
                ? "text-gray-200 border-l-4 border-gray-200"
                : "text-gray-500"
            }`}
          >
            Favorite List
          </p>
        </div>
        <div className={`${activeTab === 1 ? "block" : "hidden"}   px-5 py-8 `}>
          <WatchList xs={12} md={2} lg={2} />
        </div>
        <div
          className={`   justify-center items-center rounded-lg ${
            activeTab === 2 ? "flex flex-col" : "hidden"
          }`}
        >
          <FavoriteList />
        </div>
      </div>
    </section>
  );
}
