import React, {Component} from 'react';
import Sidebar from './Sidebar';
import HighChartComponent from './HighChartComponent';


var histogramData = {
    title: {
        text: 'Total Spend'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Dollars'
        }
    },
    series: [{
        name: '(Any Account)',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
};

var columnData = {
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

export default class DetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: props.contact,
            json: ''
        }
    }

    // componentDidMount() {
    //     var request = new Request('http://localhost:8080/v1/org');
    //
    //     fetch(request).then(function (response) {
    //         // Convert to JSON
    //         return response.json();
    //     }).then(function (j) {
    //         console.log(JSON.stringify(j.data));
    //     }).catch(function (error) {
    //         console.log('Request failed', error)
    //     });
    // }



    render() {
        return (
            <div>
                <div id="leftcolumn"><Sidebar contact={this.state.contact}/></div>
                <div id="centercolumn"><HighChartComponent contact={this.state.contact}/></div>
                <div id="rightcolumn"><HighChartComponent contact={this.state.contact}/></div>
            </div>
        );
    }
}

