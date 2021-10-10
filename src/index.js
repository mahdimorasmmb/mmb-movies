import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "./component/Layout/Layout";
import Pages from "./pages/Pages";
import "./index.css";
import "antd/dist/antd.css";
import "swiper/swiper-bundle.min.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Pages />
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
