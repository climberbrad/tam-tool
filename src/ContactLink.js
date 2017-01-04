import React, {Component} from 'react';

class ContactLink extends Component {
    constructor(props) {
        super(props)
        this.state = {
          contact: props.contact
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state.contact.id)
    }

    render() {
        return (<div><a onClick={this.handleClick} href="">{this.state.contact.name}</a>{this.state.contact.phone}</div>);
    }
}

export default ContactLink;
