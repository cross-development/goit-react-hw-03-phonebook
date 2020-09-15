//Core
import React, { Component } from 'react';
//Components
import Filter from '../Filter';
import Section from '../Section';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
//Utils
import { v4 as uuid } from 'uuid';

export class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};

	componentDidMount() {
		const existContact = localStorage.getItem('contacts');

		if (existContact) {
			this.setState({ contacts: JSON.parse(existContact) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { contacts } = this.state;

		if (prevState.contacts !== contacts) {
			localStorage.setItem('contacts', JSON.stringify(contacts));
		}
	}

	addContact = (name, number) => {
		const { contacts } = this.state;

		const isContactExists = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			return alert(`${name} is already in contacts`);
		}

		const contact = {
			id: uuid(),
			name,
			number,
		};

		this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }));
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;

		return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
	};

	removeContactById = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(({ id }) => id !== contactId),
		}));
	};

	handleChangeFilter = filter => this.setState({ filter });

	render() {
		const { contacts, filter } = this.state;

		const visibleContacts = this.getVisibleContacts();

		return (
			<>
				<Section title="Phonebook">
					<ContactForm onAddContact={this.addContact} />
				</Section>

				<Section title="Contacts">
					{contacts.length > 1 && (
						<Filter
							value={filter}
							title="Find contacts by name"
							onChangeFilter={this.handleChangeFilter}
						/>
					)}

					{contacts.length > 0 && (
						<ContactList contacts={visibleContacts} onRemoveContact={this.removeContactById} />
					)}
				</Section>
			</>
		);
	}
}

export default App;
