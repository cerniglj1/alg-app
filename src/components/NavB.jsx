import React, { Component } from "react";
class NavB extends Component {
  state = {
    heuristic: 0,
  };
  foo = null;
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <button className="btn">Navbar</button>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <button className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">
                  Features
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">
                  Pricing
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavB;
