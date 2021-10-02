import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./component/Layout/Layout";
import Pages from "./pages/Pages";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Pages />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
