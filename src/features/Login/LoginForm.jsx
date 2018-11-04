import React from "react";
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
import TunevoterAdapter from '../../TunevoterAdapter'

const handleSubmit = e => {
  e.preventDefault()

  // NOTE: Derek - what info do you want to save to state once a user logs in? We have the callback function in the adapter ready to be invoked.

  TunevoterAdapter.loginUser({
    email: e.target[0].value,
    password: e.target[1].value
  })
}

const LoginForm = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header image={logo} as="h2" color="black" textAlign="center">
          <Image src={logo} /> Log-in to your account
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

export default LoginForm;
