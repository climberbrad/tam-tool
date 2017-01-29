import React, {Component} from 'react';
import LinkedAccount from './LinkedAccount';

export default class Accounts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            openSectionIndex: -1,
            accounts: {}
        }
        this.buildSection = this.buildSection.bind(this);
        this.toggleOne = this.toggleOn.bind(this);
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

    toggleOn(id) {
        if(this.state.openSectionIndex === id){
            this.setState({openSectionIndex: -1});
        } else {
            this.setState({openSectionIndex: id});
        }
    }

    buildSection(payerAccount, index) {
        var openStatus = (index === this.state.openSectionIndex);
        /* Remember to add a 'key'. React wants you to add an identifier when you instantiate a component multiple times */
        return <LinkedAccount key={payerAccount.payer_account_id} id={index} payerAccount={payerAccount} toggleOne={this.toggleOne} open={openStatus} />
    }

    buildSections(payerAccounts) {
        var sections = payerAccounts.map(this.buildSection)
        return sections;
    }

    render() {

        return (<div>
                {
                    this.state.accounts.length > 0 && (<div className="container">{this.buildSections(this.state.accounts)}</div>)
                }
            </div>);
    }

    // renderAccounts() {
    //         return (<div className="account_data">
    //             {
    //                 this.state.accounts.map(payerAccount => {
    //                     return (<div>
    //                         <div className="payer_account_header">Payer Account: {payerAccount.payer_account_id} {payerAccount.nick_name}</div>
    //                         {
    //
    //                             payerAccount.accounts.map(linkedAccount => {
    //                                 return (<div>
    //                                             <div className="linked_account_header">Linked Account: {linkedAccount.account_id} {linkedAccount.nick_name}</div>
    //
    //                                     {
    //                                         linkedAccount.permissions && linkedAccount.permissions.map(permission => {
    //                                             return (<div className="row">
    //                                                 <div className="column column-10"><div className="permissions">{permission}</div></div>
    //                                                 <div className="column column-2"><div className="permissions_data"><img src={checkbox} className="checkmark" alt="logo"/></div></div>
    //                                             </div>);
    //                                         })
    //                                     }
    //
    //                                 </div>);
    //                             })
    //
    //                         }
    //                     </div>)
    //                 })
    //             }
    //         </div>);
    // }
}
