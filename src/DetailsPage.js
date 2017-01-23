import React, {Component} from 'react';
import Sidebar from './Sidebar';
import HighChartComponent from './HighChartComponent';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            json: '',
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log('details click!')
        this.setState({
            clicked: true
        })
    }

    renderGraphs() {
        if (this.state.clicked === false) {
            return this.renderMultiGraphs()
        } else {
            return this.renderOneChart()
        }
    }

    renderMultiGraphs() {
        return (
            <div className="column">
                <div className="row">
                    <div className="column">
                        <div className="small-chart"><HighChartComponent org={this.state.org} graphType="spend"/></div>
                    </div>
                    <div className="column">
                        <div className="small-chart"><HighChartComponent org={this.state.org} graphType="logins"/></div>
                    </div>
                </div>
                <div className="row">
                    <div className="long-chart"><HighChartComponent org={this.state.org} graphType="spendPerService"/>
                    </div>
                </div>
            </div>
        );
    }

    renderOneChart() {
        return (
            <div className="column">
                <div className="row">
                    <div className="column">
                        <div className="card">18</div>
                    </div>
                    <div className="column">
                        <div className="card">19</div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="wide-chart"><HighChartComponent org={this.state.org}
                                                                        graphType="spendPerService"/></div>
                    </div>
                </div>
            </div>

        );
    }

    render() {
        return (
            <div className="row">
                <div className="column column-2">
                    <div className="left-column"><Sidebar org={this.state.org} click={this.handleClick}/></div>
                </div>
                <div className="column column-10">
                    <div className="row">
                        <div className="column column-6"><HighChartComponent org={this.state.org} graphType="spend"/></div>
                        <div className="column column-6"><HighChartComponent org={this.state.org} graphType="logins"/></div>
                    </div>
                    <div className="row">
                        <div className="column column-12"><HighChartComponent org={this.state.org} graphType="spendPerService"/></div>
                    </div>
                </div>

            </div>
        );
    }
}

