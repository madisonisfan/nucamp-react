import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }
  render() {
    return <Main />;
  }
}

export default App;
