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
                <div id="org_stat">Member since: <div className="org-data">{this.state.orgDetails.subscriptionStartsAt}</div></div>

                <div className="side-bar-header">Activity</div>
                <div id="org_stat">Last Login: <div className="org-data">{this.state.orgDetails.lastLogin}</div></div>
                <div id="org_stat">Logins (past 30 days): <div className="org-data">TBD</div></div>
                <div id="org_stat">Logins (past 60 days): <div className="org-data">TBD</div></div>
                <div id="org_stat">Total accounts: <div className="org-data">{this.state.orgDetails.numAccounts}</div></div>

                <div className="side-bar-header">Monthly Spend</div>
                <div id="org_stat">MRR: <div className="org-data">TBD</div></div>
                <div id="org_stat">EC2: <div className="org-data">TBD</div></div>
                <div id="org_stat">RDS: <div className="org-data">TBD</div></div>
                <div id="org_stat">Redshift: <div className="org-data">TBD</div></div>
                <div id="org_stat">Elasticache: <div className="org-data">TBD</div></div>

                <div className="side-bar-header">Reservations</div>
                <div id="org_stat">Total Reservations: <div className="org-data">{this.state.orgDetails.numReservations}</div></div>
                <div id="org_stat">RI's to expire next month: <div className="org-data">{this.state.orgDetails.numRisExpiringNextMonth}</div></div>
                <div id="org_stat">RI Planner Savings: <div className="org-data">${this.state.orgDetails.savingsFromPlan}</div></div>
                <div id="org_stat">Last RI purchase: <div className="org-data">{this.state.orgDetails.dateOfLastRiPurchase}</div></div>
                <div id="org_stat">Last planner run: <div className="org-data">$TBD</div></div>
                <div id="org_stat">Savings from mods: <div className="org-data">$TBD</div></div>
                <div id="org_stat">Total instances: <div className="org-data">TBD</div></div>
                <div id="org_stat">Percent tagged: <div className="org-data">TBD</div></div>
                <div id="org_stat">cldy score: <div className="org-data">TBD</div></div>
                <br/>
            </div>
        )
    }
}
