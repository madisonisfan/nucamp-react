import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import CampsiteInfo from "./CampsiteInfoComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({ selectedCampsite: campsiteId });
  }

  render() {
    return (
      <div>
        <Header />
        <Directory
          campsites={this.state.campsites}
          onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
