import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { infoReducer } from './userReducer';



export const rootReducer = combineReducers({
	cardsData: cardsReducer,
	userData:infoReducer
	
})