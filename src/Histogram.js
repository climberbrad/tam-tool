import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

var config = {
    title: {
        text: 'Logins'
    },
    subtitle: {
        text: '(30 days)'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        name: '(Any Account)',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
};

class Histogram extends Component {

    // When the DOM is ready, create the chart.
    componentDidMount() {
        // let chart = this.refs.chart.getChart();
        // chart.series[0].addPoint({x: 10, y: 12});

        // ReactDOM.render(React.createElement(ReactHighcharts, {config: config}), document.getElementById('histo-div'));
        // ReactDOM.render(React.createElement(Highlight, {className: 'jsx'},), document.getElementById('code-js'));
        // ReactDOM.render(React.createElement(Highlight, {className: 'html'},), document.getElementById('code-html'))
    }

    render() {
        return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
    }
}

export default Histogram;
