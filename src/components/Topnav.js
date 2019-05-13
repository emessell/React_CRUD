import React, { Component } from 'react';

class Topnav extends Component {
  render() {
    return (
      <div>
        <div className="topnav" id="myTopnav">
          <a href="/" className="active">Home</a>
          <a href="/">News</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
          <a href="/" className="icon">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Topnav;
