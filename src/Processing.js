import "./Projects.css";
import React from "react";
import ridlt from "./assets/proc/plant.png";
import ihp from "./assets/proc/fall.png";
import proc from "./assets/proc/trees.png";
import lcmap from "./assets/proc/stone.png";

class Processing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Projects">
        <span className="title-button">
          <h2>Processing JS Projects</h2>
          <a onClick={() => this.props.open(2)}>
            <u>Back to Projects</u>
          </a>
        </span>
        <div
          className="row2"
          onClick={() =>
            window.open("https://owen-will-m.github.io/plants/", "_blank")
          }
        >
          <span className="img-container">
            <img src={ridlt} />
          </span>
          <p>
            <span className="title-button">
              <b>Draw Plants</b>
              <button>Open</button>
            </span>
            <br></br>
            <br></br>
            <br></br>
            Inspired by Hayao Miyazaki’s Princess Mononoke, I created randomized
            programmatic plants that sprout from the ground and subsequently
            wilt and perish. These plants represent the cycle of life and death.
            Since the plants are programmatically generated, no two set of
            plants will ever be alike, just like in the natural world.
          </p>
        </div>
        <div
          className="row2"
          onClick={() =>
            window.open("https://owen-will-m.github.io/fall/", "_blank")
          }
        >
          <span className="img-container">
            <img src={ihp} />
          </span>
          <p>
            <span className="title-button">
              <b>Falling Leaves</b>
              <button>Open</button>
            </span>
            <br></br> <br></br>
            <br></br>
            Looking back, I fondly remember the autumn foliage accumulating in
            my back yard when I was a kid. This is why I sought to create a
            relaxing and immersive experience with autumn leaves to help
            distract the user from the hustle and bustle of
            postmodern-capitalist America and recall the primordial cycle that
            grounds us on this planet: the seasons.
          </p>
        </div>
        <div
          className="row2"
          onClick={() =>
            window.open("https://owen-will-m.github.io/trees/", "_blank")
          }
        >
          <span className="img-container">
            {" "}
            <img src={proc} />
          </span>
          <p>
            <span className="title-button">
              <b>Draw Trees</b>
              <button>Open</button>
            </span>
            <br></br> <br></br>
            <br></br>
            Imitating nature in technology is very challenging. Order and chaos
            must be displayed in a perfect balance. In nature, we observe
            repeating patterns, but there’s always a level of variation. In this
            piece, I attempted to create the shape of trees with that balance in
            mind.
          </p>
        </div>
        <div
          className="row2"
          onClick={() =>
            window.open("https://owen-will-m.github.io/stones/", "_blank")
          }
        >
          <img src={lcmap} />
          <p>
            <span className="title-button">
              <b>Skip a Stone</b>
              <button>Open</button>
            </span>
            <br></br>
            <br></br>
            <br></br>
            Taking inspiration from Rembrandt and the impressionists, I wanted
            to see how random particles en masse could create a seemingly larger
            texture. Another fun component of this project was applying a
            sinusoidal function to create the surface of the water - another
            instance of the intersection of mathematics and nature.
          </p>
        </div>
      </div>
    );
  }
}

export default Processing;
