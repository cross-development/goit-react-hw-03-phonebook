//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ContactListItem from '../ContactListItem';
//Styles
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
	<ul className={styles.list}>
		{contacts.map(({ id, name, number }) => (
			<ContactListItem key={id} name={name} number={number} onRemove={() => onRemoveContact(id)} />
		))}
	</ul>
);

ContactList.propTypes = {
	onRemoveContact: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default ContactList;
