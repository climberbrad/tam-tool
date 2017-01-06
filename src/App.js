import React, { Component } from 'react';
import logo from '../public/img/Fasticon-Hand-Draw-Iphone-Settings.ico';
import '../public/css/App.css';
import Search from './Search';

var Highcharts = require('highcharts');

require('highcharts/modules/funnel')(Highcharts);

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tam Tool</h2>
            <div id="searchBox"><Search contacts={this.props.contacts} /></div>
        </div>
      </div>
    );
  }
}

export default App;
