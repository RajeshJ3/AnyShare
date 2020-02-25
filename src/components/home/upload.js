import React, { Component } from "react";
import axios from "axios";
import Success from "./success";
import { Link } from "react-router-dom";

class Upload extends Component {
  state = {
    loading: false,
    success: false,
    key: null,
    expiry: null,
    progress: 0
  };

  uploadFile = e => {
    this.setState({
      loading: true,
      success: false,
      key: null,
      expiry: null,
      progress: 0
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
          progress: 0,
          loading: false,
          success: true,
          key: res.data.key,
          expiry: res.data.expiry
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          success: false,
          key: null,
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
          <Link to="/about">
            <button className="btn-upload" type="submit">
              Learn more
            </button>
          </Link>
        </div>
        <div>{this.state.success ? <Success data={this.state} /> : null}</div>
      </div>
    );
  }
}

export default Upload;
