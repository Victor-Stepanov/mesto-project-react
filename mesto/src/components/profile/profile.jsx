import React from 'react';
import { useSelector } from 'react-redux';
import profileStyles from './profile.module.css';




const Profile = ({ onClick }) => {
	const { profile } = useSelector(state => state.userData);

	return (
		<>
			{profile &&
				<section className={profileStyles.profile}>
					<img className={profileStyles.profile__avatar} src={profile.avatar} alt="Аватар" />
					<div className={profileStyles.profile__box}>
						<div className={profileStyles.profile__info}>
							<h1 className={profileStyles.profile__name}>{profile.name}</h1>
							<button onClick={onClick} className={profileStyles.profile__edit_btn} type='button'></button>
						</div>
						<p className={profileStyles.profile__moniker}>{profile.about}</p>
					</div>
					<button className={profileStyles.profile__add_btn} type='button'></button>
				</section>}
		</>
	);
}

export default Profile;