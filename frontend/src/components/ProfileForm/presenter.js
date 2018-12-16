import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Form, Input, Button } from 'components/FormElement';
import Loading from 'components/Loading';

const ProfileForm = props => (
	<div className={styles.formBox}>
		<Form className={styles.form}>
			<div className={styles.formContainer}>
				<div className={styles.formRow}>
					<div className={styles.formDt}>
						<button type="button" className={styles.imageChangeButton}>
							<img src={props.profileImage} alt={props.username} />
						</button>
					</div>
					<div className={styles.formDd}>
						<h1 className={styles.username}>{props.userProfile.username}</h1>
						<button type="button" className={styles.imageChangeText}>프로필 사진 바꾸기</button>
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
			{ props.modalOpen && <RenderModal modalOpen={props.modalOpen} handleModalClose={props.handleModalClose} /> }
		</Form>
	</div>
);

ProfileForm.propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleModalOpen: PropTypes.func.isRequired,
	handleModalClose: PropTypes.func.isRequired,
}

const RenderModal = props => (
	<div className={styles.modal}>
		<div className={styles.modalMask} onClick={props.handleModalClose}></div>
		<div className={styles.modalContents}>
			<div className={styles.modalTitleArea}>
				<h2 className={styles.modalTitle}>프로필 사진 바꾸기</h2>
			</div>
			<ul className={styles.modalMenuList}>
				<li className={styles.modalMenuLi}>
					<button type="button" className={styles.modalMenuButtonType1}>사진 업로드</button>
				</li>
				<li className={styles.modalMenuLi}>
					<button type="button" className={styles.modalMenuButtonType2}>현재 사진 삭제</button>
				</li>
				<li className={styles.modalMenuLi}>
					<button type="button" className={styles.modalMenuButtonType3} onClick={props.handleModalClose}>취소</button>
				</li>
			</ul>
		</div>
	</div>
)

export default ProfileForm;