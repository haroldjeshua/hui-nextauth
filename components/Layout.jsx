import { Main } from "next/document";
import React from "react";
import SideMenu from "./SideMenu";

const Layout = () => {
  return (
    <div className="pt-[64px] flex w-full">
      <SideMenu />
      <Main />
    </div>
  );
};

export default Layout;
