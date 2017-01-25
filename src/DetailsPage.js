import React, {Component} from 'react';
import Sidebar from './Sidebar';
import HighChartComponent from './HighChartComponent';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            charts: ["totalSpend", "logins", "spendPerService"]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(chartList) {
        this.setState({
            charts: chartList
        });
    }

    render1Chart() {
        return (
            <div>
                <div className="row">
                    <div className="column column-12"><HighChartComponent org={this.state.org} graphType={this.state.charts[10]}/></div>
                </div>
            </div>
        );
    }

    render2Charts() {
        return (
            <div>
                <div className="row">
                    <div className="column column-6"><HighChartComponent org={this.state.org} graphType={this.state.charts[0]}/></div>
                    <div className="column column-6"><HighChartComponent org={this.state.org} graphType={this.state.charts[1]}/></div>
                </div>
            </div>
        );
    }

    render3Charts() {
        return (
            <div>
                <div className="row">
                    <div className="column column-6"><HighChartComponent className="chart" org={this.state.org} graphType={this.state.charts[0]}/></div>
                    <div className="column column-6"><HighChartComponent className="chart" org={this.state.org} graphType={this.state.charts[1]}/></div>
                </div>
                <div className="row">
                    <div className="column column-12"><HighChartComponent className="chart" org={this.state.org} graphType={this.state.charts[2]}/>
                    </div>
                </div>
            </div>
        );
    }

    renderCharts() {

        if (this.state.charts.length === 1) {
            return this.render1Chart()
        }

        if (this.state.charts.length === 2) {
            return this.render2Charts()
        }

        if (this.state.charts.length === 3) {
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

