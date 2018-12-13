import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './presenter';

class Container extends Component {
	state = {
		loading: true
	}

	render() {
		return <Modal {...this.state} { ...this.props } back={this._back} />
	}

	componentDidMount() {
		const { getFeedDetail } = this.props;
		getFeedDetail();
	}

	componentDidUpdate(prevProps, prevState) {
		const { getFeedDetail } = this.props;
		if(prevProps.match.params !== this.props.match.params){
			getFeedDetail();
		}
	}

	componentWillReceiveProps = nextProps => {
		if ( nextProps.feed ) {
			this.setState({
				loading: false
			})
		}
	}

	_back = (e) => {
		e.stopPropagation();
		this.props.history.goBack();
	};

	static propTypes = {
		getFeedDetail: PropTypes.func.isRequired,
		feed: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.array
		])
	}
}

export default Container