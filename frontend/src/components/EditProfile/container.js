import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditProfile from './presenter';

class Container extends Component {
	state = {
		loading: true
	}
	render() {
		return (
			<EditProfile {...this.state} {...this.props}
				userProfile={this.props.userProfile}
				handleTab={this._handleTab}
			/>
		)
	}

	componentDidMount() {
		const { getProfile, username } = this.props;
		getProfile(username);
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.userProfile) {
			this.setState({
				loading: false
			})
		}
	}

	static propTypes = {
		getProfile: PropTypes.func.isRequired,
		userProfile: PropTypes.object
	}

}

export default Container;