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
            <div>{this.state.contact && this.state.contact.name}</div>
            <div>Last Login: Today</div>
            <div>Number of logins (past 30 days):</div>
            <div>Number of logins (past 60 days):</div>
            <div>Number of accounts: 6</div>
        </div>

        )
    }
}

export default LoginInfo;
