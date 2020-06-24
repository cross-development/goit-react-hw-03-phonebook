//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Section.module.css';

const Section = ({ title, children }) => {
	return (
		<section className={styles.section}>
			{title && <h2>{title}</h2>}
			{children}
		</section>
	);
};

Section.defaultProps = {
	title: 'Section title',
};

Section.propTypes = {
	title: PropTypes.string,
};

export default Section;
