import React, { Component } from "react";
import { Link } from "react-router-dom";

class File extends Component {
  render() {
    const root = {
      width: "100%",
      position: "absolute",
      top: "43%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
    const title = {
      fontSize: "19px",
      fontWeight: "300",
      marginBottom: "5px"
    };
    const subTitle = {
      marginTop: "0px",
      fontSize: "16px",
      fontWeight: "250"
    };
    const continueBtn = {
      marginRight: "20px",
      color: "#0082c8",
      fontWeight: "500",
      backgroundColor: "#fff",
      border: "1px solid #fff",
      borderRadius: "20px",
      padding: "5px 30px"
    };
    const backBtn = {
      marginLeft: "20px",
      color: "#fff",
      backgroundColor: "transparent",
      border: "1px solid #fff",
      borderRadius: "20px",
      padding: "5px 30px"
    };
    const handleContinue = () => {
      window.location.replace(`https://file.io/${this.props.match.params.key}`);
    };
    return (
      <div style={root}>
        <p style={title}>Are you sure to access the file?</p>
        <p style={subTitle}>Once accessed, it'll be deleted.</p>
        <div
          style={{
            Overflow: "hidden",
            alignItems: "center",
            marginTop: "30px"
          }}
        >
          <span>
            <button style={continueBtn} onClick={handleContinue}>
              Continue
            </button>
          </span>
          <span>
            <Link to="/">
              <button style={backBtn}>Back</button>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default File;
