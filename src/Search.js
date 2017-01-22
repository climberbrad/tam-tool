import React, {Component} from 'react';
import SearchResult from './SearchResult';
import DetailsPage from './DetailsPage';

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            orgs: [],
            found: false,
            org: {}
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.refs.search.focus();
    }

    componentWillMount() {
        var request = new Request("http://localhost:8080/v1/orgs/");

        fetch(request)
            .then(response => response.json())
            .then(json => this.setState({orgs: json}))
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    updateSearch(event) {
        this.setState({searchTerm: event.target.value.substr(0, 20)});
    }

    handleClick(org) {
        this.setState({
            searchTerm: org.name,
            found: true,
            org: org
        });
    }

    render() {
        let filteredContacts = this.state.orgs.filter((org) => {
                return org.name.indexOf(this.state.searchTerm) !== -1;
            }
        );

        return (
            <div>
                <input className="search-box" ref="search" type="text" placeholder="Search Orgs"
                       value={this.state.searchTerm}
                       onChange={this.updateSearch.bind(this)}/>
                {
                    this.state.searchTerm !== '' &&
                    filteredContacts.map((org) => {
                        if (this.state.found === false) {
                            return <SearchResult org={org} key={org.id} click={this.handleClick}/>
                        } else {
                            return <DetailsPage org={this.state.org}/>
                        }
                    })
                }
            </div>
        )
    }
}