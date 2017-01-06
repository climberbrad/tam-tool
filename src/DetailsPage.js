import React, {Component} from 'react';
import LoginInfo from './LoginInfo';

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
                <div id="content"></div>
            </div>
        );
    }
}

export default DetailsPage;
