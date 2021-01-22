import React from "react";
import {Route, Switch} from "react-router";
import Home from "./Home";
import Post from "./Post";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/post/:id" component={Post} />
    </Switch>
)

export default Routes
