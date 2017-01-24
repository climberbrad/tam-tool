import React, {Component} from 'react';
import SearchResult from './SearchResult';

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            orgs: [],
            found: false
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
        this.setState({
            found: false,
            searchTerm: event.target.value.substr(0, 20)
        });
    }

    handleClick(org) {
        this.props.click(org);
        this.setState({
            searchTerm: org.name,
            found: true
        });
    }

    render() {
        let filteredContacts = this.state.orgs.filter((org) => {
                return org.name.indexOf(this.state.searchTerm) !== -1;
            }
        );

        return (
            <div className="center"><div className="bottom-aligner" />
                <input className="search-box" ref="search" type="text" placeholder="Search Orgs"
                       value={this.state.searchTerm}
                       onChange={this.updateSearch.bind(this)}/>
                {
                    this.state.searchTerm !== '' && this.state.found == false &&
                    filteredContacts.map((org) => {
                        return <SearchResult org={org} key={org.id} click={this.handleClick}/>
                    })
                }
            </div>
        )
    }
}