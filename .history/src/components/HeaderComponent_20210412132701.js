import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Navbar dark sticky="top">
        <div className="container">
          <NavbarBrand href="/">NuCamp</NavbarBrand>
        </div>
      </Navbar>
    );
  }
}
