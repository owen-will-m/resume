import "./Spotlight.css";
import React from "react";
import one from "./assets/HEALTH/1.png";
import two from "./assets/HEALTH/2.png";
import three from "./assets/HEALTH/3.png";

class Spotlight2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Spotlight">
        <div className="bio">
          <span className="title-button">
            <h2>Healthcare Management Portal</h2>
            <a onClick={() => this.props.open(2)}>
              <u>Back to Projects</u>
            </a>
          </span>

          <p>
            It’s no secret: the American health insurance system is a train
            wreck. We designed an experience that revamps the entire system.
            This software allows businesses to take healthcare into their own
            hands with their employees, rather than relying on expensive and
            inefficient insurance companies that leave their employees
            dissatisfied and underserved. With our health portal, businesses can
            manage their employees’ healthcare directly, making sure they’re
            delivered adequate care.
          </p>
          <br></br>
          <div className="container">
            <img src={one}></img>
            <img src={two}></img>
            <img src={three}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Spotlight2;
