import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		putChangePassword: (current_password, new_password) => {
			dispatch(userActions.putChangePassword(ownProps.userProfile.username, current_password, new_password))
		}
	}
}

export default connect(null, mapDispatchToProps)(Container);