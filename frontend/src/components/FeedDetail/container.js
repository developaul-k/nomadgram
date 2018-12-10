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

		if (!this.props.feed) {
			getFeedDetail();
		} else {
			this.setState({
				loading: false
			})
		}
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
		feed: PropTypes.object,
	}
}

export default Container;