import React, {Component} from 'react';
import DetailsPage from './DetailsPage';

export default class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            org: props.org,
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
        this.props.click(this.state.org);
    }

    render() {
        return (
            <div>

                <div id="search-result"><a onClick={this.handleClick} href="">{this.state.org.name}</a> {this.state.org.id}</div>
                {
                    this.state.isClicked &&
                    <DetailsPage org={this.state.org}/>
                }
            </div>
        )
    }
}
