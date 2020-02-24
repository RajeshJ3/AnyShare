import React, { Component } from "react";
import Upload from "./upload";

class Home extends Component {
  render() {
    const root = {
      width: "100%",
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
    const title = {
      fontSize: "28px",
      fontWeight: "200"
    };
    const subTitle = {
      fontSize: "13px",
      fontWeight: "300",
      marginBottom: "0px"
    };
    const subTitle2 = {
      marginTop: "2px",
      fontSize: "13px",
      fontWeight: "300"
    };
    const bold = {
      fontWeight: "300"
    };
    return (
      <div style={root}>
        <h1 style={title}>
          Welcome to <span style={bold}>Any Share</span>
        </h1>
        <h3 style={subTitle}>Share encrypted files for FREE</h3>
        <h3 style={subTitle2}>Automatically deleted once accessed</h3>
        <Upload />
      </div>
    );
  }
}

export default Home;
