import React, {Component} from 'react';
import HighChartComponent from './HighChartComponent';

export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            accounts: props.accounts
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="column column-6">
                        <HighChartComponent key="totalSpend"
                                            consolidatedAccount={this.props.accounts}
                                            org={this.state.org}
                                            graphType="linegraph"
                                            graphName="Total Spend"/></div>
                    <div className="column column-6">
                        <HighChartComponent key="totalLogins"
                                            consolidatedAccount={this.props.accounts}
                                            org={this.state.org}
                                            graphType="linegraph"
                                            graphName="Logins"/></div>
                </div>
                <div className="row">
                    <div className="column column-12">
                        <HighChartComponent key="totalSpendPerService"
                                            consolidatedAccount={this.props.accounts}
                                            org={this.state.org}
                                            graphType="linegraph"
                                            graphName="Spend Per Service"/></div>
                </div>
            </div>
        );
    }
}