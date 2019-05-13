import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    return (
      <div>
        This is Content
        <br></br>
        {this.props.title}
        <br></br>
        {this.props.desc}
      </div>
    )
  }
}

export default ReadContent;
