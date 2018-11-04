import React, { Component } from "react";
import TunevoterAdapter from "../TunevoterAdapter";
const queryString = require('query-string');

class ThankYouPage extends Component {
  componentDidMount() {
    
    const { venueSlug } = this.props.match.params;

    const parsedParams = queryString.parse(window.location.hash);
    const accessToken = parsedParams.access_token
    
    console.log(venueSlug, accessToken);
    
    TunevoterAdapter.sendSpotifyData({ venueSlug, accessToken });
  }

  render() {
    return <div />;
  }
}

export default ThankYouPage;
