import React, {useEffect} from "react";
import Elements from "./elements/elements";
import Profile from "../profile/profile";
import { useDispatch } from "react-redux";
import { getCards } from '../../services/actions/cards';

const Main = ({ onClick }) => {
	const dispatch = useDispatch();

	useEffect(() => {
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
