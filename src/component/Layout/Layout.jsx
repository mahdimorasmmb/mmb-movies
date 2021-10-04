import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      {/* <main>{children}</main>
      <footer>Footer</footer> */}
    </>
  );
}
