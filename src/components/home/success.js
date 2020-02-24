import React, { Component } from "react";

class Success extends Component {
  state = {
    link: null
  };
  render() {
    const copyToClipboard = () => {
      const el = this.textArea;
      el.select();
      document.execCommand("copy");
      alert("Link copied!");
    };
    return (
      <div>
        <p className="click-to-copy" onClick={copyToClipboard}>
          Copy Link
        </p>
        <p>Expiry: {this.props.data.expiry}</p>
        <textarea
          readOnly={true}
          style={{ opacity: 0, userSelect: "none" }}
          cols="1"
          rows="1"
          ref={textarea => (this.textArea = textarea)}
          defaultValue={`${this.props.data.link}`}
        />
      </div>
    );
  }
}

export default Success;
