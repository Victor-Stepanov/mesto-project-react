import React from "react";
import headerStyles from './header.module.css';



const Header = () => {
	return (
		<header className={headerStyles.header}>
			<a href="_" className={headerStyles.header__link}>
				<img className={headerStyles.header__logo} src={require('../../images/header/logo.png')} alt="" />
			</a>
	  </header>

	)
}

export default Header;