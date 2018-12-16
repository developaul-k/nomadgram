import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Loading from 'components/Loading';
import PhotoDisplay from "components/PhotoDisplay";
import UserList from 'components/UserList';
import styles from './styles.scss';

const UserProfile = (props, context) => {
	const { userProfile, followerLayerOpen, followingLayerOpen, handleLayerClose } = props;
	return(
		<div className={styles.profile}>

			{props.loading && <Loading />}

			<div className={styles.content}>
				{!props.loading &&
				props.userProfile.length < 1 && (
					<NotFound text={context.t("Nothing found :(")} />
				)}

				{!props.loading &&
				props.userProfile && (
					<div className={styles.profileContents}>
						<header className={styles.profileContainer}>
							<div className={styles.profileImage}>
								<img src={ userProfile.profile_image } alt={`${userProfile.username}님의 프로필 사진`} />
							</div>
							<div className={styles.profileInfo}>
								<div className={styles.profileTop}>
									<strong className={styles.username}>{userProfile.username}</strong>
									<Link to="/account/edit/" className={styles.userProfileEdit}>프로필 편집</Link>
								</div>
								<ul className={styles.profileBtm}>
									<li>게시물 <span>{userProfile.post_count}</span></li>
									<li className={styles.cursor} onClick={followerLayerOpen}>팔로워 <span>{userProfile.followers_count}</span></li>
									<li className={styles.cursor} onClick={followingLayerOpen}>팔로잉 <span>{userProfile.following_count}</span></li>
								</ul>
							</div>
						</header>
						<div className={styles.profileImageContainer}>
							<RenderUserImage images={userProfile.images} />
						</div>
						{ props.seeingLayer && (
							<UserList
								title={context.t(`${props.layerTitle}`)}
								closeLikes={handleLayerClose}
							/>
						) }
					</div>
				)}
			</div>
		</div>
	)
}

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

const RenderUserImage = props => props.images.map(photo => <PhotoDisplay photo={photo} key={photo.id} />);

UserProfile.contextTypes = {
	t: PropTypes.func.isRequired
}

UserProfile.propTypes = {
	loading: PropTypes.bool.isRequired,
	userList: PropTypes.array,
	imageList: PropTypes.array,
	followerLayerOpen: PropTypes.func.isRequired,
	followingLayerOpen: PropTypes.func.isRequired,
	layerTitle: PropTypes.string.isRequired,
}

export default UserProfile;