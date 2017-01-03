import React, { Component } from 'react';
import logo from './Fasticon-Hand-Draw-Iphone-Settings.ico';
import './App.css';
import ContactList from './ContactList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: "Tam Tool"
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
        <p className="App-intro">
            <h1>Customers</h1>
            <ContactList contacts={this.props.contacts} />
        </p>
      </div>
    );
  }
}

export default App;
