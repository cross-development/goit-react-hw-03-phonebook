//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Filter.module.css';

const Filter = ({ title, value, onChangeFilter }) => (
	<div className={styles.filterWrapper}>
		<label>
			{title}
			<input
				type="text"
				value={value}
				autoComplete="off"
				className={styles.input}
				onChange={e => onChangeFilter(e.target.value)}
			/>
		</label>
	</div>
);

Filter.defaultProps = {
	title: '',
};

Filter.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
