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
  Modal,
  Label,
  ModalHeader,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import ModalBody from "reactstrap/lib/ModalBody";

const minLength = (length) => (val) => val && val.length >= length;
const maxLength = (length) => (val) => !val || val.length <= length;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      rating: "1",
      author: "",
      text: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit(values) {
    alert("Current State is: " + JSON.stringify(values));
    console.log("Current State is: " + JSON.stringify(values));
    this.toggleModal();
  }

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil" />
          Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Commit</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  className="form-control"
                  model=".rating"
                  name="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  className="form-control"
                  model=".author"
                  name="author"
                  id="author"
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                ></Control.text>
                <Errors
                  color="text-danger"
                  model=".author"
                  component="div"
                  show="touched"
                  messages ={{
                    minLength="Must be at least 2 characters", 
                    maxLength:"Must be 15 characters or less"
                  }}
                ></Errors>
              </div>
              <div className="form-group">
                <Label htmlFor="text">Comment</Label>
                <Control.textarea
                  className="form-control"
                  rows="6"
                  model=".text"
                  name="text"
                  id="text"
                ></Control.textarea>
              </div>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
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
