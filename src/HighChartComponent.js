import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

class HighChartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            config: props.config
        }
    }

    render() {
        return <ReactHighcharts config={this.state.config} ref="chart"></ReactHighcharts>;
    }
}

export default HighChartComponent;
