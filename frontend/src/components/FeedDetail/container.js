import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedDetail from './presenter';

class Container extends Component {
	state = {
		loading: true
	}
	render() {
		return <FeedDetail {...this.state} {...this.props} />
	}

	componentDidMount() {
		const { getFeedDetail } = this.props;
		getFeedDetail();
	}

	componentWillReceiveProps = nextProps => {
		if ( nextProps.feed ) {
			this.setState({
				loading: false
			})
		}
	}
	static propTypes = {
		getFeedDetail: PropTypes.func.isRequired,
		feed: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.array
		])
	}
}

export default Container;