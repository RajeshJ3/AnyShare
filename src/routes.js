import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/home";
import AboutContainer from "./containers/about";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={AboutContainer} />
      </BrowserRouter>
    );
  }
}

export default Routes;
