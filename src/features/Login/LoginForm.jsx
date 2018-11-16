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

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = e => {
      e.preventDefault();

      TunevoterAdapter.loginUser({
        email: this.state.email,
        password: this.state.password,
        callbackFunction: this.props.handleResponse
      });
    };
  }

  componentDidMount() {}

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
              <Image src={logo} />
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={e => this.setState({ password: e.target.value })}
                />

                <Button color="black" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us?{" "}
              <Button
                onClick={() =>
                  (window.location.href = "http://localhost:3000/signup")
                }
              >
                Sign Up
              </Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
