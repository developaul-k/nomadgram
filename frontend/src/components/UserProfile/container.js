import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from './presenter';

class Container extends Component {
	state = {
		loading: true,
		seeingLayer: false,
		layerTitle: ""
	}
	static propTypes = {
		getProfile: PropTypes.func.isRequired,
		userList: PropTypes.array,
	}

	render() {
		return <UserProfile {...this.state} {...this.props}
			followerLayerOpen={this._followerLayerOpen}
			followingLayerOpen={this._followingLayerOpen}
			handleLayerClose={this._handleLayerClose} />
	}

	componentDidMount() {
		const { getProfile } = this.props;
		getProfile();
	}

	componentDidUpdate(prevProps, prevState) {
		const { getProfile } = this.props;
		if(prevProps.match.params !== this.props.match.params){
			getProfile();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.userProfile){
			this.setState({
				loading: false
			})
		}
	}

	_followerLayerOpen = (e) => {
		e.preventDefault();
		const { getFollower } = this.props;

		getFollower();

		this.setState({
			seeingLayer: true,
			layerTitle: "Followers"
		});
	}

	_followingLayerOpen = (e) => {
		e.preventDefault();
		const { getFollowing } = this.props;

		getFollowing();

		this.setState({
			seeingLayer: true,
			layerTitle: "Following"
		});
	}

	_handleLayerClose = e => {
		e.preventDefault();

		this.setState({
			seeingLayer: false
		})
	}
}

export default Container;