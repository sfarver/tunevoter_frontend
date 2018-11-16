import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import LoginForm from "./features/Login/LoginForm";
import SignUpForm from "./features/SignUp/SignUpForm";
import ThankYouPage from "./features/ThankYou/ThankYouPage";
import Dashboard from "./features/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUserEmail: "",
      isLoggedIn: false
    };

    this.handleLoginResponse = data => {
      this.setState({
        currentUserEmail: data.currentUserEmail,
        isLoggedIn: true
      });

      window.location.href = "http://localhost:3000/dashboard";
    };
  }

  render(props) {
    const { currentUserEmail, isLoggedIn } = this.state;
    return (
      <Container className="main">
        <Switch>
          <Route path="/thankyou/:venueSlug" component={ThankYouPage} />
          <Route
            path="/login"
            render={props => (
              <LoginForm
                {...props}
                handleResponse={this.handleLoginResponse}
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <Route path="/signup" component={SignUpForm} />
          {isLoggedIn && (
            <Route
              path="/dashboard"
              render={props => (
                <Dashboard
                  {...props}
                  user={currentUserEmail}
                  isLoggedIn={isLoggedIn}
                />
              )}
            />
          )}
        </Switch>
      </Container>
    );
  }
}

export default App;
