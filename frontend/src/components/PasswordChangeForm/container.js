import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileForm from './presenter';

class Container extends Component {
	state = {
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
		modal: "",
		submitLoading: false
	}

	render() {
		return <ProfileForm {...this.state} {...this.props} handleInputChange={this._handleInputChange} handleSubmit={this._handleSubmit}/>
	}

	static propTypes = {
		userProfile: PropTypes.object
	}

	_handleInputChange = (e) => {
		const { target : { value, name } } = e;

		this.setState({
			[name]: value,
		})
	}

	_handleSubmit = (e) => {
		e.preventDefault();

		const { userProfile } = this.props;
		const { currentPassword, newPassword } = this.state;

		this._passwordChange(userProfile.username, currentPassword, newPassword, localStorage.getItem('jwt'));

		this.setState({
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
			submitLoading: true
		})
	}

	_passwordChange = ( username, current_password, new_password, token ) => {
		fetch(`/users/${username}/password/`, {
			method: "PUT",
			headers: {
				Authorization: `JWT ${token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				current_password,
				new_password
			})
		})
		.then(response => {
			const _ = this;

			if(response.status !== 200) {
				_.setState({
					modal: 'fail',
					submitLoading: false
				})
				setTimeout(function(){
					_.setState({
						modal: ''
					})
				}, 2000)
				return;
			}
			_.setState({
				modal: 'complete'
			})
			setTimeout(function(){
				_.setState({
					modal: '',
					submitLoading: false
				})
			}, 2000)
			return
		})
	}

	static propTypes = {
		putChangePassword: PropTypes.func.isRequired
	}
}

export default Container;