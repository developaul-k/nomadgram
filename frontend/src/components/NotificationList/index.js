import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const NotificationList = (props, context) => {
	const { notification } = props;
	if ( notification.notification_type === 'like' || notification.notification_type === 'comment' ) {
		return <RenderNotification {...props} />;
	} else if ( notification.notification_type === 'follow' ){
		return <RenderFollowNotification {...props} />;
	} 
}

const RenderNotification = (props, context) => {
	const { notification, closeNotification } = props;
	return (
		<li className={styles.notificationLi} onClick={closeNotification}>
			<Link to={ `/images/${notification.image_id}/` }>
				<span className={styles.notificationProfileImage}>
					<img src={notification.creator.profile_image} alt={notification.creator.username} />
				</span>
				{ notification.notification_type === 'like' ? (
					<span className={styles.notificationUsername}>
						{notification.creator.username}님이 회원님의 사진을 좋아합니다.
						<em className={styles.notificationDate}>{notification.natural_time}</em>
					</span>
				) : (
					<span className={styles.notificationUsername}>
						{notification.creator.username}님이 댓글을 남겼습니다:
						<em className={styles.notificationComment}>{notification.comment}</em>
						<em className={styles.notificationDate}>{notification.natural_time}</em>
					</span>
				) }
				<span className={styles.notificationImage}>
					<img src={notification.image.file} alt={notification.to} />
				</span>
			</Link>
		</li>
	)
}

const RenderFollowNotification = (props, context) => {
	const { notification, closeNotification } = props;
	return (
		<li className={styles.notificationLi} onClick={closeNotification}>
			<Link to={ `/users/${notification.creator.username}/` }>
				<span className={styles.notificationProfileImage}>
					<img src={notification.creator.profile_image} alt={notification.creator.username} />
				</span>
				<span className={styles.notificationUsername}>
					{notification.creator.username}님이 팔로우를 요청했습니다.
					<em className={styles.notificationDate}>{notification.natural_time}</em>
				</span>
			</Link>
		</li>
	)
}

NotificationList.propTypes = {
	notification: PropTypes.object,
	closeNotification: PropTypes.func.isRequired,
}

export default NotificationList;