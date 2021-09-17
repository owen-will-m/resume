import "./Projects.css";
import React from "react";
import ridlt from "./assets/RIDLT/1.png";
import ihp from "./assets/HEALTH/1.png";
import proc from "./assets/processing.png";
import lcmap from "./assets/lcmaps.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Projects">
        <h2>Design Projects</h2>
        <div className="row2" onClick={() => this.props.open(5)}>
          <span className="img-container">
            <img src={ridlt} />
          </span>
          <p>
            <span className="title-button">
              <b> Rhode Island Unemployment Portal Redesign</b>
              <button>Open</button>
            </span>
            <br></br>
            <br></br>
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
        </div>
        <div className="row2" onClick={() => this.props.open(6)}>
          <span className="img-container">
            <img src={ihp} />
          </span>
          <p>
            <span className="title-button">
              <b> Healthcare Management Portal</b>
              <button>Open</button>
            </span>
            <br></br>
            <br></br>
            It’s no secret: the American health insurance system is a train
            wreck. We designed an experience that revamps the entire system.
            This software allows businesses to take healthcare into their own
            hands with their employees, rather than relying on expensive and
            inefficient insurance companies that leave their employees
            dissatisfied and underserved. With our health portal, businesses can
            manage their employees’ healthcare directly, making sure they’re
            delivered adequate care.
          </p>
        </div>
        <h2>Development Projects</h2>
        <div className="row2" onClick={() => this.props.open(7)}>
          <span className="img-container">
            {" "}
            <img src={proc} />
          </span>
          <p>
            <span className="title-button">
              <b>Processing JS Projects</b>
              <button>Open</button>
            </span>
            <br></br>
            <br></br>
            Javascript is certainly a forgotten medium for artwork. However,
            interactivity in digital artwork can amplify its impact on the user.
            With Processing, I created several small pieces of interactive
            artwork during my pandemic down-time. My goal in these projects was
            to explore the ways that nature can be imitated using relatively
            simple mathematics and computer graphics. I sought to make a
            relaxing experience for the user through natural imagery.
          </p>
        </div>
        <div
          className="row2"
          onClick={() =>
            window.open(
              "http://corps-discovery-online.s3-us-west-2.amazonaws.com/index.html",
              "_blank"
            )
          }
        >
          <img src={lcmap} />
          <p>
            <span className="title-button">
              <b>Lewis & Clark Expedition Maps</b>
              <button>Open</button>
            </span>
            <br></br>
            <br></br>
            When a college is named after two pertinent historical figures, it
            needs to have some way to take account of them! That’s why I
            collaborated with my college’s library, IT staff, and history
            students to make a webmap that documents the Lewis & Clark
            Expedition. Leveraging React and Leaflet, this Javascript
            application will teach you all about their expedition through
            step-by-step waypoints.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
