import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {BrowserRouter} from "../_snowpack/pkg/react-router-dom.js";
import Routes from "./routes.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Routes, null)), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
