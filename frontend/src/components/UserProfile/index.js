import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
	const { user : { userProfile, userList, username } } = state;
	return {
		userProfile,
		userList,
		username
	}
}


const mapDispatchToProps = (dispatch, ownProps) => {
	const { match : { params : { username } } } = ownProps;
	return {
		getProfile: () => {
			dispatch(userActions.getProfile(username));
		},
		getFollower: () => {
			dispatch(userActions.getFollower(username));
		},
		getFollowing: () => {
			dispatch(userActions.getFollowing(username));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
