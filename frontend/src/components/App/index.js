import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Container from './container';

const mapStateToProps = ( state, ownProps ) => {
	const { user } = state;
	return {
		isLoggedIn: user.isLoggedIn
	}
}

export default withRouter(connect(mapStateToProps)(Container));