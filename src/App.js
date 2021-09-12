import logo from "./logo.svg";
import "./App.css";

import img from "./assets/plants.png";
import profile from "./assets/prof.png";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
this.state = { activePage: "About"};
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="subheader">
            <div className="image"> <img src={profile}></img></div>
            <div className="title">
              <h2>Will Owen {this.x} </h2>
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
            <div className="item" onclick={function(){alert();}}>About</div>
            <div className="item">Projects</div>
            <div className="item">Resume</div>
            <div className="item">Contact</div>
          </div>
          <div className="window"></div>
        </div>
      </div>
    );
  }
}

export default App;
