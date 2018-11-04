import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import logo from "../../images/dark.png";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <br />
        <div className="ui secondary menu">
          <div className="header item">
            <Header size="huge" image={logo} />
          </div>
          <div className="right menu">
            <a className="ui item">Logout</a>
          </div>
        </div>
        <div className="ui divider" />
        <br />
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui secondary vertical pointing fluid menu">
              <a className="item">Home</a>
              <a className="item">View Users</a>
              <a className="item">View Top Artists</a>
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ui form">
              <div className="field">
                {/* <input type="text" name="first-name" placeholder="First name" /> */}
              </div>
              <div className="field">
                {/* <textarea placeholder="Some example text..." /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
