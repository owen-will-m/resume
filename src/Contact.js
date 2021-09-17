import "./Contact.css";
import React from "react";
import { ToastContainer, toast } from 'react-toast'

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
            <span onClick={()=>toast.info("copied to clipboard")}>owen.will.m@gmail.com<br></br></span>
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
