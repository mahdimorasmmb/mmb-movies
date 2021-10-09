import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./component/Layout/Layout";
import Pages from "./pages/Pages";
import "./index.css";
import "antd/dist/antd.css";
import "swiper/swiper-bundle.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Pages />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
