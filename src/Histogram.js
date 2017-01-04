import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';
import Highlight from 'react-highcharts';

var config = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
};

class Histogram extends Component {
    constructor(props) {
        super(props)
    }

    render() {


        ReactDOM.render(React.createElement(ReactHighcharts, { config: config }), document.getElementById('test'));
        ReactDOM.render(React.createElement(
            Highlight,
            { className: 'jsx' },
        ), document.getElementById('code-js'));
        ReactDOM.render(React.createElement(
            Highlight,
            { className: 'html' },
        ), document.getElementById('code-html'));

        return (<div>hi</div>)
    }
}

export default Histogram;
