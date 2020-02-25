import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/home";
import AboutContainer from "./containers/about";
import FileContainer from "./containers/file";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route exact path="/share/:key" component={FileContainer} />
      </BrowserRouter>
    );
  }
}

export default Routes;
