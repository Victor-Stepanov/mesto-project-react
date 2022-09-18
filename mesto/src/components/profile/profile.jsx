import React, { useEffect } from 'react';
import profileStyles from './profile.module.css';




const Profile = ({onClick}) => {
	


	return (
		<section className={profileStyles.profile}>
			<img className={profileStyles.profile__avatar} alt="Аватар" />
			<div className={profileStyles.profile__box}>
				<div className={profileStyles.profile__info}>
					<h1 className={profileStyles.profile__name}></h1>
					<button onClick={onClick} className={profileStyles.profile__edit_btn} type='button'></button>
				</div>
				<p className={profileStyles.profile__moniker}></p>
			</div>
			<button className={profileStyles.profile__add_btn} type='button'></button>
		</section>
	);
}

export default Profile;