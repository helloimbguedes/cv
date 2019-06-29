import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "../un-atomic/_templates/homepage";

const Router = () => (
  <BrowserRouter>
    <Route path="/" exact component={Homepage} />
  </BrowserRouter>
);

export default Router;
