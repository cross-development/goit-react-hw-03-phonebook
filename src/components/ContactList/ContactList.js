//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ContactListItem from '../ContactListItem/ContactListItem';
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
	contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
