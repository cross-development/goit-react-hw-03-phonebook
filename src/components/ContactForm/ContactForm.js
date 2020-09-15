//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
	static propTypes = {
		onAddContact: PropTypes.func.isRequired,
	};

	state = {
		name: '',
		number: '',
	};

	handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

	handleSubmit = e => {
		e.preventDefault();

		const { name, number } = this.state;

		this.props.onAddContact(name, number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number } = this.state;

		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				<label>
					Name
					<input
						autoFocus
						type="text"
						name="name"
						value={name}
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Number
					<input
						type="text"
						name="number"
						value={number}
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
					/>
				</label>

				<button className={styles.button} type="submit">
					Add contact
				</button>
			</form>
		);
	}
}

export default ContactForm;
