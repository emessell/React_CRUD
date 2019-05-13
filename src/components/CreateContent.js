import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <div>
        <h2>Create</h2>
        <form
          action='/create_process'
          method='post'
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
          }.bind(this)}
          >
          <p><input name='title' placeholder='title'></input></p>
          <p><textarea name='desc' placeholder='desc'></textarea></p>
          <p><input type='submit' value='확인'></input></p>
        </form>
      </div>
    )
  }
}

export default CreateContent;
