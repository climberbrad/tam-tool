import React, {Component} from 'react';
import SearchResult from './SearchResult';

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            contacts: props.contacts,
        };
    }

    updateSearch(event) {
        this.setState({searchTerm: event.target.value.substr(0, 20)});
    }

    render() {
        let filteredContacts = this.state.contacts.filter((contact) => {
                return contact.name.indexOf(this.state.searchTerm) !== -1;
            }
        );

        return (
            <div>
                <input type="text" placeholder="Search Orgs" value={this.state.searchTerm}
                       onChange={this.updateSearch.bind(this)}/>
                {
                    this.state.searchTerm !== '' &&
                    filteredContacts.map((contact) => {
                        return <SearchResult contact={contact} key={contact.id}/>
                    })
                }
            </div>
        )
    }
}

export default Search;