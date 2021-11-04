import React from "react";
import { useSelector } from "react-redux";
import Message from "../Message";

import Footer from "./Footer";
import Header from "./Header/Header";
import Main from "./Main";

export default function Layout({ children }) {
  const error = useSelector((state) => state.error);
  return (
    <>
      <Header />

      <Main>
        <Message
          message={error?.message}
          isActive={error?.isActive}
          type={error?.type}
        />
        {children}
      </Main>

      <Footer />
    </>
  );
}
