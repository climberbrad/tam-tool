import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Accounts from './Accounts';
import Overview from './Overview';
import Services from './Services';
import PageLoads from './PageLoads';

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

    handleClick(graphNames) {
        this.setState({
            graphName: graphNames
        });
    }

    renderCharts() {

        if (this.state.graphName == "overview") {
            return <Overview accounts={this.state.accounts} org={this.state.org}/>
        }

        if (this.state.graphName == "accounts") {
            return <Accounts accounts={this.state.accounts} org={this.state.org}/>
        }

        if (this.state.graphName == "services") {
            return <Services accounts={this.state.accounts} org={this.state.org}/>
        }

        if (this.state.graphName == "pageLoads") {
            return <PageLoads accounts={this.state.accounts} org={this.state.org}/>
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

