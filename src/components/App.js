import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import Questions from "./Questions";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ zIndex: "999" }} />
          <Nav />
          {this.props.authenticated === false ? (
            <Login />
          ) : (
            <div>
              <Route path="/" exact component={Questions} />
              <Route path="/questions/:question_id" component={Question} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
            </div>
          )}
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authenticated: authedUser.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
