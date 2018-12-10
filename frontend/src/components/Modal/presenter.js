import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Modal = (props, context) => (
	<div className={styles.container} onClick={props.back}>
		Modal
	</div>
)

Modal.propTypes = {
	back: PropTypes.func.isRequired
}

export default Modal;