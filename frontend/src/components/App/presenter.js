import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Explore from 'components/Explore';
import Search from 'components/Search';
import UserProfile from 'components/UserProfile';
import Modal from 'components/Modal';
import FeedDetail from 'components/FeedDetail';
import EditProfile from 'components/EditProfile';

class App extends Component {

	previousLocation = this.props.location;

	componentWillUpdate(nextProps) {
		let { location } = this.props;

		if (
			nextProps.history.action !== "POP" &&
			(!location.state || !location.state.modal)
		) {
			this.previousLocation = this.props.location;
		}
	}
	render() {
		let { location } = this.props;

		let isModal = !!(
			location.state &&
			location.state.modal &&
			this.previousLocation !== location
		);

		return [
			// Nav,
			// Routes,
			this.props.isLoggedIn ? <Navigation key={1} /> : null,
			this.props.isLoggedIn ? <PrivateRoutes isModal={isModal} location={location} prevLocation={this.previousLocation} key={2}/> : <PublicRoutes key={2}/>,
			<Footer key={3}/>
		];
	}
}

// const App = props => [
// 	// Nav,
// 	// Routes,
// 	props.isLoggedIn ? <Navigation key={1} /> : null,
// 	props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
// 	<Footer key={3}/>
// ];

App.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
}

const PrivateRoutes = props => (
	<div>
		<Switch location={props.isModal ? props.prevLocation : props.location} >
			<Route exact path="/" component={Feed} />
			<Route path="/explore" component={Explore} />
			<Route path="/search/:searchTerm" component={Search} />
			<Route path="/users/:username" component={UserProfile} />
			<Route path="/images/:id" component={FeedDetail} />
			<Route path="/account" component={EditProfile} />
		</Switch>
		{props.isModal ? <Route path="/images/:id" component={Modal} /> : null}
	</div>
)

const PublicRoutes = props => (
	<Switch>
		<Route exact path="/" component={Auth} />
		<Route exact path="/forgot" render={ () => "password" } />
		<Route component={Auth} />
	</Switch>
)

export default App;
