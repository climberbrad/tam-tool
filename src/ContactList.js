import React, {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            contacts: props.contacts
        };
    }


    render() {

        let filteredContacts = this.state.contacts.filter((contact) => {
                return contact.name.indexOf(this.state.search) !== -1;
            }
        );

        return (
            <div>
                {filteredContacts.map((contact) => {
                    return <Contact contact={contact} key={contact.id}/>
                })}
            </div>
        )
    }
}

export default ContactList;