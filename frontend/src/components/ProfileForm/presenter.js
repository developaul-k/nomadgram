import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Form, Input, Button } from 'components/FormElement';
import Loading from 'components/Loading';

const ProfileForm = props => (
	<div className={styles.formBox}>
		<Form className={styles.form} onSubmit={props.handleSubmit}>
			<div className={styles.formContainer}>
				<div className={styles.formRow}>
					<div className={styles.formDt}>
						<img src={props.profileImage} alt={props.username} />
					</div>
					<div className={styles.formDd}>
						<h1 className={styles.username}>{props.userProfile.username}</h1>
					</div>
				</div>
				<div className={styles.formRow}>
					<div className={styles.formDt}>이름</div>
					<div className={styles.formDd}>
						<Input type="text"
							className={styles.formInput}
							value={props.name}
							onChange={props.handleInputChange}
							name={"name"}
						/>
					</div>
				</div>
				<div className={styles.formRow}>
					<div className={styles.formDt}>사용자 이름</div>
					<div className={styles.formDd}>
						<Input type="text"
							className={styles.formInput}
							value={props.username}
							onChange={props.handleInputChange}
							name={"username"}
						/>
					</div>
				</div>
				<div className={styles.formRow}>
					<div className={styles.formDt}>웹사이트</div>
					<div className={styles.formDd}>
						<Input type="text"
							className={styles.formInput}
							value={props.website}
							onChange={props.handleInputChange}
							name={"website"}
						/>
					</div>
				</div>
				<div className={styles.formRow}>
					<div className={styles.formDt}>소개</div>
					<div className={styles.formDd}>
						<Input type="text"
							className={styles.formInput}
							value={props.bio}
							onChange={props.handleInputChange}
							name={"bio"}
						/>
					</div>
				</div>
			</div>
			<Button type="submit" className={styles.formSubmit}>
				{!props.submitLoading ? <span>제출</span> : <Loading />}
			</Button>
		</Form>
	</div>
);

ProfileForm.propTypes = {
	name: PropTypes.string,
	username: PropTypes.string,
	website: PropTypes.string,
	bio: PropTypes.string,
	profileImage: PropTypes.string,
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	submitLoading: PropTypes.bool.isRequired,
}

export default ProfileForm;