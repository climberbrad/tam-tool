import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';
import Highlight from 'react-highcharts';


var config = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Logins per Account'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Logins per month'
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
};

class BarChart extends Component {

    // When the DOM is ready, create the chart.
    componentDidMount() {
        // ReactDOM.render(React.createElement(ReactHighcharts, {config: config}), document.getElementById('barchart-div'));
        // ReactDOM.render(React.createElement(Highlight, {className: 'jsx'},), document.getElementById('code-js'));
        // ReactDOM.render(React.createElement(Highlight, {className: 'html'},), document.getElementById('code-html'))
    }

    render() {
        return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
    }
}

export default BarChart;
