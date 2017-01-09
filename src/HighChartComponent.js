import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

export default class HighChartComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact,
            graphType: props.graphType,
            highChartConfig: {}
        }
    }

    componentWillMount() {
        var request = new Request("http://localhost:8080/v1/org/" + this.state.contact.id + "/" + this.state.graphType);

        fetch(request)
            .then(response => response.json())
            .then(items => this.setState({highChartConfig: items}))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    render() {
        return <ReactHighcharts config={this.state.highChartConfig} ref="chart"></ReactHighcharts>;
    }
}
