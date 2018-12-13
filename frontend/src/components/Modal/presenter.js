import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import FeedPhoto from 'components/FeedPhoto';
import Loading from 'components/Loading';

const Modal = (props, context) => {
	if (props.loading) {
		return <LoadingModal />
	} else if (props.feed) {
		return (
			<div className={styles.container}>
				<div className={styles.mask} onClick={props.back}></div>
				<div className={styles.modalContainer}>
					<FeedPhoto {...props.feed} mode="row" />
				</div>
			</div>
		)
	}
}

const LoadingModal = props => (
	<div>
		<Loading />
	</div>
)

Modal.propTypes = {
	loading: PropTypes.bool.isRequired,
	feed: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]),
	back: PropTypes.func.isRequired
}

export default Modal;