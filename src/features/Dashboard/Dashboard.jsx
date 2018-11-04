import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import logo from "../../images/black.png";

export default class Dashboard extends Component {
  render() {
    console.log(this.props);

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
              <Button className="item">View Users</Button>
              <Button className="item">View Top Artists</Button>
              <Button className="item">Create Link</Button>
            </div>
          </div>
          <div className="twelve wide column">{}</div>
        </div>
      </div>
    );
  }
}
