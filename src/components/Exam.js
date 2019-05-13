import React, { Component } from 'react';

class Exam extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'ee'
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
      return (
          <div>
          <input
            type='text'
            value={this.state.name}
            name = 'name'
            onChange={this.inputFormHandler}/>
          </div>
      );
  }
}

export default Exam;
