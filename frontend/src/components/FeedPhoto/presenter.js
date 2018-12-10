import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Link } from "react-router-dom";
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';
import UserList from 'components/UserList';

const FeedPhoto = (props, context) => {
	return (
		<div className={`${styles.feedPhoto} ${props.mode === 'row' ? styles.feedPhotoRow : null}`}>
			{ props.mode !== 'row' ? <RenderHeader {...props} /> : null }
			<div className={styles.contentBox}>
				<div className={styles.feedImage}>
					<img src={props.file} alt={props.caption} />
				</div>
				{ props.mode !== 'row' ? (
					<div className={styles.meta}>
						<PhotoActions
							number={props.like_count}
							isLiked={props.is_liked}
							photoId={props.id}
							openLikes={props.openLikes}
						/>
						<p className={styles.caption}>
							<strong>{props.creator.username}</strong>	{props.caption}
						</p>
						<PhotoComments
							caption={props.caption}
							creator={props.creator.username}
							comments={props.comments}
						/>
						<span className={styles.timeStamp}>
							<TimeStamp time={props.natural_time} />
						</span>
						<CommentBox photoId={props.id} />
					</div>
				) : (
					<div className={styles.meta}>
						<RenderHeader {...props} />
						<p className={styles.caption}>
							<strong>{props.creator.username}</strong>	{props.caption}
						</p>
						<div className={styles.commentBox}>
							<PhotoComments
								caption={props.caption}
								creator={props.creator.username}
								comments={props.comments}
							/>
						</div>
						<PhotoActions
							number={props.like_count}
							isLiked={props.is_liked}
							photoId={props.id}
							openLikes={props.openLikes}
						/>
						<span className={styles.timeStamp}>
							<TimeStamp time={props.natural_time} />
						</span>
						<CommentBox photoId={props.id} />
					</div>
				) }
			</div>
			{props.seeingLikes &&
					<UserList
						title={context.t('Likes')}
						closeLikes={props.closeLikes}
					/>
			}
		</div>
	)
}

const RenderHeader = props => (
	<header className={styles.header}>
		<Link to={`/users/${props.creator.username}/`}>
			<img
				src={props.creator.profile_image || require('images/noPhoto.jpg')}
				alt={props.creator.username}
				className={styles.image}
			/>
		</Link>
		<div className={styles.headerColumn}>
			<div className={styles.creator}>
				<Link to={`/users/${props.creator.username}/`}>
					{props.creator.username}
				</Link>
			</div>
			<span className={styles.location}>{props.location}</span>
		</div>
	</header>
)

FeedPhoto.contextTypes = {
	t: PropTypes.func.isRequired
}

FeedPhoto.propTypes = {
	creator: PropTypes.shape({
		profile_image: PropTypes.string,
		username: PropTypes.string.isRequired,
	}).isRequired,
	location: PropTypes.string.isRequired,
	file: PropTypes.string.isRequired,
	like_count: PropTypes.number.isRequired,
	caption: PropTypes.string.isRequired,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			creator: PropTypes.shape({
				profile_image: PropTypes.string,
				username: PropTypes.string.isRequired,
			}).isRequired,
		}),
	).isRequired,
	natural_time: PropTypes.string.isRequired,
	is_liked: PropTypes.bool.isRequired,
	seeingLikes:PropTypes.bool.isRequired,
	closeLikes:PropTypes.func.isRequired,
	openLikes: PropTypes.func.isRequired,
	likes: PropTypes.arrayOf(
		PropTypes.shape({
			profile_image: PropTypes.string,
			username: PropTypes.string.isRequired,
			name: PropTypes.string
		}).isRequired
	),
	mode: PropTypes.string
}

export default FeedPhoto;