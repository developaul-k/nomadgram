import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import styles from './styles.scss';
import Loading from 'components/Loading';
import ProfileForm from 'components/ProfileForm';
import PasswordChangeForm from 'components/PasswordChangeForm';

const EditProfile = (props, context) => (
	<div className={styles.container}>
		{ props.loading ? <Loading /> : (
			<div className={styles.editProfile}>
				<RoutedTabs elementType="ul" className={styles.listUl} activeTabClassName="active">
					<li className={styles.listLi}>
						<NavTab to={`${props.match.path}/edit`} className={styles.listAnchor}>프로필 변경</NavTab>
					</li>
					<li className={styles.listLi}>
						<NavTab to={`${props.match.path}/password/change`} className={styles.listAnchor}>비밀번호 변경</NavTab>
					</li>
				</RoutedTabs>
				<div className={styles.detailView}>
					<Switch>
						<Route exact path={`${props.match.path}`} render={() => <Redirect replace to={`${props.match.path}/edit`} />} />
						<Route path={`${props.match.path}/edit`} component={ () => <ProfileForm userProfile={props.userProfile} /> } />
						<Route path={`${props.match.path}/password/change`} component={ () => <PasswordChangeForm {...props} /> } />
					</Switch>
				</div>
			</div>
		) }
	</div>
)

EditProfile.propTypes = {
	loading: PropTypes.bool.isRequired,
	userProfile: PropTypes.object
}

export default EditProfile;