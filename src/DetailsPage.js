import React, {Component} from 'react';
import Sidebar from './Sidebar';
import HighChartComponent from './HighChartComponent';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            graphName: ["totalSpend", "totalLogins", "totalSpendPerService"],
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
                    <div className="column column-12"><HighChartComponent key={this.state.graphName[0]} org={this.state.org} graphType={this.state.graphType} graphName={this.state.graphName[0]}/></div>
                </div>
            </div>
        );
    }

    render2Charts() {
        return (
            <div>
                <div className="row">
                    <div className="column column-6"><HighChartComponent key={this.state.graphName[0]} org={this.state.org} graphType={this.state.graphType} graphName={this.state.graphName[0]}/></div>
                    <div className="column column-6"><HighChartComponent key={this.state.graphName[1]} org={this.state.org} graphType={this.state.graphType} graphName={this.state.graphName[1]}/></div>
                </div>
            </div>
        );
    }

    render3Charts() {
        return (
            <div>
                <div className="row">
                    <div className="column column-6"><HighChartComponent key={this.state.graphName[0]} className="chart" org={this.state.org} graphType={this.state.graphType} graphName={this.state.graphName[0]}/></div>
                    <div className="column column-6"><HighChartComponent key={this.state.graphName[1]} className="chart" org={this.state.org} graphType={this.state.graphType} graphName={this.state.graphName[1]}/></div>
                </div>
                <div className="row">
                    <div className="column column-12"><HighChartComponent key={this.state.graphName[2]} className="chart" org={this.state.org} graphType={this.state.graphType} graphName={this.state.graphName[2]}/>
                    </div>
                </div>
            </div>
        );
    }

    renderCharts() {

        if (this.state.graphName.length === 1) {
            return this.render1Chart()
        }

        if (this.state.graphName.length === 2) {
            return this.render2Charts()
        }

        if (this.state.graphName.length === 3) {
            return this.render3Charts()
        }
    }

    render() {
        return (
            <div className="row">
                <div className="column column-2">
                    <div className="sidebar"><Sidebar org={this.state.org} click={this.handleClick}/></div>
                </div>
                <div className="column column-10">{this.renderCharts()}</div>
            </div>
        );
    }
}

