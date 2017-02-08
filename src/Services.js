import React, {Component} from 'react';
import HighChartComponent from './HighChartComponent';

export default class Services extends Component {
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
                        <HighChartComponent key="serviceSpend"
                                            consolidatedAccount={this.props.accounts}
                                            org={this.state.org}
                                            graphType="linegraph"
                                            graphName="Monthly Spend Per Service"/>
                    </div>
                </div>
            </div>
        );
    }

}
