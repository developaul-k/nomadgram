import React from 'react';
import PropTypes from 'prop-types';
import FeedPhoto from 'components/FeedPhoto';
import Loading from 'components/Loading';
import styles from './styles.scss';

const FeedDetail = props => {
	if(props.loading){
		return <LoadingFeed />
	} else if (props.feed) {
		return (
			<div className={styles.imageDetail}>
				<FeedPhoto {...props.feed} mode="row" page="detail" />
			</div>
		)
	}
};

const LoadingFeed = props => (
	<div>
		<Loading />
	</div>
)

FeedDetail.propTypes = {
	loading: PropTypes.bool.isRequired,
	FeedDetail: PropTypes.object
}

export default FeedDetail;