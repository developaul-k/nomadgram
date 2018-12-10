import { connect } from 'react-redux';
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log(ownProps.location.pathname)
	return {
		searchByTerm: () => {
			
		}
	}
}

export default connect(null, mapDispatchToProps)(Container);