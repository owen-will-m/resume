import "./App.css";
import About from "./About.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Contact from "./Contact.js";
import Spotlight from "./Spotlight.js";
import Spotlight2 from "./Spotlight2.js";
import Processing from "./Processing.js";
import { ToastContainer, toast } from 'react-toast'


import img from "./assets/plants.png";
import profile from "./assets/prof.png";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    let about = (this.state = {
      active: 1,
      activeStyle: { "font-weight": "700" },
      inactiveStyle: { "font-weight": "500" },
      spot : {name: "demo"}
    });
  }

  isActive(n) {
    return this.state.active == n;
  }

  showOrHide(n) {
    return this.isActive(n) ? { hidden: "false" } : { hidden: "true" };
  }

  setActive(n) {
    this.setState({ active: n });
  }

  getStyle(n) {
    return this.isActive(n) ? this.state.activeStyle : this.state.inactiveStyle;
  }

  openSpotlight(n){
    this.setActive(n);
  }

  render() {
    return (
      <div className="App" stlye={{"overflow":"hidden","height":"10px","margin":"0"}}>
        <ToastContainer delay={3000} position="bottom-center"/>
        <div className="header">
          <div className="subheader">
            <div className="image">
              {" "}
              <img src={profile}></img>
            </div>
            <div className="title">
              <h2>Will Owen</h2>
              UX Designer / Web Developer<br></br>Providence, RI
            </div>
            <div className="image2">
              <img src={img}></img>
            </div>
          </div>
          <hr />
        </div>

        <div className="body">
          <div className="sidebar">
            <div
              className="item"
              onClick={() => this.setActive(1)}
              style={this.getStyle(1)}
            >
              About
            </div>
            <div
              className="item"
              onClick={() => this.setActive(2)}
              style={this.getStyle(2)}
            >
              Projects
            </div>
            <div
              className="item"
              onClick={() => this.setActive(3)}
              style={this.getStyle(3)}
            >
              Resume
            </div>
            <div
              className="item"
              onClick={() => this.setActive(4)}
              style={this.getStyle(4)}
            >
              Contact
            </div>
          </div>
          <div className="window">
            {this.isActive(1)? <About/> : null}
            {this.isActive(2)? <Projects open={this.openSpotlight.bind(this)}/> : null}
            {this.isActive(3)? <Resume/> : null}
            {this.isActive(4)? <Contact/> : null}
            {this.isActive(5)? <Spotlight open={this.openSpotlight.bind(this)}/> : null}
            {this.isActive(6)? <Spotlight2 open={this.openSpotlight.bind(this)}/> : null}
            {this.isActive(7)? <Processing open={this.openSpotlight.bind(this)}/> : null}



          </div>
        </div>
      </div>
    );
  }
}

export default App;
