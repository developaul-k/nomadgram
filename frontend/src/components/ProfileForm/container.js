import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileForm from 'components/ProfileForm';

class Container extends Component {
	state = {
		name: "",
		username: "",
		website: "",
		bio: "",
		propfileImage: "",
	}

	render() {
		return <ProfileForm {...this.state}/>
	}
}

export default Container;