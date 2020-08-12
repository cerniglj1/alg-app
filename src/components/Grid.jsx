// import Node from "./Node";
import "../css/node.css";
import Node from "./Node";
import React, { Component } from "react";
class Grid extends Component {
  state = {
    heuristic: 0,
  };
  nodes = null;
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.n = new Node({ value: Math.floor(Math.random() * 10), id: 0 });

    this.nodes = Array.from({ length: 20 }, () =>
      Array.from({ length: 20 }, () => Math.floor(Math.random() * 10) + 0)
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.nodes.map((a) => (
            <div className="row ">
              {a.map((b) => (
                <div className="col node">{b}</div>
              ))}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Grid;
