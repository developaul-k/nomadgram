import React, { Component } from "react";
import PropTypes from 'prop-types';
import Navigation from "./presenter";

class Container extends Component {
	state = {
		term: "",
		seeingNotification: false
	}
	static propTypes = {
		goToSearch: PropTypes.func.isRequired,
		notificationList: PropTypes.array
	}
	render() {
		return (
			<Navigation
				onSubmit={this._onSubmit}
				onInputChange={this._onInputChange}
				openNotification={this._openNotification}
				closeNotification={this._closeNotification}
				value={this.state.term}
				{...this.state}
				{...this.props}
			/>
		);
	}
	_onInputChange = (event) => {
		const { target : { value } } = event;
		this.setState({
			term: value
		})
	}
	_onSubmit = event => {
		const { goToSearch } = this.props;
		const { term } = this.state;
		event.preventDefault();
		if ( term.length > 0 ) {
			goToSearch(term)
			this.setState({
				term: ""
			})
		}
	}
	_openNotification = () => {
		const { getNotification } = this.props;

		this.setState({
			seeingNotification: true
		});

		getNotification();
	}

	_closeNotification = () => {

		this.setState({
			seeingNotification: false
		});
	}
}

export default Container;