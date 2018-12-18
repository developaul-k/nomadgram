import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileForm from './presenter';

class Container extends Component {
	state = {
		name: "",
		username: "",
		website: "",
		bio: "",
		profileImage: "",
		submitLoading: false,
		modalOpen: false,
	}

	render() {
		return (
			<ProfileForm {...this.state} {...this.props}
			handleInputChange={this._handleInputChange}
			handleSubmit={this._handleSubmit}
			/>
		)
	}

	static propTypes = {
		putProfile: PropTypes.func.isRequired,
		userProfile: PropTypes.object,
	}

	componentDidMount() {
		const { userProfile } = this.props;
		this.setState({
			name: userProfile.name,
			username: userProfile.username,
			website: userProfile.website,
			bio: userProfile.bio,
			profileImage:userProfile.profile_image
		})

	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.userProfile) {
			this.setState({
				submitLoading: false
			})
		}
	};

	_handleInputChange = (e) => {
		const { target : { value, name } } = e;

		this.setState({
			[name]: value,
		})
	}

	_handleSubmit = (e) => {
		e.preventDefault();

		const { putProfile, userProfile } = this.props;
		const { name, website, bio, profileImage } = this.state;

		this.setState({
			submitLoading: true
		})
		putProfile(userProfile.username, this.state.username, name, website, bio, profileImage);
	}
}

export default Container;