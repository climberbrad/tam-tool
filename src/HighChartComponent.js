import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

var config = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of Logins per Account'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'login count'
        }
    },
    series: [
        {
            name: '(1234-5678-9876)',
            data: [29.9, 7.5, 16.4, 29.2, 14.0, 16.0, 35.6, 18.5, 26.4, 14.1, 5.6, 14.4]
        },
        {
            name: '(2006-5683-1234)',
            data: [9.1, 1.5, 10.4, 12.2, 14.0, 16.0, 13.6, 14.5, 21.4, 14.1, 25.6, 14.4]
        },
    ]
}

export default class HighChartComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact,
            highChartConfig: {}
        }
    }

    componentWillMount() {
        var request = new Request("http://localhost:8080/v1/org/" + this.state.contact.id);

        fetch(request)
            .then(response => response.json())
            .then(function (json) {
                config.series[0].data = json.data
                config.chart.type = ''
            })
            .then(items => this.setState({highChartConfig: config}))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    render() {
        return <ReactHighcharts config={this.state.highChartConfig} ref="chart"></ReactHighcharts>;
    }
}
