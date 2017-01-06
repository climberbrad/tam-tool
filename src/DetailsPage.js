import React, {Component} from 'react';
import LoginInfo from './LoginInfo';
import BarChart from './BarChart';
import Histogram from './Histogram';

class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact
        }
    }

    render() {
        return (
            <div>
                <div id="leftcolumn"><LoginInfo contact={this.state.contact}/></div>
                <div id="content"><BarChart contact={this.state.contact}/></div>
                <div id="content_two"><Histogram contact={this.state.contact}/></div>
                <div>3rd here</div>
            </div>
        );
    }
}

export default DetailsPage;
