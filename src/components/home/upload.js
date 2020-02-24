import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  state = {
    file: null,
    loading: false,
    status: false
  };

  handleChange = e => {
    this.setState({
      file: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const file = this.state.file;
    if (file) {
      this.uploadFile();
    } else {
      console.log("Please select a file first!");
    }
  };

  uploadFile = () => {
    console.log(this.state.file);

    axios({
      url: "https://file.io",
      method: "POST",
      data: {
        file: this.state.file
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br />
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="file" onChange={e => this.handleChange(e)} />
          {this.state.loading ? (
            <button disabled type="submit">
              Upload
            </button>
          ) : (
            <button type="submit" onClick={e => this.handleSubmit(e)}>
              Upload
            </button>
          )}
        </form>
        <div>
          {this.state.status ? <p>Uploaded!</p> : <p>Not uploaded yet!</p>}
        </div>
      </div>
    );
  }
}

export default Upload;
