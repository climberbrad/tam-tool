import React, {Component} from 'react';
import checkbox from '../public/img/checkmark.png';
import ex from '../public/img/x.png';


var permissions = [
    "DESCRIBE_DYNAMO_TABLE",
    "DESCRIBE_EC2_VOLUMES",
    "DESCRIBE_IMAGES",
    "DESCRIBE_INSTANCES",
    "DESCRIBE_RDS_DB_CLUSTERS",
    "DESCRIBE_RDS_DB_INSTANCES",
    "DESCRIBE_REDSHIFT_CLUSTERS",
    "DESCRIBE_RESERVED_CACHE_NODES",
    "DESCRIBE_RESERVED_DB_INSTANCES",
    "DESCRIBE_RESERVED_EC2_INSTANCES",
    "DESCRIBE_RESERVED_EC2_INSTANCES_MODIFICATIONS",
    "DESCRIBE_RESERVED_REDSHIFT_NODES",
    "GET_METRIC_STATS",
    "LIST_CAR",
    "LIST_DBR",
    "LIST_DYNAMO_TABLES"
]

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
            return "215px"
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
                <div className="linked_account_header">
                    {this.props.linkedAccount.permissions && <div className="left"><img src={checkbox} className="checkmark" alt="logo"/></div>}
                    {!this.props.linkedAccount.permissions && <div className="left"><img src={ex} className="checkmark" alt="logo"/></div>}
                    <div className="account_name">{this.props.linkedAccount.nick_name} <div className="account_identifier">{this.props.linkedAccount.account_id}</div></div>
                </div>
                <div className="sectionContent" style={style}>
                    {
                        this.props.linkedAccount.permissions && this.props.linkedAccount.permissions.map(permission => {
                            return (<div className="row">
                                <div className="column column-10">
                                    <div className="permissions">{permission}</div>
                                </div>
                                <div className="column column-2">
                                    <div className="right"><img src={checkbox} className="checkmark" alt="logo"/>
                                    </div>
                                </div>
                            </div>);
                        })
                    }
                </div>
            </div>);
    }
}
