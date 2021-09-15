import "./Projects.css";
import React from "react";
import ridlt from "./assets/RIDLT/1.png";
import ihp from "./assets/HEALTH/1.png";


class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Projects">
        <h2>Design Projects</h2>
          <div className="row2" onClick={()=>this.props.open("name")}>
          <span className="img-container"><img src={ridlt} /></span>
            <p>
            <b>  Rhode Island Unemployment Portal Redesign</b>
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula quam in eros auctor, et lobortis velit egestas. Morbi lorem
              orci, dapibus sit amet purus sit amet, cursus malesuada libero.
            </p>
          </div>
          <div className="row2">
            <span className="img-container"><img src={ihp} /></span>
            <p>
          <b> Healthcare Management Portal</b>
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula quam in eros auctor, et lobortis velit egestas. Morbi lorem
              orci, dapibus sit amet purus sit amet, cursus malesuada libero.
            </p>
          </div>
        <h2>Development Projects</h2>
        <div className="row2">
          <img src={""} />
          <p>
            <b>Processing JS Projects</b>
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula quam in eros auctor, et lobortis velit egestas. Morbi lorem
            orci, dapibus sit amet purus sit amet, cursus malesuada libero.
          </p>
        </div>
        <div className="row2">
          <img src={""} />
          <p>
            <b>Lewis & Clark Expedition Maps</b>
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula quam in eros auctor, et lobortis velit egestas. Morbi lorem
            orci, dapibus sit amet purus sit amet, cursus malesuada libero.
          </p>
        </div>

      </div>
    );
  }
}

export default Projects;
