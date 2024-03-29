import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Message
} from "semantic-ui-react";
import logo from "../../images/black.png";
import TunevoterAdapter from "../../TunevoterAdapter";

const handleSubmit = e => {
  e.preventDefault();
  // NOTE: Derek - we need password validation here, I can enter different passes and still hit. Lower priority though

  TunevoterAdapter.signupUser({
    email: e.target[0].value,
    password: e.target[1].value
  });
};

const SignUpForm = () => (
  <div className="login-form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={logo} />
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
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
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
            />
            <Button color="black" fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account?{" "}
          <Button
            onClick={() =>
              (window.location.href = "http://localhost:3000/login")
            }
          >
            Sign In Here
          </Button>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default SignUpForm;
