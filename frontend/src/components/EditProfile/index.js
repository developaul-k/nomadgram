import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
	const { user : { userProfile, username } } = state;
	return {
		userProfile,
		username
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getProfile: (username) => {
			dispatch(userActions.getProfile(username))
		},
		putProfile: (username, changeUsername, name, website, bio, profileImage) => {
			dispatch(userActions.putProfile(username, changeUsername, name, website, bio, profileImage))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Container);