import React, {Component} from 'react';
import checkbox from '../public/img/checkmark.png';

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
        this.toggleContent = this.toggleContent.bind(this);
    }

    getHeight() {
        if(this.props.open){
            return "3em"
        } else {
            return "0"
        }
    }

    toggleContent() {
        this.props.toggleOne(this.props.id)
    }

    render() {
        var style = { height: this.getHeight() }
        return (
            <div className={"section section" + this.props.id}>
                <div onClick={this.toggleContent} className="payer_account_header">Payer Account: {this.props.payerAccount.payer_account_id} {this.props.payerAccount.nick_name}</div>

                {
                    this.props.payerAccount.accounts.map(linkedAccount => {
                        return (<div className="sectionContent" style={style}>
                            <div className="linked_account_header">Linked Account: {linkedAccount.account_id} {linkedAccount.nick_name}</div>

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
            </div>
        );
    }
}
