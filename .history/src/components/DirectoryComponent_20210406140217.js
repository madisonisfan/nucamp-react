import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
    };
  }
  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  renderSelectedCampsite(campsite) {
    if (campsite) {
      retunr(
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}

export default Directory;
