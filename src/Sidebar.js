import React, {Component} from 'react';

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            orgDetails: {},
            consolidatedAccount: props.accounts
        }
    }

    componentWillMount() {

        var request = new Request("http://localhost:8080/v1/org/" + this.state.org.id + "/details");

        fetch(request, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.consolidatedAccount)
        })
            .then(response => response.json())
            .then(json => this.setState({orgDetails: json}))
            .catch(function (error) {
                console.log('Request failed', error)
            });

    }

    getPayerAccountIdentifiers() {
        return this.state.consolidatedAccount.map(payerAccount => {
                return payerAccount.account_id
        });
    }

    getLinkedAccountIdentifiers() {
        var linkedAccounts = []
        this.state.consolidatedAccount.map((payerAccount, pIndex) => {
            payerAccount.accounts.map((linkedAccount, lIndex) => {
                linkedAccounts.push(linkedAccount.account_id)
            })
        });

        return linkedAccounts
    }

    getCommaSeparatedAccounts() {
        var accountList = ""
        this.state.consolidatedAccount.map((payerAccount, pIndex) => {
            accountList = accountList + payerAccount.payer_account_id
            payerAccount.accounts.map((linkedAccount, lIndex) => {
                accountList = accountList + "," + linkedAccount.account_id
            })
        });
        return accountList
    }

    render() {
        return (
            <div>
                <div className="organization-name">{this.state.org.name}</div>
                <div className="stat" onClick={() => this.props.click(["totalSpend", "totalLogins", "totalSpendPerService"], "linegraph")}>Member since <div className="org-data">{this.state.orgDetails.subscriptionStartsAt}</div></div>

                <div className="side-bar-header">AWS Usage</div>
                <div className="stat" onClick={() => this.props.click(["oneMonthTotalSpend"], "linegraph")}>Servics <div className="org-data">{this.state.orgDetails.numAwsServices}</div></div>
                <div className="stat">Users <div className="org-data">TBD</div></div>

                <div className="stat" onClick={() => this.props.click(["accounts"], "linegraph")}>Accounts<div className="org-data"></div></div>
                <div className="stat">Payer Accounts <div className="org-data">{this.getPayerAccountIdentifiers().length}</div></div>
                <div className="stat">Linked Accounts <div className="org-data">{this.getLinkedAccountIdentifiers().length}</div></div>


                <div className="stat">Spend this month <div className="org-data">TBD</div></div>
                <div className="stat">Tagged inventory <div className="org-data">%TBD</div></div>

                <div className="side-bar-header">Cloudability Usage</div>
                <div className="stat">Last Login <div className="org-data">{this.state.orgDetails.lastLogin}</div></div>
                <div className="stat">Last data sync <div className="org-data">{this.state.orgDetails.lastDataSyncDate}</div></div>
                <div className="stat" onClick={() => this.props.click(["oneMonthLogins"], "linegraph")}>Logins (past 30 days) <div className="org-data">{this.state.orgDetails.numLoginsLastMonth}</div></div>
                <div className="stat" onClick={() => this.props.click(["twoMonthLogins"], "linegraph")}>Logins (past 60 days) <div className="org-data">{this.state.orgDetails.numLoginsLastTwoMonth}</div></div>
                <div className="stat">Number of custom reports <div className="org-data">{this.state.orgDetails.numCustomWidgetsCreated}</div></div>
                <div className="stat" onClick={() => this.props.click(["pageLoads"], "piechart")}>Total page loads (30 days) <div className="org-data">{this.state.orgDetails.numTotalPageLoads}</div></div>

                <div className="side-bar-header">Reservations</div>
                <div className="stat">Total Reservations <div className="org-data">{this.state.orgDetails.numReservations}</div></div>
                <div className="stat">RI Planner use (30 days) <div className="org-data">{this.state.orgDetails.numPlannerPageLoads}</div></div>
                <div className="stat">RI Planner Savings <div className="org-data">${this.state.orgDetails.savingsFromPlan}</div></div>
                <div className="stat">Last RI purchase <div className="org-data">{this.state.orgDetails.dateOfLastRiPurchase}</div></div>
                <div className="stat">Expiring (30 days) <div className="org-data">{this.state.orgDetails.numRisExpiringNextMonth}</div></div>
                <div className="stat">Planner executed <div className="org-data">{this.state.orgDetails.planLastExecuted}</div></div>
                <div className="stat">Savings from mods <div className="org-data">$TBD</div></div>
                <div className="stat">Underutilized RIs <div className="org-data">{this.state.orgDetails.underutilized}</div></div>
            </div>
        )
    }
}
