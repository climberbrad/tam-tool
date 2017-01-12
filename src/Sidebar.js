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

                <div className="side-bar-header"><a href="">Activity</a></div>
                <div id="org_stat">Last Login: <div className="org-data">Today</div></div>
                <div id="org_stat">Logins (past 30 days): <div className="org-data">17</div></div>
                <div id="org_stat">Logins (past 60 days): <div className="org-data">56</div></div>
                <div id="org_stat">Total accounts: <div className="org-data">{this.state.orgDetails.numAccounts}</div></div>

                <div className="side-bar-header"><a href="">Monthly Spend</a></div>
                <div id="org_stat">MRR: <div className="org-data">$8,000</div></div>
                <div id="org_stat">EC2: <div className="org-data">$100</div></div>
                <div id="org_stat">RDS: <div className="org-data">$17</div></div>
                <div id="org_stat">Redshift: <div className="org-data">$56</div></div>
                <div id="org_stat">Elasticache: <div className="org-data">$6</div></div>

                <div className="side-bar-header"><a href="">Reservations</a></div>
                <div id="org_stat">Total Reservations: <div className="org-data">{this.state.orgDetails.numReservations}</div></div>
                <div id="org_stat">Savings from plan: <div className="org-data">${this.state.orgDetails.savingsFromPlan}</div></div>
                <div id="org_stat">Savings from mods: <div className="org-data">$874</div></div>
                <div id="org_stat">Last RI purchase: <div className="org-data">2017-01-03</div></div>
                <div id="org_stat">Next RI to expire: <div className="org-data">2017-03-15</div></div>
                <div id="org_stat">Total instances: <div className="org-data">876</div></div>
                <div id="org_stat">Percent tagged: <div className="org-data">34%</div></div>
                <div id="org_stat">cldy score: <div className="org-data">17</div></div>
                <br/>
            </div>
        )
    }
}
