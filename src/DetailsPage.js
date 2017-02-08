import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Accounts from './Accounts';
import HighChartComponent from './HighChartComponent';
import Overview from './Overview';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            accounts: props.accounts,
            graphName: "overview",
            graphType: "linegraph"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(graphNames, graphType) {
        this.setState({
            graphName: graphNames,
            graphType: graphType
        });
    }

    render1Chart() {
        return (
            <div>
                <div className="row">
                    <div className="column column-12">
                        <HighChartComponent key={this.state.graphName[0]}
                                            consolidatedAccount={this.props.accounts}
                                            org={this.state.org}
                                            graphType={this.state.graphType}
                                            graphName={this.state.graphName[0]}/></div>
                </div>
            </div>
        );
    }

    renderCharts() {

        if (this.state.graphName == "accounts") {
            return <Accounts accounts={this.state.accounts} org={this.state.org}/>
        }

        if (this.state.graphName == "overview") {
            return <Overview accounts={this.state.accounts} org={this.state.org}/>
        }
    }

    render() {
        return (
            <div className="row" id="details-background">
                <div className="column column-2" id="sidebar"><Sidebar accounts={this.props.accounts}
                                                                       org={this.state.org} click={this.handleClick}/>
                </div>
                <div className="column column-10">{this.renderCharts()}</div>
            </div>
        );
    }
}

