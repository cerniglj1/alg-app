import React, { Component } from "react";
import "../css/algorithms.css";
class Algorithms extends Component {
  selectedItem = { name: "Start Node", id: "startNodeBtn" };
  items = [
    {
      name: "Start Node",
      id: "startNodeBtn",
      icon: <i className="fas fa-play-circle"></i>,
    },
    {
      name: "End Node",
      id: "endNodeBtn",
      icon: <i className="far fa-dot-circle"></i>,
    },
  ];
  selectItem(e) {
    console.log("this is:", this, e);
    this.selectedItem = e;
    // for (var i in this.items) {
    //   console.log(i);
    //   var fd = document.getElementById(this.items[i].id);
    //   fd.classList.remove("selectedItem");
    // }
    if (e === 1) {
      var el = document.getElementById(e.id);
      el.classList.add("selectedItem");
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron m-2">
          <div className="d-flex justify-content around">
            <button className="btn btn-primary">Dijkstra's</button>
          </div>
          <div className="d-flex justify-content around ">
            {this.items.map((b) => (
              <button
                className="btn itemBtn m-2"
                id={b.id}
                key={b.id}
                onClick={this.selectItem(b)}
              >
                {b.icon} {b.name}
              </button>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Algorithms;
