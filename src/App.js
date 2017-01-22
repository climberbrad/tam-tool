import React, {Component} from 'react';
import logo from '../public/img/logo1.png';
import '../public/css/App.css';
import Search from './Search';

var Highcharts = require('highcharts');

require('highcharts/modules/funnel')(Highcharts);

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="logo" alt="logo"/>
                    <div className="search-box"><Search/></div>
                </div>
            </div>
        );
    }
}

export default App;
