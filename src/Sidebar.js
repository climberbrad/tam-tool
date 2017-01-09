import React, {Component} from 'react';

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org
        }
    }

    render() {
        return (
        <div>
            <h1>{this.state.org.name}</h1>

            <h3><a href="">Activity</a></h3>
            <div>Last Login: Today</div>
            <div>Logins (past 30 days): 17</div>
            <div>Logins (past 60 days): 56</div>
            <div>Total accounts: 6</div>
            <h3><a href="">Monthly Spend</a></h3>
            <div>MRR: $8,000</div>
            <div>EC2: $100</div>
            <div>RDS: $17</div>
            <div>Redshift: $56</div>
            <div>Elasticache: $6</div>
            <h3><a href="">Reservations</a></h3>
            <div>Total Reservations: 187</div>
            <div>Savings from plan: $67,874</div>
            <div>Savings from mods: $874</div>
            <div>Last RI purchase: 2017-01-03</div>
            <div>Next RI to expire: 2017-03-15</div>
            <div>Total instances: 876</div>
            <div>Percent tagged: 34%</div>
            <div>cldy score: 17</div>
        </div>
        )
    }
}
