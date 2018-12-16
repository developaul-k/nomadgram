import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditProfile from './presenter';

class Container extends Component {
	state = {
		name: "",
		username: "",
		website: "",
		bio: "",
		profileImage: "",
		action: "changeProfile",
		loading: true,
		modalOpen: false,
		submitLoading: false
	}
	render() {
		return (
			<EditProfile {...this.state}
				userProfile={this.props.userProfile} handleInputChange={this._handleInputChange}
				handleSubmit={this._handleSubmit} handleModalOpen={this._handleModalOpen} handleModalClose={this._handleModalClose}
			/>
		)
	}

	componentDidMount() {
		const { getProfile, username } = this.props;
		getProfile(username);
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.userProfile) {
			const { userProfile } = nextProps;
			this.setState({
				loading: false,
				submitLoading: false,
				name: userProfile.name,
				username: userProfile.username,
				website: userProfile.website,
				bio: userProfile.bio,
				profileImage: userProfile.profile_image,
			})
		}
	}

	static propTypes = {
		getProfile: PropTypes.func.isRequired,
		userProfile: PropTypes.object,
		putProfile: PropTypes.func.isRequired
	}	

	_handleInputChange = (e) => {
		const { target : { value, name } } = e;

		this.setState({
			[name]: value,
		})

	}

	_handleSubmit = (e) => {
		e.preventDefault();

		const { putProfile } = this.props;
		const { name, website, bio, profileImage } = this.state;

		this.setState({
			submitLoading: true
		})
		putProfile(this.props.username, this.state.username, name, website, bio, profileImage);
	}

	_handleModalOpen = e => {
		e.preventDefault();
		e.stopPropagation();

		this.setState({
			modalOpen: true
		})
	}
	_handleModalClose = e => {
		e.preventDefault();
		e.stopPropagation();

		this.setState({
			modalOpen: false
		})
	}
}

export default Container;