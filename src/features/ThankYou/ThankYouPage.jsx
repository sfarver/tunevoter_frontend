import React, { Component } from "react";
import Adapter from "../../TunevoterAdapter";
import queryString from "query-string";
import logo from "../../images/black.png";
import { Image, Grid } from "semantic-ui-react";

class ThankYouPage extends Component {
  componentDidMount() {
    const { venueSlug } = this.props.match.params;

    const accessToken = queryString.parse(window.location.search);

    console.log(venueSlug, accessToken);

    Adapter.sendSpotifyData({ venueSlug, accessToken });
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Image src={logo} />
          <br />
          <br />
          <br />
          <br />
          <div>
            <h1 align="center">Thank You For Signing Up! :)</h1>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ThankYouPage;
