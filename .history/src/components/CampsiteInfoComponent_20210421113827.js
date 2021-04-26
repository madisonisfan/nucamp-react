import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import ModalBody from "reactstrap/lib/ModalBody";

class CommentForm extends Component {
<Modal>
        <ModalBody>
          hello
        </ModalBody>
      </Modal>

  render() {
    return (
      <Button outline>
        <i className="fa fa-pencil" />
        Submit Comment
      </Button>
    );
  }
}

function RenderComments({ comments }) {
  //alert(`RenderComments: ${comments}`);
  if (comments) {
    return (
      <React.Fragment>
        <div className="col col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div className="mb-3">
                {comment.text} <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </div>
            );
          })}
        </div>
        <CommentForm />
      </React.Fragment>
    );
  } //if
  return (
    <div>
      <CommentForm />
    </div>
  );
}

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function CampsiteInfo(props) {
  const campsite = props.campsite;

  if (campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default CampsiteInfo;
