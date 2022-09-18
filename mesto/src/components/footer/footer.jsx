import React from "react";
import styles from './footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footer__copyright}>&copy; 2021 Mesto Russia</p>
		</footer>
	)
}