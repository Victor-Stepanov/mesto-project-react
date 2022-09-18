import React, { useEffect } from "react";
import Elements from "./elements/elements";
import Profile from "../profile/profile";
import { useDispatch } from "react-redux";
import { getCards } from '../../services/actions/cards';
import { getUserInfo } from "../../services/actions/user";

const Main = ({ onClick }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserInfo());
		dispatch(getCards());
	}, [dispatch]);


	return (
		<main>
			<Profile onClick={onClick} />
			<Elements />
		</main>
	);
}

export default Main;
