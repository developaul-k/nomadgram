import React, { Component } from 'react';
import Modal from './presenter';

class Container extends Component {

	_back = (e) => {
		e.stopPropagation();
		this.props.history.goBack();
	};

	render() {
		return <Modal { ...this.props } back={this._back} />
	}
}

export default Container