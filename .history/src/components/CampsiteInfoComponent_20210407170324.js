import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
  renderComments(comments) {
    if (comments) {
      return (
        <div className="col col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div>
                {comment.text} <br />
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </div>
            );
          })}
        </div>
      );
    } //if
    return <div />;
  }

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render() {
    const campsite = this.props.campsite;
    if (campsite) {
      return (
        <div className="row">
          {this.renderCampsite(campsite)}
          {this.renderComments(campsite.comments)}
        </div>
      );
    } else {
      return <div />;
    }

    //return();
  }
}

export default CampsiteInfo;
