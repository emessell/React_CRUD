import React, { Component } from 'react';
import Topnav from './components/Topnav';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Exam from './components/Exam';


import './styles/css/reset.css';
import './styles/css/style.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: {title: 'Web', sub: 'World Wide Web'},
      welcome: {title: 'Welcome', desc: 'Hello, react!'},
      contents: [
        {id: 1, title:'HTML', desc:'HTMLLLLLLLL'},
        {id: 2, title:'CSS', desc:'CSSSSSSSSS'},
        {id: 3, title:'JAVASCRIPT', desc:'JAVASCRIPTTTTT'},
      ]
    }
  }
  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article=<ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode === 'create'){
      _article=<CreateContent onSubmit={function(_title,_desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = Array.from(this.state.contents);
            _contents.push({id: this.max_content_id, title: _title, desc: _desc});
            this.setState({
              contents: _contents
            });
          }.bind(this)}
        ></CreateContent>
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article=<UpdateContent
          data = {_content}
          onSubmit={function(_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while(i < _contents.length){
              if(_contents[i].id === _id){
                _contents[i] = {id: _id, title: _title, desc: _desc};
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode: 'read'
            });
          }.bind(this)}
        ></UpdateContent>
    }
    return _article;
  }
  render() {
    return (
      <div>
        <Topnav></Topnav>
        <div className='main'>
          <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function(){
              this.setState({mode: 'welcome'});
            }.bind(this)}
          >
          </Subject>
          <h2><a href='/' onClick={function(e){
              console.log(e);
              e.preventDefault();
              this.setState({
                mode: 'welcome'
              });
            }.bind(this)}>{this.state.subject.title}</a></h2>
          <TOC
            onChangePage={function(id){
            this.setState({
              mode: 'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
            data={this.state.contents}
          ></TOC>
        <Control
          onChangeMode={function(_mode) {
            if(_mode === 'delete'){
              if(window.confirm('Really?')){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while(i < _contents.length){
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i,1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: 'welcome',
                  contents: _contents
                });
                alert('Deleted.');
              }
            }else{
              this.setState({
                mode: _mode
              });
            }}.bind(this)}
        ></Control>
      {this.getContent()}
        </div>
        <Exam></Exam>
      </div>

    )
  }
}

export default App;
