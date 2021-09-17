import "./Spotlight.css";
import React from "react";
import one from "./assets/RIDLT/1.png";
import two from "./assets/RIDLT/2.png";
import three from "./assets/RIDLT/3.png";

class Spotlight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Spotlight">
        <div className="bio">
          <span className="title-button">
            <h2>Rhode Island Unemployment Insurance Redesign</h2>
            <a onClick={() => this.props.open(2)}>
              <u>Back to Projects</u>
            </a>
          </span>

          <p>
            In the wake of the COVID-19 pandemic and ensuing economic crisis,
            state unemployment websites across the country were being inundated
            with thousands of additional unemployment claims. The Rhode Island
            Department of Labor and Training’s (RIDLT) website was no exception.
            In partnership with Amazon Web Services (AWS), We reimagined their
            20-year-old unemployment system, saving it from failure. We worked
            to lower call center volume, increase the speed of benefits
            delivery, and increase overall customer satisfaction. RIDLT was
            ecstatic with our timely and high-quality designs.
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

export default Spotlight;
