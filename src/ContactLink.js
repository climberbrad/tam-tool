import React, {Component} from 'react';
import Histogram from './Histogram';

class ContactLink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact,
            isClicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    }

    render() {
        return (
            <div><a onClick={this.handleClick} href="">
                {this.state.contact.name}</a> {this.state.contact.phone}
                {this.state.isClicked && <Histogram/>}
            </div>
        );
    }
}

export default ContactLink;
