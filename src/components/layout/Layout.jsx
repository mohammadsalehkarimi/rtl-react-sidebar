/** @format */

import React from "react";
import { ToggleDasboardBtn } from "../toggleDashboardBtn/ToggleDashboardBtn";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout = (props) => {
  return (
    <div className='container-fluid'>
      <main id='mainContent'>{props.children}</main>
      <Sidebar />
      <ToggleDasboardBtn />
    </div>
  );
};
