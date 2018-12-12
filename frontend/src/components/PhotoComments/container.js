import React, { Component } from 'react';
import PhotoComments from './presenter';

class Container extends Component {
	state = {
		expanded: false
	}
	render() {
		return (
			<PhotoComments {...this.state} {...this.props} handleToggle={this._handleToggle} />
		)
	}

	_handleToggle = event => {
		const { target } = event;

		target.remove();

		this.setState({
			expanded: true
		})
	}
}

export default Container;