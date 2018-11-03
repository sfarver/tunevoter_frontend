import React, { Component } from "react";
import { Sidebar } from "semantic-ui-react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <br />
        <div className="ui secondary menu">
          <div className="header item">Brand</div>
          <a className="active item">Home</a>
          <a className="item">Messages</a>
          <a className="item">Friends</a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon" />
              </div>
            </div>
            <a className="ui item">Logout</a>
          </div>
        </div>
        <div className="ui divider" />
        <br />
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui secondary vertical pointing fluid menu">
              <a className="item">Home</a>
              <a className="item">Messages</a>
              <a className="item active">Friends</a>
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ui form">
              <div className="field">
                <input type="text" name="first-name" placeholder="First name" />
              </div>
              <div className="field">
                <textarea placeholder="Some example text..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
