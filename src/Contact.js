import "./Contact.css";
import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Contact">
        <div className="col1">
          {" "}
          Email <br></br> LinkedIn
        </div>
        <div className="col2">
          <span
            onClick={() => {
              navigator.clipboard.writeText("owen.will.m@gmail.com");
            }}
          >
            owen.will.m@gmail.com - copy to clipboard <br></br>{" "}
          </span>

          <a
            href="https://www.linkedin.com/in/william-owen-241961139/"
            target="_blank"
          >
            Profile
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
