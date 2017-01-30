import React, {Component} from 'react';
import logo from '../public/img/logo1.png';
import '../public/css/App.css';
import Search from './Search';
import DetailsPage from './DetailsPage';

var Highcharts = require('highcharts');

require('highcharts/modules/funnel')(Highcharts);

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOrg: null
        }

        this.clickSearchResult = this.clickSearchResult.bind(this)
        this.resetSelectedOrg = this.resetSelectedOrg.bind(this)
    }

    clickSearchResult(org) {
        this.setState({
            selectedOrg: org
        })
    }

    resetSelectedOrg() {
        console.log('got here')
        this.setState({
            selectedOrg: null
        })
    }

    renderDetailsPage() {
        return (
            <div className="row">
                <div className="column column-12">
                    <DetailsPage org={this.state.selectedOrg}/>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="row">
                        <div className="column column-2">
                            <img src={logo} className="logo" alt="logo"/>
                        </div>
                        <div className="column column-9">
                            <div className="search-box"><Search resetSelectedOrg={this.resetSelectedOrg} click={this.clickSearchResult}/></div>
                        </div>
                    </div>
                </div>
                {
                    this.state.selectedOrg && this.renderDetailsPage()
                }

            </div>
        );
    }
}

export default App;
