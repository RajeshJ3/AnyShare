import React, { Component } from "react";
import Routes from "./routes";
import Layout from "./containers/Layout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default App;
