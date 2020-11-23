// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Form from './FormComponents/Form'
import Message from './MessageComponents/Message'

class App extends Component{

  state={
    subject:'Input subject',
    body:'Input body',
    subjectText:'',
    bodyText:''
  };

  renderForm(stateObject){
    this.setState({subject:this.state.subject,body:this.state.body,subjectText:stateObject.subject,bodyText:stateObject.body})
    this.logState()
  }

  logState(){
    console.log(this.state);
  }
  sendMessage(){
    this.setState({subject:this.state.subject,body:this.state.body,subjectText:'',bodyText:''})
  }

  render(){
    return (
      <div className='message-page'>
        <Form state={this.state} bindForm={this.renderForm.bind(this)} sendEvent={this.sendMessage.bind(this)}/>
        <Message stateObj={this.state}/>
      </div>
    )
  }

}


export default App;
