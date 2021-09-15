import "./About.css";
import React from "react";

import risdlogo from "./assets/risdlogo.png";
import lclogo from "./assets/lclogo.png";
import wongdoodylogo from "./assets/wongdoodylogo.png";
import infosyslogo from "./assets/infosyslogo.png";

// const ratios = [2.3, 1.85,5.7 ,2.5];

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula quam in eros auctor, et lobortis velit egestas. Morbi lorem
            orci, dapibus sit amet purus sit amet, cursus malesuada libero.
            Donec vel rhoncus neque. Duis nec finibus massa, vel porta lacus.
            Suspendisse vitae massa lacinia, luctus lectus in, vestibulum justo.
            Sed venenatis, nisi ac consequat pharetra, sapien ex malesuada nibh,
            sed sodales lectus nibh in ante. Nunc sed malesuada ante, mattis
            cursus turpis. Sed viverra eu augue et egestas. Donec tempor a dolor
            aliquet dictum. Cras ornare ex a lorem placerat, quis tincidunt
            massa elementum. Duis finibus, tortor eget facilisis imperdiet,
            sapien nisi fermentum velit, sit amet hendrerit tellus dui in augue.
            In arcu diam, pellentesque ac vestibulum in, pretium eget odio.
          </p>
          <br></br>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="row">
            <img src={wongdoodylogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula quam in eros auctor, et lobortis velit egestas. Morbi
              lorem orci, dapibus sit amet purus sit amet, cursus malesuada
              libero.
            </p>
          </div>
          <div className="row">
            <img src={infosyslogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula quam in eros auctor, et lobortis velit egestas. Morbi
              lorem orci, dapibus sit amet purus sit amet, cursus malesuada
              libero.
            </p>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="row">
            <img src={risdlogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula quam in eros auctor, et lobortis velit egestas. Morbi
              lorem orci, dapibus sit amet purus sit amet, cursus malesuada
              libero. sLorem śpsum dolor sit amet, consectetur adipiscing elit.
              Duis vehicula quam in eros auctor, et lobortis velit egestas.
              Morbi lorem orci, dapibus sit amet purus sit amet, cursus
              malesuada libero.
            </p>
          </div>
          <div className="row">
            <img src={lclogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula quam in eros auctor, et lobortis velit egestas. Morbi
              lorem orci, dapibus sit amet purus sit amet, cursus malesuada
              libero.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
