import React, { Component } from "react";
import { Header, Button, Grid, Divider } from "semantic-ui-react";
import logo from "../../images/black.png";
import Adapter from "../../TunevoterAdapter";
import TopArtists from "./Charts/TopArtists";
import TopGenres from "./Charts/TopGenres";
import UsersChart from "./Charts/UsersChart";
import Campaign from "./Charts/Campaign";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: "home",
      userGrowth: {},
      artists: {},
      genres: {}
    };

    this.handleResponse = (key, data) => {
      this.setState({ [key]: data });
    };

    this.home = () => {
      return (
        <Grid centered="true">
          <Grid.Row width={4}>
            <TopGenres genres={this.state.genres} />
          </Grid.Row>
          <Divider section />
          <Grid.Row width={4}>
            <TopArtists artists={this.state.artists} />
          </Grid.Row>
        </Grid>
      );
    };

    this.users = () => {
      return <UsersChart />;
    };

    this.campaign = () => {
      return <Campaign />;
    };
  }

  componentDidMount() {
    Adapter.getTopArtists({ callbackFunction: this.handleResponse });
    Adapter.getTopGenres({ callbackFunction: this.handleResponse });
    // Adapter.getUsersOverTime({ callbackFunction: this.handleResponse });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="ui container">
        <br />
        <div className="ui secondary menu">
          <div className="header item">
            <Header size="huge" image={logo} />
          </div>
          <div className="right menu">
            <Button className="ui item">Logout</Button>
          </div>
        </div>
        <div className="ui divider" />
        <br />
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui secondary vertical pointing fluid menu">
              <Button
                onClick={() => this.setState({ activeTab: "home" })}
                className="item"
              >
                Home
              </Button>
              <Button
                onClick={() => this.setState({ activeTab: "users" })}
                className="item"
              >
                Users
              </Button>
              <Button
                onClick={() => this.setState({ activeTab: "campaign" })}
                className="item"
              >
                Campaign
              </Button>
            </div>
          </div>
          <div className="twelve wide column">
            {activeTab === "home" ? this.home() : null}
            {activeTab === "users" ? this.users() : null}
            {activeTab === "campaign" ? this.campaign() : null}
          </div>
        </div>
      </div>
    );
  }
}
