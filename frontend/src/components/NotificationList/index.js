import React from 'react';
import styles from './styles.scss';

const NotificationList = (props, context) => {
	const { notification } = props;
	if ( notification.notification_type === 'like' ) {
		return <RenderLikeNotification notification={notification} />;
	} else if ( notification.notification_type === 'comment' ) {
		return <RenderCommentNotification notification={notification} />;
	} else if ( notification.notification_type === 'follow' ){
		return <RenderFollowNotification notification={notification} />;
	} 
}

const RenderLikeNotification = (props, context) => {
	const { notification } = props;
	return (
		<li className={styles.notificationLi}>
			<span className={styles.notificationProfileImage}><img src={notification.creator.profile_image} alt={notification.creator.username} /></span>
			<span className={styles.notificationUsername}>
				{notification.creator.username}님이 회원님의 사진을 좋아합니다.
				<em className={styles.notificationDate}>{notification.natural_time}</em>
			</span>
			<span className={styles.notificationImage}><img src={notification.image.file} alt={notification.to} /></span>
		</li>
	)
}

const RenderCommentNotification = (props, context) => {
	const { notification } = props;
	return (
		<li className={styles.notificationLi}>
			<span className={styles.notificationProfileImage}><img src={notification.creator.profile_image} alt={notification.creator.username} /></span>
			<span className={styles.notificationUsername}>
				{notification.creator.username}님이 댓글을 남겼습니다:
				<em className={styles.notificationComment}>{notification.comment}</em>
				<em className={styles.notificationDate}>{notification.natural_time}</em>
			</span>
			<span className={styles.notificationImage}><img src={notification.image.file} alt={notification.to} /></span>
		</li>
	)
}

const RenderFollowNotification = (props, context) => {
	const { notification } = props;
	return (
		<li className={styles.notificationLi}>
			<span className={styles.notificationProfileImage}>
				<img src={notification.creator.profile_image} alt={notification.creator.username} />
			</span>
			<span className={styles.notificationUsername}>
				{notification.creator.username}님이 팔로우를 요청했습니다.
				<em className={styles.notificationDate}>{notification.natural_time}</em>
			</span>
		</li>
	)
}

export default NotificationList;