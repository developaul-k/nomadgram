import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import NotificationList from 'components/NotificationList';

const Notification = props => {
	return (
		<div className={styles.notification}>
			<div className={styles.mask} onClick={props.closeNotification}></div>
			<div className={styles.container}>
				{props.loading ? (
					<div className={styles.loading}>
						<LoadingNotification />
					</div>
				) : (
					<ul className={styles.notificationUl}>
						{props.notificationList.map(notification => <NotificationList notification={notification} user={notification} key={notification.id} />)}
					</ul>
				)}
			</div>
		</div>
	)
};

const LoadingNotification = props => (
	<div className={styles.notification}>
		<Loading />
	</div>
)


Notification.propTypes = {
	loading: PropTypes.bool.isRequired,
	notificationList: PropTypes.array,
	closeNotification: PropTypes.func.isRequired
}

export default Notification;