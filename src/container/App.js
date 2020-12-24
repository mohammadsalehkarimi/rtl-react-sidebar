/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Information } from "../components/MyInformation";

export const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Information} />
    </BrowserRouter>
  );
};
