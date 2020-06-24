//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove }) => {
	return (
		<li className={styles.listItem}>
			<p className={styles.contact}>
				<span>{name}:</span> {number}
			</p>
			<div className={styles.contactAction}>
				<button type="button" className={styles.contactListButton} onClick={onRemove}>
					Delete
				</button>
			</div>
		</li>
	);
};

ContactListItem.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
