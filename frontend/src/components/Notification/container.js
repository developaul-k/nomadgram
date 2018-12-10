import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from './presenter';

class Container extends Component{
	state = {
		loading: true
	}
	render() {
		return <Notification {...this.props} {...this.state} />
	}

	componentDidMount = () => {
		const { notificationList } = this.props;

		if ( notificationList ) {
			this.setState({
				loading: false
			})
		}
	}

	componentWillReceiveProps = nextProps => {
		if ( nextProps.notificationList ) {
			this.setState({
				loading: false
			})
		}
	}

	static propTypes = {
		notificationList: PropTypes.array,
	}
}

export default Container