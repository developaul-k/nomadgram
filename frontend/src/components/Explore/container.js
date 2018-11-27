import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Explore from './presenter';

class Container extends Component{
	state = {
		loading: true
	}
	static propTypes = {
		getExplore: PropTypes.func.isRequired,
		userList: PropTypes.array
	}
	componentDidMount() {
		const { getExplore } = this.props;
		getExplore();

		/*
		아래 코드 적용 후 사용자 및 해시태그 검색 시 userList를 덮어 쓰기 때문에 explore로 가면 검색 한 유저 및 사진이 나옴
		이유는 userList를 공유 하고 있기 때문에 이 경우엔 userList를 체크하지 않고 다시 호출해야함.

		if (!this.props.userList) {
			getExplore();
		} else {
			this.setState({
				loading: false
			})
		}
		*/
	}

	componentWillReceiveProps = nextProps => {
		if ( nextProps.userList ) {
			this.setState({
				loading: false
			})
		}
	}
	render(){
		const { userList } = this.props;
		return <Explore {...this.state} userList={userList} />
	}
}

export default Container;