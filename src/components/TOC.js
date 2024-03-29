import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var data = this.props.data;
    var lists = [];
    var i = 0;
    while(i < data.length){
      lists.push(
        <li key={i}>
          <a
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >{data[i].title}</a></li>);
      i = i+1;
    }
    return (
      <nav className='TOC'>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default TOC;
