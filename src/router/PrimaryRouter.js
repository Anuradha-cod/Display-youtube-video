import React, { lazy, Suspense } from "react";
import SingleImageSearch from "../component/SingleImageSearch/SingleImageSearch";
import ViewVideoSearch from "../component/VideoSearch/ViewVideoSearch";
import ViewImage from "../component/MultiImageSearch/ViewImage";
import ViewSearch from "../component/MultiImageSearch/ViewSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import YoutubeLink from "../Youtube/YoutubeLink";

// const YoutubeLink = lazy(
//   () =>
//     new Promise((resolve, reject) =>
//       setTimeout(() => resolve(import("../Youtube/YoutubeLink")), 10000)
//     )
// );
const PrimaryRouter = () => {
  return (
    <div>
      <Router>
        <Home />
        <Switch>
          <Route exact path="/" component={SingleImageSearch} />
          <Route path="/ViewVideoSearch" component={ViewVideoSearch} />
          <Route path="/youtube" component={YoutubeLink} />
          <Route path="/image" component={ViewSearch} />
          {/* <Route
            path="/youtube"
            component={() => {
              <Suspense fallback={<div>Loading...</div>}>
                <YoutubeLink />
              </Suspense>;
            }} */}
        </Switch>
      </Router>
    </div>
  );
};

export default PrimaryRouter;
