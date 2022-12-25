import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ReactGA from "react-ga"

import Layout from "./component/Layout/Layout";
import Pages from "./pages/Pages";
import "./index.css";
import "antd/dist/antd.css";
import "swiper/swiper-bundle.min.css";

import { Provider } from "react-redux";
import { store } from "./store/store";
import ErrorBoundary from "./Error/ErrorBoundary";
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'G-642KTQY6PD'
}


TagManager.initialize(tagManagerArgs)







ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
          <Pages />
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
