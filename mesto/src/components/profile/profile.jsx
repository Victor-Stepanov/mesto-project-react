import React from 'react';
import profileStyles from './profile.module.css';



const Profile = () => {
	
	return (
		<section className={profileStyles.profile}>
			<img className={profileStyles.profile__avatar} src={require('../../images/profile/Avatar.jpg')} alt="Аватар" />
			<div className={profileStyles.profile__box}>
				<div className={profileStyles.profile__info}>
					<h1 className={profileStyles.profile__name}>Жак-Ив Кусто</h1>
					<button className={profileStyles.profile__edit_btn} type='button'></button>
				</div>
				<p className={profileStyles.profile__moniker}>Исследователь океана</p>
			</div>
			<button className={profileStyles.profile__add_btn} type='button'></button>
		</section>
	);
}

export default Profile;