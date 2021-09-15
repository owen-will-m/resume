import "./Resume.css";
import React from "react";

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Resume">
        <div className="titleButton">
          <h2>Current Resume - September 2021</h2>
          <button>Download</button>
        </div>

        <div className="resume-screenshot"></div>
      </div>
    );
  }
}

export default Resume;
