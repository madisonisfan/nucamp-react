import React, { Component } from "react";

class CampsiteInfo extends Component {
  render() {
    if (campsite) {
      return <div className="row" />;
    } else {
      return <div />;
    }
  }
}

export default CampsiteInfo;
