import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import logo from "../../images/black.png";
import TunevoterAdapter from "../../TunevoterAdapter";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = e => {
      e.preventDefault();

      // NOTE: Derek - what info do you want to save to state once a user logs in? We have the callback function in the adapter ready to be invoked.

      TunevoterAdapter.loginUser({
        email: e.target[0].value,
        password: e.target[1].value,
        callbackFunction: this.props.handleResponse
      });
    };
  }

  componentDidMount() {
    this.props.isLoggedIn
      ? (window.location.href = "http://app.tunevoter.com/dashboard")
      : (window.location.href = "http://app.tunevoter.com/login");
  }

  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              <Image src={logo} /> Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="black" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Button>Sign Up</Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
