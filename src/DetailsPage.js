import React, {Component} from 'react';
import Sidebar from './Sidebar';
import HighChartComponent from './HighChartComponent';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            json: ''
        }
    }

    render() {
        return (
            <div>
                <div id="leftcolumn"><Sidebar org={this.state.org}/></div>
                <div id="centercolumn"><HighChartComponent org={this.state.org} graphType="spend"/></div>
                <div id="rightcolumn"><HighChartComponent org={this.state.org} graphType="logins"/></div>
            </div>
        );
    }
}

