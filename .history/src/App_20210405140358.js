import "./App.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default App;

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
