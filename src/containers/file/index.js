import React, { Component } from "react";
import File from "../../components/file";

class FileContainer extends Component {
  render() {
    return (
      <div>
        <File {...this.props} />
      </div>
    );
  }
}

export default FileContainer;
