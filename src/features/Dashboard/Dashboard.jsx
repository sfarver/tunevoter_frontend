import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
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
      activeTab: null,
      userGrowth: {},
      artists: {},
      genres: {}
    };

    this.handleResponse = (key, data) => {
      console.log(data);
      this.setState({ [key]: data });
    };
  }

  componentDidMount() {
    Adapter.getTopArtists({ callbackFunction: this.handleResponse });
    Adapter.getTopGenres({ callbackFunction: this.handleResponse });
    // Adapter.getUsersOverTime({ callbackFunction: this.handleResponse });
  }

  render() {
    const { artists, genres, activeTab } = this.state;
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
                onClick={() => this.setState({ activeTab: "genreChart" })}
                className="item"
              >
                View Top Genres
              </Button>
              <Button
                onClick={() => this.setState({ activeTab: "artistsChart" })}
                className="item"
              >
                View Top Artists
              </Button>
              <Button
                onClick={() => this.setState({ activeTab: "usersChart" })}
                className="item"
              >
                View Users
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
            {activeTab === "genreChart" ? <TopGenres data={genres} /> : null}
            {activeTab === "artistsChart" ? (
              <TopArtists data={artists} />
            ) : null}
            {activeTab === "usersChart" ? <UsersChart /> : null}
            {activeTab === "campaign" ? <Campaign /> : null}
            {activeTab === null ? <h1>Select an option on the left</h1> : null}
          </div>
        </div>
      </div>
    );
  }
}
