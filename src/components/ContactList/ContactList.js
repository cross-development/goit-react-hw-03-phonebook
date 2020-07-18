//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ContactListItem from '../ContactListItem/ContactListItem';
//Styles
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
	return (
		<ul className={styles.contactList}>
			{contacts.map(({ id, name, number }) => (
				<ContactListItem
					key={id}
					name={name}
					number={number}
					onRemove={() => onRemoveContact(id)}
				/>
			))}
		</ul>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
