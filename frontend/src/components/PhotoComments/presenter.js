import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoComments = props => (
	<div className={styles.photoCommentsBox}>
		<button type="button" onClick={props.handleToggle} className={styles.commentsToggle}>댓글 {props.comments.length}개 모두보기</button>
		<ul className={styles.photoComments}>
			{ props.expanded ? (
				props.comments.map( (comment, index) => (
					<Comment username={comment.creator.username} comment={comment.message} key={comment.id} />
				))
			) : (
				props.comments.map( (comment, index) => (
					index < 3 && <Comment username={comment.creator.username} comment={comment.message} key={comment.id} />
				))
			) }
		</ul>
	</div>
);

const Comment = props => (
	<li className={styles.commentsList}>
		<span className={styles.commentAuthor}>{props.username}</span>
		<span className={styles.commentText}>{props.comment}</span>
	</li>
);

PhotoComments.propTypes = {
	caption: PropTypes.string.isRequired,
	creator: PropTypes.string.isRequired,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			creator: PropTypes.shape({
				profile_image: PropTypes.string,
				username: PropTypes.string.isRequired,
			}).isRequired,
		}),
	).isRequired,
	expanded: PropTypes.bool.isRequired,
	handleToggle: PropTypes.func.isRequired
}

export default PhotoComments;