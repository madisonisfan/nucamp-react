import React, { Component } from "react";

class CampsiteInfo extends Component {
  renderCampsite(campsite) {
      return (
          <div className='col-md-5 m-1'>
              <

          </div>
      )
  }

  render() {
    if (campsite) {
      return <div className="row" />;
    } else {
      return <div />;
    }

    //return();
  }
}

export default CampsiteInfo;
