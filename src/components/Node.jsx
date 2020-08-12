import React, { Component } from "react";
class Node extends Component {
  state = {
    heuristic: 0,
  };
  constructor(props) {
    super(props);
    console.log({ props });
    // Don't call this.setState() here!
    this.state.heuristic = props[0];
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello Node! {this.state.heuristic}</h1>
      </React.Fragment>
    );
  }
}

export default Node;
