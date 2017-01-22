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
                <div className="organization-name">{this.state.org.name}</div>
                <div className="stat">Member since: <div className="org-data">{this.state.orgDetails.subscriptionStartsAt}</div></div>

                <div className="side-bar-header">AWS Usage</div>
                <div className="stat">Total accounts: <div className="org-data">{this.state.orgDetails.numAccounts}</div></div>
                <div className="stat">Total users: <div className="org-data">TBD</div></div>
                <div className="stat">Payer Accounts: <div className="org-data">TBD</div></div>
                <div className="stat">Spend this month: <div className="org-data">TBD and delta</div></div>
                <div className="stat">Tagged inventory percent: <div className="org-data">%TBD</div></div>

                <div className="side-bar-header">Cloudability Usage</div>
                <div className="stat">Last data sync: <div className="org-data">{this.state.orgDetails.lastDataSyncDate}</div></div>
                <div className="stat">Last Login: <div className="org-data">{this.state.orgDetails.lastLogin}</div></div>
                <div className="stat">Logins (past 30 days): <div className="org-data">{this.state.orgDetails.numLoginsLastMonth}</div></div>
                <div className="stat">Logins (past 60 days): <div className="org-data">{this.state.orgDetails.numLoginsLastTwoMonth}</div></div>
                <div className="stat">Number of custom reports: <div className="org-data">{this.state.orgDetails.numCustomWidgetsCreated}</div></div>
                <div className="stat">Total page loads (30 days): <div className="org-data">{this.state.orgDetails.numTotalPageLoads}</div></div>

                <div className="side-bar-header">Reservations</div>
                <div className="stat">Total Reservations: <div className="org-data">{this.state.orgDetails.numReservations}</div></div>
                <div className="stat">RI Planner page loads (30 days): <div className="org-data">{this.state.orgDetails.numPlannerPageLoads}</div></div>
                <div className="stat">RI Planner Savings: <div className="org-data">${this.state.orgDetails.savingsFromPlan}</div></div>
                <div className="stat">Last RI purchase: <div className="org-data">{this.state.orgDetails.dateOfLastRiPurchase}</div></div>
                <div className="stat">RI's expiring (30 days): <div className="org-data">{this.state.orgDetails.numRisExpiringNextMonth}</div></div>
                <div className="stat">RI Planner executed: <div className="org-data">{this.state.orgDetails.planLastExecuted}</div></div>
                <div className="stat">Savings from mods: <div className="org-data">$TBD</div></div>
                <div className="stat">Underutilized RIs: <div className="org-data">TBD</div></div>
            </div>
        )
    }
}
