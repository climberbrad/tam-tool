import React, {Component} from 'react';
import LinkedAccount from './LinkedAccount';

export default class Accounts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            openSectionIndex: -1,
            accounts: props.accounts
        }

        this.buildSection = this.buildSection.bind(this);
        this.toggleOne = this.toggleOn.bind(this);
    }

    toggleOn(id) {
        if (this.state.openSectionIndex === id) {
            this.setState({openSectionIndex: -1});
        } else {
            this.setState({openSectionIndex: id});
        }
    }

    buildSection(linkedAccount, index) {
        var openStatus = (index === this.state.openSectionIndex);
        /* Remember to add a 'key'. React wants you to add an identifier when you instantiate a component multiple times */
        return <LinkedAccount key={linkedAccount.account_id} id={index} linkedAccount={linkedAccount}
                              toggleOne={this.toggleOne} open={openStatus}/>
    }

    buildSections(linkedAccounts) {
        var sections = linkedAccounts.map(this.buildSection)
        return sections;
    }

    render() {
        return (
            <div className="center">
                <div className="account_info_box">
                    {
                        this.state.accounts.length > 0 &&
                        this.state.accounts.map(payerAccount => {
                            return (<div key={payerAccount.payer_account_id}>
                                <div className="payer_account_header">Payer Account {payerAccount.nick_name}
                                    <div className="account_identifier">{payerAccount.payer_account_id}</div>
                                </div>
                                {
                                    payerAccount.accounts && this.buildSections(payerAccount.accounts)

                                }
                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}
