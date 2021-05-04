import React, { lazy, Suspense } from "react";
import SingleImageSearch from "../component/SingleImageSearch/SingleImageSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import YoutubeLink from "../Youtube/YoutubeLink";

const PrimaryRouter = () => {
  return (
    <div>
      <Router>
        <Home />
        <Switch>
          <Route exact path="/" component={YoutubeLink} />
          <Route path="/image" component={SingleImageSearch} />
        </Switch>
      </Router>
    </div>
  );
};

export default PrimaryRouter;
