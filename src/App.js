import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ThankYouPage from "./components/ThankYouPage";

class App extends Component {
  render() {
    return (
      <Container className="main">
        <Switch>
          <Route path="/thankyou/:venueSlug" component={ThankYouPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
