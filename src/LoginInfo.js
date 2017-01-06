import React, {Component} from 'react';

class LoginInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact
        }
    }

    render() {
        console.log("LoginInfo contact: ", this.state.contact)
        return (
        <div>
            {this.state.contact && this.state.contact.name}
        </div>
        )
    }
}

export default LoginInfo;
