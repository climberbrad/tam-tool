import React, {Component} from 'react';
import ContactLink from './ContactLink';

class ContactList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            contacts: props.contacts
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        let filteredContacts = this.state.contacts.filter((contact) => {
                return contact.name.indexOf(this.state.search) !== -1;
            }
        );

        return (
            <div>
                <input type="text" placeholder="Search" value={this.state.search}
                       onChange={this.updateSearch.bind(this)}/>

                {filteredContacts.map((contact) => {
                    return <ContactLink contact={contact} key={contact.id}/>
                })}
            </div>
        )
    }
}

export default ContactList;