import React, { Component } from 'react';
import Notifications from './presenter';

class Container extends Component{
	render() {
		return <Notifications {...this.props} {...this.state} />
	}
}

export default Container