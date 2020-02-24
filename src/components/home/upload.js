import React, { Component } from "react";
import axios from "axios";
import Success from "./success";

class Upload extends Component {
  state = {
    file: null,
    loading: false,
    success: false,
    link: null,
    expiry: null,
    progress: 0
  };

  uploadFile = e => {
    this.setState({
      loading: true
    });
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post("https://file.io/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          this.setState({
            ...this.state,
            progress: Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )
          });
        }
      })
      .then(res => {
        this.setState({
          loading: false,
          success: true,
          link: res.data.link,
          expiry: res.data.expiry
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          success: false,
          link: null,
          expiry: null
        });
      });
  };

  render() {
    return (
      <div>
        <br />
        {this.state.loading ? (
          <button disabled className="custom-file-input-loading" name="loading">
            {this.state.progress}% Uploaded
          </button>
        ) : (
          <input
            className="custom-file-input"
            type="file"
            name="file"
            onChange={e => this.uploadFile(e)}
          />
        )}
        <div style={{ paddingTop: "10px" }}>
          <button className="btn-upload" type="submit">
            Learn more
          </button>
        </div>
        <div>{this.state.success ? <Success data={this.state} /> : null}</div>
      </div>
    );
  }
}

export default Upload;
