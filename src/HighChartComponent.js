import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

export default class HighChartComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            graphName: props.graphName,
            graphType: props.graphType,
            highChartConfig: {},
            consolidatedAccount: props.consolidatedAccount
        }
    }

    componentWillMount() {
        var request = new Request("http://localhost:8080/v1/org"
            + "/" + this.state.org.id
            + "/" + this.state.graphType
            + "/" + this.state.graphName);

        fetch(request, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.consolidatedAccount)
        })
            .then(response => response.json())
            .then(items => this.setState({highChartConfig: items}))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    render() {
        return (
            <div className="tam-tool-graph">
                <ReactHighcharts config={this.state.highChartConfig}/>
            </div>
        );
    }
}
