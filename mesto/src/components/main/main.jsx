import React from "react";
import Elements from "../elements/elements";
import Profile from "../profile/profile";


const Main = ({onClick}) => {
	return (
		<main>
			<Profile onClick={onClick} />
			<Elements />
		</main>
	);
}

export default Main;
