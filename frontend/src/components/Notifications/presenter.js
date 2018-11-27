import React from 'react';
import styles from './styles.scss'

const Notifications = (props, context) => {
	return (
		<div className={styles.notification}>
			<div className={styles.notificationInner}>
				<ul className={styles.notificationUl}>
				</ul>
			</div>
		</div>
	)
}

export default Notifications