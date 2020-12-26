import React, { Component } from "react";
import Node from "./Node.jsx";
import {
  Sigma,
  // RandomizeNodePositions,
  RelativeSize,
  EdgeShapes,
} from "react-sigma";
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
  dijkstrasNodes = [];
  selectItem(e) {
    this.selectedItem = e;
    // for (var i in this.items) {
    //   console.log(i);
    //   var fd = document.getElementById(this-.items[i].id);
    //   fd.classList.remove("selectedItem");
    // }
    if (e === 1) {
      var el = document.getElementById(e.id);
      el.classList.add("selectedItem");
    }
  }
  clickingNode(e) {
    console.log("Click node: ", { e });
    if (e.data.node.isSelected) {
      e.data.node.color = "#666";
      e.data.node.isSelected = false;
    } else {
      e.data.node.color = "#0A0";
      e.data.node.isSelected = true;
    }
  }
  dijkstras() {
    var cost = 0;
    return cost;
    // node ← start
    // cost ← 0
    // frontier ← priority queue containing node only
    // explored ← empty set
    // do
    //     if frontier is empty then
    //         return failure
    //     node ← frontier.pop()
    //     if node is goal then
    //         return solution
    //     explored.add(node)
    //     for each of node's neighbors n do
    //         if n is not in explored then
    //             frontier.add(n)
  }
  render() {
    /**
     * Create Node A which has 2 connections to Node B and Node C
     * A-> B costs 3;
     * A -> C costs 7;
     */
    var B = new Node({ id: "B", name: "B Node" });
    var C = new Node({ id: "C", name: "C Node", conn: [{ node: B, cost: 1 }] });
    B.setConnections([{ node: C, cost: 1 }]);
    var A = new Node({
      id: "A",
      name: "A Node",
      conn: [
        { node: B, cost: 3 },
        { node: C, cost: 7 },
      ],
    });
    var D = new Node({
      id: "D",
      name: "D Node",
      conn: [
        { node: B, cost: 4 },
        { node: C, cost: 11 },
      ],
    });
    this.dijkstrasNodes = [A, B, C, D];
    var graphNodes = [];
    var graphEdges = [];
    var counter = 0;
    var centerX = 10;
    var centerY = 10;
    var nextNodes = 0;
    var yOffset;
    var xOffset;
    for (var i in this.dijkstrasNodes) {
      var cur = this.dijkstrasNodes[i];
      // x: 100 * Math.cos(2 * i * Math.PI / N),
      // y: 100 * Math.sin(2 * i * Math.PI / N),

      //check if previous node is parent, or check if node is already in new nodes;
      //TODO
      if (cur.connections.filter((n) => n.node.name)) {
      }
      xOffset = 0;
      if (cur.connections.length >= nextNodes) {
        nextNodes = cur.connections.length;
        xOffset = 10 * i;
      }

      graphNodes.push({
        id: cur.id,
        label: cur.name,
        color: "#25ABA1",
        x: centerX + xOffset,
        y: centerY + 10 * nextNodes,
      });

      //add nodes
      for (var cn in cur.connections) {
        //add edges
        var cur2 = cur.connections[cn];

        graphEdges.push({
          id: "Edge " + counter,
          source: cur.id,
          target: cur2.node.id,
          label: cur2.cost.toString(),
        });
        counter++;
        nextNodes--;
      }
    }

    // Initialise sigma:
    let myGraph = { nodes: graphNodes, edges: graphEdges };

    // let myGraph = {
    //   nodes: [
    //     { id: "n1", label: "Alice" },
    //     { id: "n2", label: "Rabbit" },
    //   ],
    //   edges: [
    //     {
    //       id: "e1",
    //       source: "n1",
    //       target: "n2",
    //       label: "SEES",
    //       edgeColor: "#fff",
    //     },
    //   ],
    // };

    return (
      <React.Fragment>
        <div className="jumbotron m-2">
          <div className="d-flex justify-content around">
            <button className="btn btn-primary">Dijkstra's</button>
          </div>

          {/* <div className="d-flex justify-content around ">
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
          </div> */}
          <div className="shadow-lg m-4 bg-dark">
            <Sigma
              renderer="canvas"
              style={{ maxWidth: "inherit", height: "400px" }}
              graph={myGraph}
              nodeHoverColor="#f4f"
              onOverNode={(e) => console.log("Mouse over node: ", { e })}
              onClickNode={(e) => this.clickingNode(e)}
              onOverEdge={(e) => console.log("edge node: ", { e })}
              settings={{
                drawEdges: true,
                clone: false,
                drawEdgeLabels: true,
                edgeLabelSize: "proportional",
              }}
            >
              <EdgeShapes default="tapered" />
              <RelativeSize initialSize={25} />
              {/* <RandomizeNodePositions /> */}
            </Sigma>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Algorithms;
