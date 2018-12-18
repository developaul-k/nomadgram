import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ProfileForm/styles.scss';
import { Form, Input, Button } from 'components/FormElement';
import Loading from 'components/Loading';

const PasswordChangeForm = props => (
	<div className={styles.formBox}>
		<Form className={styles.form} onSubmit={props.handleSubmit}>
			<div className={styles.formContainer}>
				<div className={styles.formRow}>
					<div className={styles.formDt}>이전 비밀번호</div>
					<div className={styles.formDd}>
						<Input type="password"
							className={styles.formInput}
							value={props.currentPassword}
							onChange={props.handleInputChange}
							name={"currentPassword"}
						/>
					</div>
				</div>
				<div className={styles.formRow}>
					<div className={styles.formDt}>새 비밀번호</div>
					<div className={styles.formDd}>
						<Input type="password"
							className={styles.formInput}
							value={props.newPassword}
							onChange={props.handleInputChange}
							name={"newPassword"}
						/>
					</div>
				</div>
				<div className={styles.formRow}>
					<div className={styles.formDt}>새 비밀번호 확인</div>
					<div className={styles.formDd}>
						<Input type="password"
							className={styles.formInput}
							value={props.confirmPassword}
							onChange={props.handleInputChange}
							name={"confirmPassword"}
						/>
					</div>
				</div>
			</div>
			<Button type="submit" className={styles.formSubmit}>
				{!props.submitLoading ? <span>비밀번호 변경</span> : <Loading />}
			</Button>
			{ props.modal === 'complete' && <RenderCompleteModal text="비밀번호가 변경 되었습니다." /> }
			{ props.modal === 'fail' && <RenderCompleteModal text="이전 비밀번호가 맞지 않습니다." /> }
		</Form>
	</div>
);

const RenderCompleteModal = (props, context) => {
	return (
		<div className={styles.completeModal}>
			<p>{ props.text }</p>
		</div>
	)
}


PasswordChangeForm.propTypes = {
	currentPassword: PropTypes.string,
	newPassword: PropTypes.string,
	confirmPassword: PropTypes.string,
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	modal: PropTypes.string.isRequired,
	submitLoading: PropTypes.bool.isRequired
}

export default PasswordChangeForm;