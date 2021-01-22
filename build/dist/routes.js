import React from "../_snowpack/pkg/react.js";
import {Route, Switch} from "../_snowpack/pkg/react-router.js";
import Home from "./Home.js";
import Post from "./Post.js";
const Routes = () => /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  path: "/",
  exact: true,
  component: Home
}), /* @__PURE__ */ React.createElement(Route, {
  path: "/post/:id",
  component: Post
}));
export default Routes;
