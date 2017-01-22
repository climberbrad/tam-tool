import React, {Component} from 'react';

export default class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.click(this.state.org);
    }

    render() {
        return (
            <div>
                <div id="search-result"><a onClick={this.handleClick} href="">{this.state.org.name}</a> {this.state.org.id}</div>
            </div>
        )
    }
}
