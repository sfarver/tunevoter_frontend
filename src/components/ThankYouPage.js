import React, { Component } from "react";
import Adapter from "../TunevoterAdapter";
import queryString from "query-string";

class ThankYouPage extends Component {
  componentDidMount() {
    const { venueSlug } = this.props.match.params;

    const accessToken = queryString.parse(window.location.search);

    console.log(venueSlug, accessToken);

    Adapter.sendSpotifyData({ venueSlug, accessToken });
  }

  render() {
    return <div />;
  }
}

export default ThankYouPage;
