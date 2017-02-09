import React, {Component} from 'react';
import HighChartComponent from './HighChartComponent';

export default class PageLoads extends Component {
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
                    <div className="column column-12">
                        <HighChartComponent key="Page Loads"
                                            consolidatedAccount={this.props.accounts}
                                            org={this.state.org}
                                            graphType="piechart"
                                            graphName="Page Loads"/>
                    </div>
                </div>
            </div>
        );
    }
}
