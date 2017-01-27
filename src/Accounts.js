import React, {Component} from 'react';
import checkbox from '../public/img/checkmark.png';
import x from '../public/img/x.png';

export default class Accounts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            accounts: {}
        }
    }

    componentWillMount() {
        var request = new Request("http://localhost:8080/v1/org/" + this.state.org.id + "/accounts");

        fetch(request)
            .then(response => response.json())
            .then(items => this.setState({accounts: items}))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    renderAccounts() {
            return (<div className="account_data">
                {
                    this.state.accounts.map(payerAccount => {
                        return (<div>
                            <div className="payer_account_header">Payer Account: {payerAccount.payer_account_id} {payerAccount.nick_name}</div>
                            {

                                payerAccount.accounts.map(linkedAccount => {
                                    return (<div>
                                                <div className="linked_account_header">Linked Account:{linkedAccount.account_id} {linkedAccount.nick_name}</div>

                                        {
                                            linkedAccount.permissions && linkedAccount.permissions.map(permission => {
                                                return (<div className="row">
                                                    <div className="column column-10"><div className="permissions">{permission}</div></div>
                                                    <div className="column column-2"><div className="permissions_data"><img src={checkbox} className="checkmark" alt="logo"/></div></div>
                                                </div>);
                                            })
                                        }

                                    </div>);
                                })

                            }
                        </div>)
                    })
                }
            </div>);
    }

    render() {
        return (
            <div>
                {
                    this.state.accounts.length > 0 && this.renderAccounts()
                }
            </div>
        );
    }
}
