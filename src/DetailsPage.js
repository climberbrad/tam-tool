import React, {Component} from 'react';
import Sidebar from './Sidebar';
import HighChartComponent from './HighChartComponent';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact,
            json: ''
        }
    }

    render() {
        return (
            <div>
                <div id="leftcolumn"><Sidebar contact={this.state.contact}/></div>
                <div id="centercolumn"><HighChartComponent contact={this.state.contact} graphType="spend"/></div>
                <div id="rightcolumn"><HighChartComponent contact={this.state.contact} graphType="logins"/></div>
            </div>
        );
    }
}

