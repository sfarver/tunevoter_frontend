import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import logo from "../../images/black.png";
import Adapter from "../../TunevoterAdapter";
import { Pie } from "react-chartjs-2";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        labels: ["Rock", "Hip Hop", "Country", "EDM", "Indie", "Metal", "Punk"],
        datasets: [
          {
            label: "Top Genres",
            backgroundColor: [
              "#fdff36",
              "#ff00a7",
              "#09ff00",
              "#c900ff",
              "#ff9a00",
              "#00cdff",
              "#8500ff"
            ],
            hoverBackgroundColor: [
              "#fdff36",
              "#ff00a7",
              "#09ff00",
              "#c900ff",
              "#ff9a00",
              "#00cdff",
              "#8500ff"
            ],
            data: [10, 10, 5, 2, 20, 30, 45]
          }
        ]
      }
    };

    this.handleResponse = data => {
      console.log(data);
      this.setState(data);
    };
  }

  componentDidMount() {
    Adapter.getTopArtists({ callbackFunction: this.handleResponse });
  }

  render() {
    const { data } = this.state;
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
              <Button className="item">View Top Genres</Button>
              <Button className="item">View Top Artists</Button>
              <Button className="item">View Users</Button>
              <Button className="item">Create Link</Button>
            </div>
          </div>
          <div className="twelve wide column">
            <Pie
              data={data}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
