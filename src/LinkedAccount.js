import React, {Component} from 'react';
import checkbox from '../public/img/checkmark.png';
import ex from '../public/img/x.png';

export default class LinkedAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            openSectionIndex: -1
        }
        this.toggleContent = this.toggleContent.bind(this);
    }

    getHeight() {
        if(this.props.open && this.props.linkedAccount.permissions){
            return "315px"
        } else {
            return "0"
        }
    }

    toggleContent() {
        this.props.toggleOne(this.props.id)
    }


    render() {
        var style = {height: this.getHeight()}

        return (
            <div onClick={this.toggleContent} className="sectionTitle">
                <div className="linked_account_header">{this.props.linkedAccount.nick_name} {this.props.linkedAccount.account_id}</div>
                <div className="sectionContent" style={style}>
                    {
                        this.props.linkedAccount.permissions && this.props.linkedAccount.permissions.map(permission => {
                            return (<div className="row">
                                <div className="column column-10">
                                    <div className="permissions">{permission}</div>
                                </div>
                                <div className="column column-2">
                                    <div className="permissions_data"><img src={checkbox} className="checkmark" alt="logo"/>
                                    </div>
                                </div>
                            </div>);
                        })
                    }
                </div>
            </div>);
    }
}
