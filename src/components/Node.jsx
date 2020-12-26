import React, { Component } from "react";
class Node extends Component {
  state = {
    heuristic: 0,
  };
  connections = [];
  name = "";
  cost = 0;
  id = "";
  isSelected = false;
  constructor(props) {
    super(props);

    if (props) {
      this.connections = props.conn;
      this.name = props.name;
      this.cost = props.cost;
      this.id = props.id;
    }
    // Don't call this.setState() here!
  }
  setConnections(a) {
    this.connections = a;
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
