import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Contact from "./ContactComponent";
import CampsiteInfo from "./CampsiteInfoComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.state.campsites.filter((campsite) => campsite.featured)[0]
          }
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
          partner={this.state.partners.filter((partner) => partner.featured)[0]}
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
        />
        /*We want the whole comments array  so don't need to add [0]*/
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Route path="/contactus" component={Contact} />
          <Route
            path="/aboutus"
            render={() => <About partners={this.state.partners} />}
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
