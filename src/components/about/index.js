import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    const root = {
      width: "90%",
      margin: "auto",
      position: "absolute",
      top: "48%",
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
    const body = {
      textAlign: "left",
      marginTop: "25px"
    };

    const heading = {
      marginTop: "20px",
      fontSize: "16px",
      fontWeight: "400",
      color: "#f2f2f2",
      marginBottom: "0px"
    };
    const paragraph = {
      marginTop: "5px",
      fontSize: "13px",
      fontWeight: "300"
    };
    const link = {
      color: "#fff"
    };
    const backBtn = {
      marginTop: "10px",
      color: "#fff",
      backgroundColor: "transparent",
      border: "1px solid #fff",
      borderRadius: "20px",
      padding: "5px 30px"
    };
    return (
      <div style={root}>
        <h1 style={title}>
          Welcome to <span style={bold}>Any Share</span>
        </h1>
        <h3 style={subTitle}>Share encrypted files for FREE</h3>
        <h3 style={subTitle2}>Automatically deleted once accessed</h3>
        <div style={body}>
          <h4 style={heading}>What is Any Share? </h4>
          <p style={paragraph}>
            Any Share is a FREE file sharing platform. Here you are not needed
            to login or register to share any file. All the files you share will
            be 100% encrypted in database of{" "}
            <a style={link} href="https://www.file.io/">
              file.io
            </a>
            {"  "}All the files will automatically be deleted once they are
            accessed or the expiration date (<u>14days</u>) passes.
          </p>

          <h4 style={heading}>
            Are there log files or any backups of the file after it is deleted?
          </h4>
          <p style={paragraph}>
            No, it is anonymous and we erase everything. Our log files contain
            no identifying information. There are no backups, and all files are
            stored encrypted.
          </p>

          <h4 style={heading}>What kinds of files can I share?</h4>
          <p style={paragraph}>
            No illegal or copyrighted content is allowed. By using file.io you
            agree to the Terms of Service
          </p>

          <h4 style={heading}>Who are you and how can I trust you?</h4>
          <p style={paragraph}>
            Any Share is an extended project from{" "}
            <a style={link} href="https://www.file.io/">
              file.io
            </a>
            {"  "}. It was created simply out of the joy of trying to build cool
            things on the internet, and we thought it may be useful for others.
            We take privacy very seriously and do not save any data once it has
            been deleted.
          </p>

          <h4 style={heading}>Cow can I contact the developer?</h4>
          <p style={paragraph}>
            I would love to hear from you,{" "}
            <a style={link} href="http://github.com/RajeshJ3">
              GitHub.com/RajeshJ3
            </a>
          </p>
          <div>
            <Link to="/">
              <button style={backBtn}>Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
