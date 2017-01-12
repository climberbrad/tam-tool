import React, {Component} from 'react';

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            orgDetails: {}
        }
    }

    componentWillMount() {
        var request = new Request("http://localhost:8080/v1/org/" + this.state.org.id + "/details");

        fetch(request)
            .then(response => response.json())
            .then(json => this.setState({orgDetails: json}))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }


    render() {
        return (
            <div className="side-bar">
                <div id="organization_name">{this.state.org.name}</div>

                <div className="side-bar-header"><a href="">Activity</a></div>
                <div id="org_stat">Last Login: Today</div>
                <div id="org_stat">Logins (past 30 days): 17</div>
                <div id="org_stat">Logins (past 60 days): 56</div>
                <div id="org_stat">Total accounts: {this.state.orgDetails.numAccounts}</div>

                <div className="side-bar-header"><a href="">Monthly Spend</a></div>
                <div id="org_stat">MRR: $8,000</div>
                <div id="org_stat">EC2: $100</div>
                <div id="org_stat">RDS: $17</div>
                <div id="org_stat">Redshift: $56</div>
                <div id="org_stat">Elasticache: $6</div>

                <div className="side-bar-header"><a href="">Reservations</a></div>
                <div id="org_stat">Total Reservations: {this.state.orgDetails.numReservations}</div>
                <div id="org_stat">Savings from plan: $67,874</div>
                <div id="org_stat">Savings from mods: $874</div>
                <div id="org_stat">Last RI purchase: 2017-01-03</div>
                <div id="org_stat">Next RI to expire: 2017-03-15</div>
                <div id="org_stat">Total instances: 876</div>
                <div id="org_stat">Percent tagged: 34%</div>
                <div id="org_stat">cldy score: 17</div>
                <br/>
            </div>
        )
    }
}
