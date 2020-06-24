//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Filter.module.css';

const Filter = ({ title, value, onChangeFilter }) => {
	return (
		<div className={styles.filterWrapper}>
			<label>
				{title}
				<input
					className={styles.phonebookInput}
					type="text"
					value={value}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);
};

Filter.defaultProps = {
	title: '',
};

Filter.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
