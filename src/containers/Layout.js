import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <center>{this.props.children}</center>
      </React.Fragment>
    );
  }
}

export default Layout;
