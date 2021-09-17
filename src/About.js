import "./About.css";
import React from "react";

import risdlogo from "./assets/risdlogo.png";
import lclogo from "./assets/lclogo.png";
import wongdoodylogo from "./assets/wongdoodylogo.png";
import infosyslogo from "./assets/infosyslogo.png";

// const ratios = [2.3, 1.85,5.7 ,2.5];
// My father was persistent in teaching me the value of the adage
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

            "Measure twice, cut once." It's always better to spend extra time
            planning out what you're going to do if it will mean time saved in
            the process. This is the main principle I bring to my life and that
            I bring to software. Design is the crucial step in software
            development that allows us to figure out what the best experience
            will be before we begin the hard work of creating it in code. I have
            been writing code and designing content since I was a teenager, and
            I've had the pleasure of pursuing this passion as a vocation. I am
            currently seeking a development role that will allow me to apply my
            skills as a developer with the diligence and scruples of a designer.
          </p>
          <br></br>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="row">
            <img src={wongdoodylogo} />
            <p>
              <b>Wongdoody/Infosys - Senior UX Designer</b>{" "}
              <span className="float">April 2020 - June 2021</span>
              <br></br>
              <br></br>
              <div className="bullets">
                - Led interface between development and design teams<br></br>-
                Acted as creative director on visual and UX design<br></br>-
                Presented completed designs to fortune-500 client VPs
              </div>
            </p>
          </div>
          <div className="row">
            <img src={infosyslogo} />
            <p>
              <b>Infosys - UX Designer</b>{" "}
              <span className="float">November 2018 - April 2020</span>
              <br></br>
              <br></br>
              <div className="bullets">
                - Created high-fidelity wireframes and prototypes with Sketch,
                InVision, AdobeXD <br></br>- Worked in Agile teams to deliver
                iteratively built designs
                <br></br>- Wrote production-level CSS for fortune-500 live
                website
              </div>
            </p>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="row">
            <img src={risdlogo} />
            <p>
              <b>Rhode Island School of Design</b>{" "}
              <span className="float">Fall 2018</span>
              <br></br>
              <br></br>
              <div className="bullets">
                Center for Complexity, Strategic Design Certificate Program
                <br></br>
                Continuing Education Graphic Design Program
                <br></br>
              </div>
            </p>
          </div>
          <div className="row">
            <img src={lclogo} />
            <p>
              <b>Lewis & Clark College</b>{" "}
              <span className="float">September 2014 - May 2018</span>
              <br></br>
              <br></br>
                <div className="bullets">
                  Bachelor's in Chemistry, Computer Science<br></br>
                <i>Magna cum laude</i><br></br>
                </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
