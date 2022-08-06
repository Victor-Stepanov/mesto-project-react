import React, { useEffect } from 'react';
import profileStyles from './profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {getInfoAboutUserFromServer} from '../../services/actions/user'



const Profile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getInfoAboutUserFromServer())
	}, [dispatch])

	const { info } = useSelector((state) => state.userData)
	

	return (
		<section className={profileStyles.profile}>
			<img className={profileStyles.profile__avatar} src={info.avatar} alt="Аватар" />
			<div className={profileStyles.profile__box}>
				<div className={profileStyles.profile__info}>
					<h1 className={profileStyles.profile__name}>{info.name }</h1>
					<button className={profileStyles.profile__edit_btn} type='button'></button>
				</div>
				<p className={profileStyles.profile__moniker}>{ info.about}</p>
			</div>
			<button className={profileStyles.profile__add_btn} type='button'></button>
		</section>
	);
}

export default Profile;