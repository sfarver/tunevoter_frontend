import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import LoginForm from "./features/Login/LoginForm";
import SignUpForm from "./features/SignUp/SignUpForm";
import ThankYouPage from "./features/ThankYou/ThankYouPage";
import Dashboard from "./features/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Container className="main">
        <Switch>
          <Route path="/thankyou/:venueSlug" component={ThankYouPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    );
  }
}

export default App;
