import React, { Component } from "react";
import PropTypes from 'prop-types';
import Navigation from "./presenter";

class Container extends Component {
	state = {
		term: "",
		seeingNotifications: false
	}
	static propTypes = {
		goToSearch: PropTypes.func.isRequired
	}
	render() {
		return (
			<Navigation
				onSubmit={this._onSubmit}
				onInputChange={this._onInputChange}
				ctrlNotification={this._ctrlNotification}
				value={this.state.term}
				{...this.state}
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
	_ctrlNotification = () => {
		const { seeingNotifications } = this.state;

		if ( seeingNotifications ) {
			this.setState({
				seeingNotifications: false
			});
		} else {
			this.setState({
				seeingNotifications: true
			});
		}
	}
}

export default Container;