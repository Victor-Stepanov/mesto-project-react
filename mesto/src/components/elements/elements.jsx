import React, { useState} from 'react';
import elementsStyles from './elements.module.css';


const Elements = () => {


	return (
		<section className={elementsStyles.elements}>
		
						<div className={elementsStyles.element}>
							<img className={elementsStyles.element__image} />
							<div className={elementsStyles.element__info}>
								<h2 className={elementsStyles.element__name}></h2>
								<div className={elementsStyles.element__like}>
									<button className={elementsStyles.element__like_btn} type="button"></button>
									<span className={elementsStyles.element__like_counter}></span>
								</div>
							</div>
							<button  className={elementsStyles.element__delete_btn}></button>
						</div>
					)
			
		</section>
	)
}

export default Elements;